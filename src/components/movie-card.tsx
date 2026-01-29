"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Plus, Check, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getPosterUrl } from '@/lib/tmdb';
import type { Movie } from '@/types';
import { cn } from '@/lib/utils';
import { useProfile } from '@/context/profile-context';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState, useTransition } from 'react';
import { doc, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { useFirestore, setDocumentNonBlocking, deleteDocumentNonBlocking } from '@/firebase';
import { useRouter } from 'next/navigation';

interface MovieCardProps {
  movie: Movie;
  className?: string;
}

export function MovieCard({ movie, className }: MovieCardProps) {
  const { user, profile } = useProfile();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [inWatchlist, setInWatchlist] = useState(false);
  const firestore = useFirestore();
  const router = useRouter();

  useEffect(() => {
    if (!user || !profile || !firestore) {
      setInWatchlist(false);
      return;
    }
    const unsub = onSnapshot(doc(firestore, `users/${user.uid}/profiles/${profile.id}/watchlist`, String(movie.id)), (doc) => {
      setInWatchlist(doc.exists());
    });
    return () => unsub();
  }, [user, profile, firestore, movie.id]);

  const handleWatchlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      router.push('/login');
      return;
    }
    if (!profile) {
        toast({ title: "Selecione um perfil", description: "Você precisa escolher um perfil para usar a lista." });
        router.push('/profiles');
        return;
    }
    if (!firestore) {
      toast({ title: "Erro", description: "Não foi possível conectar ao banco de dados.", variant: "destructive" });
      return;
    }

    startTransition(() => {
      const watchlistRef = doc(firestore, `users/${user.uid}/profiles/${profile.id}/watchlist`, String(movie.id));
      if (inWatchlist) {
        deleteDocumentNonBlocking(watchlistRef);
        toast({ title: "Removido da sua lista" });
      } else {
        const movieData = { 
            id: movie.id,
            title: movie.title, 
            poster_path: movie.poster_path, 
            release_date: movie.release_date,
            vote_average: movie.vote_average,
            overview: movie.overview,
            runtime: movie.runtime,
        };
        setDocumentNonBlocking(watchlistRef, {
            ...movieData,
            profileId: profile.id,
            addedAt: serverTimestamp(),
        }, {});
        toast({ title: "Adicionado à sua lista" });
      }
    });
  };

  const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';

  return (
    <Card className={cn("w-full bg-transparent border-none rounded-lg overflow-hidden group/card", className)}>
      <CardContent className="p-0 relative">
        <Link href={`/movie/${movie.id}`} className="absolute inset-0 z-10" aria-label={`Ver detalhes de ${movie.title}`} />
        <Image
          src={getPosterUrl(movie.poster_path || '')}
          alt={`Pôster de ${movie.title}`}
          width={500}
          height={750}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover/card:scale-110"
          data-ai-hint="movie poster"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
          <h3 className="font-headline text-lg truncate">{movie.title}</h3>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{releaseYear}</span>
            {movie.runtime && <span>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>}
          </div>
        </div>

        <div className="absolute top-2 right-2 z-20 flex flex-col gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity">
            <Button size="icon" variant="secondary" className="rounded-full h-9 w-9" onClick={handleWatchlistToggle} disabled={isPending}>
                {inWatchlist ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                <span className="sr-only">{inWatchlist ? "Remover da lista" : "Adicionar à lista"}</span>
            </Button>
            <Button size="icon" variant="secondary" className="rounded-full h-9 w-9" asChild>
                <Link href={`/movie/${movie.id}`}>
                    <Info className="h-4 w-4" />
                    <span className="sr-only">Mais informações</span>
                </Link>
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
