"use client";

import type { Movie } from "@/types";
import { MovieCard } from "./movie-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Button } from "./ui/button";

interface MovieCarouselProps {
  title: string;
  movies: Movie[];
  genreId?: number;
}

export function MovieCarousel({ title, movies, genreId }: MovieCarouselProps) {
  if (!movies || movies.length === 0) {
    return null;
  }
  
  return (
    <section className="py-6 md:py-8">
      <div className="flex justify-between items-baseline px-4 md:px-8 lg:px-12 mb-4">
        <h2 className="text-2xl font-headline">{title}</h2>
        {genreId && (
          <Button variant="link" asChild className="text-accent">
            <Link href={`/search?genre=${genreId}`}>Ver todos</Link>
          </Button>
        )}
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: false,
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4 px-4 md:px-8 lg:px-12">
          {movies.map((movie) => (
            <CarouselItem key={movie.id} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-1/8 pl-4">
              <MovieCard movie={movie} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex left-4" />
        <CarouselNext className="hidden md:flex right-4" />
      </Carousel>
    </section>
  );
}
