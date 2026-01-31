"use client";

import { useEffect, useState, Suspense, useTransition, FormEvent } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import type { Movie } from '@/types';
import { MovieCard } from '@/components/movie-card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import { deduplicateMovies } from '@/lib/dedup-movies';
import { useFirestore } from '@/firebase';
import { searchMoviesInFirestore, getMoviesByGenreId, getAllGenresFromFirestore } from '@/lib/firestore-movies';

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const firestore = useFirestore();

  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<{ id: string; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Not fully implemented for Firestore yet
  const [isPending, startTransition] = useTransition();

  const query = searchParams.get('q');
  const genreId = searchParams.get('genre');
  const year = searchParams.get('year');

  // Load genres on mount
  useEffect(() => {
    async function loadGenres() {
        if (!firestore) return;
        const g = await getAllGenresFromFirestore(firestore);
        setGenres(g);
    }
    loadGenres();
  }, [firestore]);

  // Fetch movies based on filters
  useEffect(() => {
    const fetchMovies = async () => {
      if (!firestore) return;
      
      setLoading(true);
      setMovies([]);
      setPage(1);

      try {
          let results: Movie[] = [];

          if (query) {
             // Search by title
             results = await searchMoviesInFirestore(firestore, query, 100);
          } else if (genreId || year) {
             // Filter by Genre or Year
             if (genreId && genreId !== 'all') {
                 // Use efficient Firestore array-contains query for genre ID
                 results = await getMoviesByGenreId(firestore, parseInt(genreId), 100);
             } else {
                 // No genre, just year or all
                 results = await searchMoviesInFirestore(firestore, "", 100);
             }

             if (year) {
                 results = results.filter(m => m.release_date && m.release_date.startsWith(year));
             }
          } else {
             // Default: Show all (limit 100)
             results = await searchMoviesInFirestore(firestore, "", 100);
          }
          
          setMovies(deduplicateMovies(results));
          setTotalPages(1); // Pagination not implemented
      } catch (e) {
          console.error(e);
      }
      
      setLoading(false);
    };
    
    // Only run if firestore is ready
    if (firestore) {
        fetchMovies();
    }
  }, [query, genreId, year, firestore, genres]); // Added genres to dependency to retry if loaded later

  const loadMore = async () => {
    // Implement pagination if needed
  };

  const handleFilterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newGenre = formData.get('genre') as string;
    const newYear = formData.get('year') as string;

    startTransition(() => {
        const params = new URLSearchParams();
        if (query) params.set('q', query);
        if (newGenre && newGenre !== 'all') params.set('genre', newGenre);
        if (newYear) params.set('year', newYear);
        router.push(`/search?${params.toString()}`);
    });
  };

  const clearFilters = () => {
    startTransition(() => {
        const params = new URLSearchParams();
        if (query) params.set('q', query);
        router.push(`/search?${params.toString()}`);
    });
  };

  const hasActiveFilters = genreId || year;
  const pageTitle = query 
    ? `Resultados para "${query}"` 
    : hasActiveFilters 
    ? 'Descobrir Filmes' 
    : 'Todos os Filmes';

  if (loading) {
    return (
      <>
        <h1 className="text-4xl font-headline mb-8">{pageTitle}</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {[...Array(12)].map((_, i) => <Skeleton key={i} className="aspect-[2/3] w-full" />)}
        </div>
      </>
    );
  }

  return (
    <>
        <h1 className="text-4xl font-headline mb-8">{pageTitle}</h1>
        
        <Accordion type="single" collapsible className="mb-8 bg-muted/20 rounded-lg">
            <AccordionItem value="filters" className="border-b-0">
                <AccordionTrigger className="px-6 hover:no-underline">Filtros Avançados</AccordionTrigger>
                <AccordionContent className="px-6">
                <form onSubmit={handleFilterSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="genre">Gênero</Label>
                        <Select name="genre" defaultValue={genreId || 'all'}>
                        <SelectTrigger id="genre" className="bg-background">
                            <SelectValue placeholder="Selecione um gênero" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Todos</SelectItem>
                            {genres.map(g => <SelectItem key={g.id} value={String(g.id)}>{g.name}</SelectItem>)}
                        </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="year">Ano de Lançamento</Label>
                        <Input name="year" id="year" placeholder="Ex: 2023" type="number" defaultValue={year || ''} className="bg-background" />
                    </div>
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                        {hasActiveFilters && <Button type="button" variant="ghost" onClick={clearFilters} disabled={isPending}>Limpar</Button>}
                        <Button type="submit" disabled={isPending}>{isPending ? 'Aplicando...' : 'Aplicar Filtros'}</Button>
                    </div>
                </form>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        {movies.length === 0 ? (
            <p className="text-center text-muted-foreground mt-16">Nenhum resultado encontrado.</p>
        ) : (
            <>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                    {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
                {/* Pagination remove for now until implemented or basic load more */}
            </>
        )}
    </>
  );
}


export default function SearchPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 py-8">
            <Suspense fallback={
                <div className="space-y-8">
                    <Skeleton className="h-10 w-1/3" />
                    <Skeleton className="h-24 w-full" />
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                        {[...Array(12)].map((_, i) => <Skeleton key={i} className="aspect-[2/3] w-full" />)}
                    </div>
                </div>
            }>
                <SearchContent />
            </Suspense>
        </div>
    );
}
