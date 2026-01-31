import type { Movie } from '@/types';

/**
 * Remove duplicate movies by ID
 * This utility ensures that movie arrays never contain duplicates,
 * which prevents React "duplicate key" errors.
 */
export function deduplicateMovies(movies: Movie[]): Movie[] {
  if (!movies || movies.length === 0) {
    return [];
  }
  
  return Array.from(
    new Map(movies.map(movie => [movie.id, movie])).values()
  );
}
