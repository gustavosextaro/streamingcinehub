import { collection, getDocs, query, where, limit, orderBy } from 'firebase/firestore';
import type { Movie } from '@/types';

/**
 * Fetch movies from Firestore by genre name (Portuguese)
 * @param genreName - Genre name in Portuguese (e.g., "Terror", "Drama")
 * @param limitCount - Number of movies to fetch
 */
export async function getMoviesByGenre(
  firestore: any,
  genreName: string,
  limitCount: number = 20
): Promise<Movie[]> {
  if (!firestore) return [];
  
  try {
    const moviesRef = collection(firestore, 'movies');
    
    // Query movies that have this genre in their genres array
    const q = query(
      moviesRef,
      limit(limitCount)
    );
    
    const snapshot = await getDocs(q);
    const movies: Movie[] = [];
    
    snapshot.forEach((doc) => {
      const data = doc.data();
      
      // Check if this movie has the desired genre
      const hasGenre = data.genres?.some((g: any) => 
        g.name?.toLowerCase() === genreName.toLowerCase()
      );
      
      if (hasGenre) {
        movies.push({
          id: parseInt(doc.id),
          ...data,
        } as Movie);
      }
    });
    
    return movies;
  } catch (error) {
    console.error(`Error fetching movies by genre ${genreName}:`, error);
    return [];
  }
}

/**
 * Fetch movies from Firestore by genre ID
 * Uses efficient 'array-contains' query on 'genre_ids'
 */
export async function getMoviesByGenreId(
  firestore: any,
  genreId: number,
  limitCount: number = 50
): Promise<Movie[]> {
  if (!firestore) return [];
  
  try {
    const moviesRef = collection(firestore, 'movies');
    
    // Use array-contains to filter by genre ID efficiently
    const q = query(
      moviesRef,
      where('genre_ids', 'array-contains', genreId),
      limit(limitCount)
    );
    
    const snapshot = await getDocs(q);
    const movies: Movie[] = [];
    
    snapshot.forEach((doc) => {
      movies.push({
        id: parseInt(doc.id),
        ...doc.data(),
      } as Movie);
    });
    
    return movies;
  } catch (error) {
    console.error(`Error fetching movies by genre ID ${genreId}:`, error);
    return [];
  }
}

/**
 * Fetch trending/recent movies from Firestore
 */
export async function getTrendingMovies(
  firestore: any,
  limitCount: number = 20
): Promise<Movie[]> {
  if (!firestore) return [];
  
  try {
    const moviesRef = collection(firestore, 'movies');
    const q = query(moviesRef, limit(limitCount));
    
    const snapshot = await getDocs(q);
    const movies: Movie[] = [];
    
    snapshot.forEach((doc) => {
      movies.push({
        id: parseInt(doc.id),
        ...doc.data(),
      } as Movie);
    });
    
    return movies;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
}

/**
 * Search movies in Firestore
 * Matches title against query string (case insensitive)
 */
export async function searchMoviesInFirestore(
  firestore: any,
  queryText: string,
  limitCount: number = 50
): Promise<Movie[]> {
  if (!firestore) return [];
  
  try {
    const moviesRef = collection(firestore, 'movies');
    // Since Firestore doesn't support full text search efficiently,
    // we'll fetch a batch and filter client-side or use a simple prefix match if feasible.
    // For 1300 movies, fetching all metadata is acceptable for a smooth search experience.
    // Optimization: In a real app with >5k movies, use Algolia or Typesense.
    
    // Fetch all movies (metadata only ideally, but Firestore sends whole doc)
    const q = query(moviesRef);
    const snapshot = await getDocs(q);
    
    const results: Movie[] = [];
    const normalizedQuery = queryText.toLowerCase();

    snapshot.forEach((doc) => {
      const data = doc.data();
      const title = data.title?.toLowerCase() || '';
      
      if (title.includes(normalizedQuery)) {
        results.push({
          id: parseInt(doc.id),
          ...data,
        } as Movie);
      }
    });

    return results.slice(0, limitCount); // Apply limit after filtering
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
}

/**
 * Get all available genres from Firestore movies
 */
export async function getAllGenresFromFirestore(firestore: any): Promise<{id: string, name: string}[]> {
  if (!firestore) return [];

  try {
    const moviesRef = collection(firestore, 'movies');
    const snapshot = await getDocs(moviesRef);
    const genreMap = new Map<string, string>();

    snapshot.forEach((doc) => {
      const genres = doc.data().genres || [];
      genres.forEach((g: any) => {
        if (g.id && g.name) {
          genreMap.set(String(g.id), g.name);
        }
      });
    });

    return Array.from(genreMap.entries()).map(([id, name]) => ({ id, name })).sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error('Error getting genres:', error);
    return [];
  }
}

/**
 * Fetch recent releases (ordered by release_date desc)
 */
export async function getRecentReleases(
  firestore: any,
  limitCount: number = 20
): Promise<Movie[]> {
  if (!firestore) return [];

  try {
    const moviesRef = collection(firestore, 'movies');
    const q = query(
      moviesRef,
      orderBy('release_date', 'desc'),
      limit(limitCount)
    );

    const snapshot = await getDocs(q);
    const movies: Movie[] = [];

    snapshot.forEach((doc) => {
      movies.push({
        id: parseInt(doc.id),
        ...doc.data(),
      } as Movie);
    });

    return movies;
  } catch (error) {
    console.error('Error fetching recent releases:', error);
    return [];
  }
}

/**
 * Fetch recently added movies (ordered by createdAt desc)
 */
export async function getRecentlyAddedMovies(
  firestore: any,
  limitCount: number = 20
): Promise<Movie[]> {
  if (!firestore) return [];

  try {
    const moviesRef = collection(firestore, 'movies');
    // Note: 'createdAt' might vary in naming (addedAt vs createdAt), 
    // but browser check confirmed 'createdAt' exists.
    const q = query(
      moviesRef,
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    );

    const snapshot = await getDocs(q);
    const movies: Movie[] = [];

    snapshot.forEach((doc) => {
      movies.push({
        id: parseInt(doc.id),
        ...doc.data(),
      } as Movie);
    });

    return movies;
  } catch (error) {
    console.error('Error fetching recently added movies:', error);
    return [];
  }
}
