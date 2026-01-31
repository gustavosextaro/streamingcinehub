'use client';

import { MovieCarousel } from "@/components/movie-carousel";
import { PersonalizedRecommendations } from "@/components/personalized-recommendations";
import { WatchlistCarousel } from "@/components/watchlist-carousel";
import { Suspense, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { deduplicateMovies } from "@/lib/dedup-movies";
import { useFirestore } from "@/firebase";
import { getMoviesByGenre, getTrendingMovies, getRecentReleases, getRecentlyAddedMovies } from "@/lib/firestore-movies";
import type { Movie } from "@/types";

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


export default function HomePage() {
  const firestore = useFirestore();
  
  const [trending, setTrending] = useState<Movie[]>([]);
  const [releases, setReleases] = useState<Movie[]>([]);
  const [justAdded, setJustAdded] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadMovies() {
      if (!firestore) return;
      
      setLoading(true);
      
      try {
        const [trendingData, releasesData, justAddedData] = await Promise.all([
          getTrendingMovies(firestore, 20),
          getRecentReleases(firestore, 20),
          getRecentlyAddedMovies(firestore, 20),
        ]);
        
        setTrending(deduplicateMovies(trendingData));
        setReleases(deduplicateMovies(releasesData));
        setJustAdded(deduplicateMovies(justAddedData));
      } catch (error) {
        console.error('Error loading movies:', error);
      }
      
      setLoading(false);
    }
    
    loadMovies();
  }, [firestore]);
  
  if (loading) {
    return (
      <div className="flex flex-col space-y-4">
        <CarouselSkeleton />
        <CarouselSkeleton />
        <CarouselSkeleton />
        <CarouselSkeleton />
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-4">
      <MovieCarousel title="Em Alta" movies={trending} />
      <MovieCarousel title="Lançamentos" movies={releases} />
      <MovieCarousel title="Últimos Adicionados" movies={justAdded} />
      <Suspense fallback={<CarouselSkeleton />}>
        <PersonalizedRecommendations />
      </Suspense>
    </div>
  );
}
