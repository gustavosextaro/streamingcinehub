'use client';

import { useState, useEffect } from 'react';
import { useProfile } from '@/context/profile-context';
import type { Movie } from '@/types';
import { MovieCarousel } from './movie-carousel';
import { Skeleton } from './ui/skeleton';
import { useFirestore } from '@/firebase';
import { getTrending } from '@/lib/tmdb';
import { deduplicateMovies } from '@/lib/dedup-movies';

export function PersonalizedRecommendations() {
  const { user, profile } = useProfile();
  const [recommendations, setRecommendations] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const firestore = useFirestore();

  useEffect(() => {
    async function fetchRecommendations() {
      setLoading(true);
      // Use trending movies as recommendations for now
      try {
        const trending = await getTrending();
        setRecommendations(deduplicateMovies(trending));
      } catch (e) {
        console.error("Failed to load recommendations", e);
      }
      setLoading(false);
    }

    fetchRecommendations();
  }, [user, profile, firestore]);

  if (loading) {
    return (
        <div className="py-6 md:py-8 px-4 md:px-8 lg:px-12">
            <Skeleton className="h-8 w-1/3 mb-4" />
            <div className="relative">
                <div className="flex space-x-4 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 shrink-0">
                            <Skeleton className="aspect-[2/3] w-full" />
                        </div>
                    ))}
                </div>
            </div>
      </div>
    );
  }

  if (recommendations.length === 0) {
    return null;
  }

  return <MovieCarousel title="Recomendados para você" movies={recommendations} />;
}
