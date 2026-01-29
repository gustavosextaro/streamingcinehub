'use server';

/**
 * @fileOverview Searches for movie details using the TMDB API directly.
 * Replaces the previous AI-based implementation for accuracy and speed.
 */

import { z } from 'genkit';

const MovieDetailsInputSchema = z.object({
  title: z.string().describe('The title of the movie to search for.'),
});
export type MovieDetailsInput = z.infer<typeof MovieDetailsInputSchema>;

const MovieDetailsOutputSchema = z.object({
  id: z.number(),
  title: z.string(),
  release_date: z.string(),
  runtime: z.number(),
  overview: z.string(),
  poster_path: z.string().url(),
  backdrop_path: z.string().url(),
  genres: z.array(z.object({ id: z.number(), name: z.string() })),
  tagline: z.string().nullish(),
});
export type MovieDetailsOutput = z.infer<typeof MovieDetailsOutputSchema>;

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/original';

const LETTERBOXD_REGEX = /letterboxd\.com\/film\/([^\/]+)/;
const IMDB_REGEX = /imdb\.com\/title\/(tt\d+)/;

export async function searchMovieOnline(input: MovieDetailsInput): Promise<MovieDetailsOutput | null> {
  const apiKey = process.env.TMDB_API_KEY;

  if (!apiKey) {
    console.warn("TMDB_API_KEY not found in environment variables.");
    return null; 
  }

  try {
    let movieId: number | null = null;
    const letterboxdMatch = input.title.match(LETTERBOXD_REGEX);
    const imdbMatch = input.title.match(IMDB_REGEX);

    if (imdbMatch) {
         console.log(`Detected IMDb ID: ${imdbMatch[1]}`);
         // Use TMDB Find API
         const findUrl = `${TMDB_BASE_URL}/find/${imdbMatch[1]}?api_key=${apiKey}&external_source=imdb_id`;
         const findRes = await fetch(findUrl);
         const findData = await findRes.json();
         
         if (findData.movie_results && findData.movie_results.length > 0) {
             movieId = findData.movie_results[0].id;
             console.log(`Found TMDB ID via IMDb: ${movieId}`);
         } else {
             console.warn("No movie found for this IMDb ID");
             return null;
         }
    } else if (letterboxdMatch) {
        console.log(`Detected Letterboxd URL: ${input.title}`);
        // 1. Scrape Letterboxd to find TMDB ID
        // Letterboxd pages usually contain 'data-tmdb-id="12345"' or links to tmdb
        const letterboxdRes = await fetch(input.title, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        const html = await letterboxdRes.text();
        
        // Regex to find TMDB ID in Letterboxd body tag or data attributes
        const tmdbIdMatch = html.match(/data-tmdb-id="(\d+)"/) || html.match(/tmdb\.org\/movie\/(\d+)/);
        
        if (tmdbIdMatch && tmdbIdMatch[1]) {
            movieId = parseInt(tmdbIdMatch[1], 10);
            console.log(`Found TMDB ID via Letterboxd: ${movieId}`);
        } else {
            console.warn("Could not extract TMDB ID from Letterboxd URL");
             // Fallback to searching the slug if extraction fails? No, better to search the slug as title.
             const slug = letterboxdMatch[1].replace(/-/g, ' ');
             input.title = slug; // Update title to be the clean slug for fallback search
        }
    }

    // 2. If we don't have an ID yet, search by title (legacy behavior)
    if (!movieId) {
        console.log(`Searching TMDB by title: ${input.title}`);
        const searchUrl = `${TMDB_BASE_URL}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(input.title)}&language=pt-BR&page=1`;
        const searchRes = await fetch(searchUrl);
        const searchData = await searchRes.json();

        if (!searchData.results || searchData.results.length === 0) {
            console.log("No results found in TMDB.");
            return null;
        }
        movieId = searchData.results[0].id;
    }

    // 3. Get full details (Hybrid: PT-BR for text, EN-US for title/poster)
    const [detailsPtRes, detailsEnRes] = await Promise.all([
      fetch(`${TMDB_BASE_URL}/movie/${movieId}?api_key=${apiKey}&language=pt-BR`),
      fetch(`${TMDB_BASE_URL}/movie/${movieId}?api_key=${apiKey}&language=en-US`)
    ]);
    
    if (!detailsPtRes.ok || !detailsEnRes.ok) {
        console.error("Failed to fetch movie details from TMDB");
        return null;
    }
    
    const [moviePt, movieEn] = await Promise.all([detailsPtRes.json(), detailsEnRes.json()]);

    // 4. Format output (Mixing Data)
    const posterUrl = movieEn.poster_path 
      ? `${TMDB_IMAGE_BASE}${movieEn.poster_path}` 
      : 'https://placehold.co/600x900?text=No+Poster';
      
    const backdropUrl = movieEn.backdrop_path 
      ? `${TMDB_IMAGE_BASE}${movieEn.backdrop_path}` 
      : 'https://placehold.co/1280x720?text=No+Backdrop';

    const output: MovieDetailsOutput = {
      id: movieEn.id,
      title: movieEn.title, // English Title
      release_date: movieEn.release_date || 'N/A',
      runtime: movieEn.runtime || 0,
      overview: moviePt.overview || movieEn.overview || '', // Portuguese Overview (fallback to EN)
      poster_path: posterUrl, // English/Original Poster
      backdrop_path: backdropUrl,
      genres: moviePt.genres || [], // Portuguese Genres
      tagline: moviePt.tagline || movieEn.tagline, // Portuguese Tagline (fallback to EN)
    };

    console.log("TMDB Search successful:", output.title);
    return output;

  } catch (error) {
    console.error("TMDB API Error:", error);
    throw new Error("Failed to fetch data from TMDB");
  }
}
