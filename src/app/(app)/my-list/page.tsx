'use client';

import { MovieCard } from "@/components/movie-card";
import type { Movie } from "@/types";
import { collection, orderBy, query } from "firebase/firestore";
import Link from 'next/link';
import { useProfile } from "@/context/profile-context";
import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export default function MyListPage() {
  const { user, profile, loading: authLoading } = useProfile();
  const firestore = useFirestore();

  const watchlistQuery = useMemoFirebase(() => {
    if (!user || !profile || !firestore) return null;
    return query(
      collection(firestore, `users/${user.uid}/profiles/${profile.id}/watchlist`),
      orderBy("addedAt", "desc")
    );
  }, [user, profile, firestore]);

  const { data: watchlist, isLoading: dataLoading } = useCollection<Movie>(watchlistQuery);

  const isLoading = authLoading || (user && dataLoading);

  if (isLoading) {
      return (
          <div className="container mx-auto px-4 md:px-8 py-8">
              <h1 className="text-4xl font-headline mb-8">Minha Lista</h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                  {[...Array(12)].map((_, i) => <Skeleton key={i} className="aspect-[2/3] w-full" />)}
              </div>
          </div>
      )
  }
  
  if (!user) {
    return (
      <div className="container mx-auto px-4 md:px-8 py-8">
        <h1 className="text-4xl font-headline mb-8">Minha Lista</h1>
        <div className="flex flex-col items-center justify-center text-center h-[50vh]">
          <h2 className="text-2xl font-semibold mb-2">Faça login para ver sua lista</h2>
          <p className="text-muted-foreground mb-4">Itens adicionados à sua lista aparecerão aqui.</p>
          <Button asChild>
            <Link href="/login">Fazer Login</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-8 py-8">
      <h1 className="text-4xl font-headline mb-8">Minha Lista</h1>
      {watchlist && watchlist.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {watchlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie as Movie} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center h-[50vh]">
          <h2 className="text-2xl font-semibold mb-2">Sua lista está vazia</h2>
          <p className="text-muted-foreground mb-4">Adicione filmes e séries para assistí-los mais tarde.</p>
          <Link href="/" className="text-accent hover:underline">
            Procurar filmes
          </Link>
        </div>
      )}
    </div>
  );
}
