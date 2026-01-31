'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { WatchlistButton } from './watchlist-button';
import { ManualPosterButton } from './manual-poster-button';
import VideoPlayer from '@/components/video-player';
import type { MovieDetails } from '@/types';

interface MoviePlayerSectionProps {
  movie: MovieDetails;
}

export function MoviePlayerSection({ movie }: MoviePlayerSectionProps) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <>
      <div className="flex flex-wrap gap-4 mb-6">
        <WatchlistButton 
          movieId={movie.id} 
          movieData={{ 
            title: movie.title, 
            poster_path: movie.poster_path, 
            release_date: movie.release_date,
            runtime: movie.runtime 
          }}
        />
        {movie.drive_video_url && (
          <Button onClick={() => setShowPlayer(true)}>
            ▶️ Assistir Agora
          </Button>
        )}
        {movie.trailer_url ? (
          <Button asChild variant="secondary">
            <Link href={movie.trailer_url} target="_blank" rel="noopener noreferrer">
              Trailer
            </Link>
          </Button>
        ) : (
          <Button variant="outline" disabled>
            Trailer
          </Button>
        )}
        <ManualPosterButton movie={movie} />
      </div>
      
      {showPlayer && movie.drive_video_url && (
        <VideoPlayer
          videoUrl={movie.drive_video_url}
          movieTitle={movie.title}
          onClose={() => setShowPlayer(false)}
        />
      )}
    </>
  );
}
