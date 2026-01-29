import { MovieCarousel } from "@/components/movie-carousel";
import { PersonalizedRecommendations } from "@/components/personalized-recommendations";
import { WatchlistCarousel } from "@/components/watchlist-carousel";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getTrending, getUpcoming, getDiscover } from "@/lib/tmdb";

function CarouselSkeleton() {
    return (
        <div className="py-6 md:py-8 px-4 md:px-8 lg:px-12">
            <Skeleton className="h-8 w-1/4 mb-4" />
            <div className="flex space-x-4">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1/5">
                        <Skeleton className="h-[40vh] w-full" />
                    </div>
                ))}
            </div>
      </div>
    );
}


export default async function HomePage() {
  const trending = await getTrending();
  const upcoming = await getUpcoming();
  const horror = (await getDiscover({ with_genres: '27' })).results;
  const drama = (await getDiscover({ with_genres: '18' })).results;
  const scifi = (await getDiscover({ with_genres: '878' })).results;

  return (
    <div className="flex flex-col space-y-4">
      <MovieCarousel title="Em Alta" movies={trending} />
      <MovieCarousel title="Lançamentos" movies={upcoming} />
      <Suspense fallback={<CarouselSkeleton />}>
        <PersonalizedRecommendations />
      </Suspense>
      <MovieCarousel title="Terror" movies={horror} genreId={27} />
      <MovieCarousel title="Drama" movies={drama} genreId={18} />
      <MovieCarousel title="Ficção Científica" movies={scifi} genreId={878} />
      <Suspense fallback={<CarouselSkeleton />}>
        <WatchlistCarousel />
      </Suspense>
    </div>
  );
}
