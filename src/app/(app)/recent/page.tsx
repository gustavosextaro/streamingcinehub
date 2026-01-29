import { MovieCard } from "@/components/movie-card";
import { getRecentAdditions } from "@/lib/tmdb";
import type { Movie } from "@/types";

export default async function RecentPage() {
  const recentMovies = await getRecentAdditions();

  return (
    <div className="container mx-auto px-4 md:px-8 py-8">
      <h1 className="text-4xl font-headline mb-8">Adicionados Recentemente</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {recentMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie as Movie} />
        ))}
      </div>
    </div>
  );
}
