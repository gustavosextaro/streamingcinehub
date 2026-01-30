import type { Movie, MovieDetails, PaginatedResponse } from '@/types';
import { mockMovies, genres as allGenres } from './mock-data';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';
import { firebaseConfig } from '@/firebase/config';

// Helper function to simulate async API calls
const simulateFetch = <T>(data: T): Promise<T> => {
    return new Promise(resolve => setTimeout(() => resolve(data), 50));
}

// Helper to fetch movies from Firestore
async function getAllMovies(): Promise<MovieDetails[]> {
    let firestoreMovies: MovieDetails[] = [];
    try {
        const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
        const db = getFirestore(app);
        // fetch all movies from 'movies' collection
        // Note: In a real app with many movies, you wouldn't fetch ALL. 
        // But for this hybrid mock/live setup, it's acceptable.
        const moviesRef = collection(db, 'movies');
        // create a query. Note: orderBy might require an index if mixed with other filters
        // For now just get all.
        const q = query(moviesRef); 
        const querySnapshot = await getDocs(q);
        
        firestoreMovies = querySnapshot.docs.map(doc => {
            const data = doc.data();
            // Serialize the data to remove Firestore Timestamp objects with toJSON methods
            // This converts createdAt/updatedAt Timestamps to plain objects
            return JSON.parse(JSON.stringify(data)) as MovieDetails;
        });
    } catch (e) {
        // Silently fail or warn on server if config is missing or permissions denied
        console.warn("Failed to fetch from Firestore:", e);
    }

    // Return only Firestore movies (New System)
    // We confirm that we only want movies added via the new system (Letterboxd/TMDB import)
    return firestoreMovies;
}

export const getTrending = async (time_window: 'day' | 'week' = 'week'): Promise<Movie[]> => {
  const allMovies = await getAllMovies();
  const movies = [...allMovies].sort((a, b) => b.vote_average - a.vote_average);
  return simulateFetch(movies.slice(0, 10));
};

export const getUpcoming = async (): Promise<Movie[]> => {
  const allMovies = await getAllMovies();
  const movies = [...allMovies].sort((a, b) => new Date(b.release_date || 0).getTime() - new Date(a.release_date || 0).getTime());
  return simulateFetch(movies.slice(0, 10));
};

export const getDiscover = async (filters: Record<string, string> = {}, page: number = 1): Promise<PaginatedResponse<Movie>> => {
    let movies = await getAllMovies();
    if (filters.with_genres) {
        movies = movies.filter(m => m.genre_ids && m.genre_ids.includes(parseInt(filters.with_genres)));
    }
    const total_results = movies.length;
    const total_pages = 1;
    return simulateFetch({
        results: movies,
        page: 1,
        total_pages: total_pages,
        total_results: total_results
    });
};

export const getMovieDetails = async (id: number): Promise<MovieDetails | undefined> => {
  const allMovies = await getAllMovies();
  const movie = allMovies.find(m => m.id === id);
  if (!movie) {
    return simulateFetch(undefined);
  }
  return simulateFetch(movie);
};

export const getRelatedMovies = async (id: number): Promise<Movie[]> => {
    const allMovies = await getAllMovies();
    const movie = allMovies.find(m => m.id === id);
    if (!movie || !movie.genre_ids || !movie.genre_ids.length) return simulateFetch([]);
    
    const primaryGenreId = movie.genre_ids[0];
    const related = allMovies.filter(m => m.id !== id && m.genre_ids && m.genre_ids.includes(primaryGenreId));
    return simulateFetch(related.slice(0, 10));
};

export const searchMovies = async (query: string, page: number = 1): Promise<PaginatedResponse<Movie>> => {
    const allMovies = await getAllMovies();
    const results = allMovies.filter(m => m.title.toLowerCase().includes(query.toLowerCase()));
    return simulateFetch({
        results,
        page: 1,
        total_pages: 1,
        total_results: results.length
    });
};

export const getGenres = async (): Promise<{ id: number; name: string }[]> => {
  return simulateFetch(allGenres);
};

export const getPosterUrl = (path: string | null): string => {
  if (!path) return 'https://picsum.photos/seed/placeholder-poster/500/750';
  // Assuming path is a full URL from our local data or stored URL
  return path;
};

export const getBackdropUrl = (path: string | null): string => {
  if (!path) return 'https://picsum.photos/seed/placeholder-backdrop/1280/720';
  // Assuming path is a full URL from our local data or stored URL
  return path;
};

export const getRecentAdditions = async (): Promise<Movie[]> => {
  const allMovies = await getAllMovies();
  return simulateFetch(allMovies.slice(0, 20));
};
