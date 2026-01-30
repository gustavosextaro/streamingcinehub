import { getMovieDetails, getBackdropUrl, getPosterUrl, getRelatedMovies } from "@/lib/tmdb";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MovieCarousel } from "@/components/movie-carousel";
import { notFound } from "next/navigation";
import { WatchlistButton } from "./watchlist-button";
import { ManualPosterButton } from "./manual-poster-button";
import Link from "next/link";

export default async function MovieDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const movieId = parseInt(id, 10);
  if (isNaN(movieId)) {
    notFound();
  }
  
  const moviePromise = getMovieDetails(movieId);
  const relatedPromise = getRelatedMovies(movieId);
  
  const [movie, relatedMovies] = await Promise.all([moviePromise, relatedPromise]);
  
  if (!movie) {
    notFound();
  }

  const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';

  return (
    <div className="w-full">
      <div className="relative h-[35vh] w-full">
        <Image
          src={getBackdropUrl(movie.backdrop_path || '')}
          alt={`Cena do filme ${movie.title}`}
          fill
          className="object-cover object-top"
          priority
          data-ai-hint="movie backdrop"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 -mt-16 md:-mt-24 pb-8 flex flex-col md:flex-row gap-8 z-10 relative">
        <div className="w-1/2 mx-auto md:w-1/3 lg:w-1/4">
          <Image
            src={getPosterUrl(movie.poster_path || '')}
            alt={`Pôster de ${movie.title}`}
            width={500}
            height={750}
            className="rounded-lg shadow-2xl w-full"
            data-ai-hint="movie poster"
          />
        </div>
        <div className="w-full md:w-2/3 lg:w-3/4 md:pt-24 text-foreground">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-2">{movie.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground mb-4">
            <span>{releaseYear}</span>
            {movie.runtime && <span>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}min</span>}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {movie.genres?.map(genre => (
              <Badge key={genre.id} variant="secondary">{genre.name}</Badge>
            ))}
          </div>
          
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
            {movie.trailer_url ? (
              <Button asChild>
                <Link href={movie.trailer_url} target="_blank" rel="noopener noreferrer">
                  Assistir
                </Link>
              </Button>
            ) : (
              <Button variant="outline" disabled>
                Assistir
              </Button>
            )}
            <ManualPosterButton movie={JSON.parse(JSON.stringify(movie))} />
          </div>
          
          {movie.tagline && <p className="text-lg font-bold font-headline mb-2">{movie.tagline}</p>}
          <p className="text-base text-muted-foreground max-w-prose">{movie.overview}</p>
        </div>
      </div>
      
      {relatedMovies && relatedMovies.length > 0 && (
        <div className="mt-16 md:mt-20">
          <MovieCarousel title="Relacionados" movies={relatedMovies} />
        </div>
      )}
    </div>
  );
}
