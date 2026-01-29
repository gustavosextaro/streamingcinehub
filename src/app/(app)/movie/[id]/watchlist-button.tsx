"use client";

import { useState, useTransition, useEffect } from "react";
import { useProfile } from "@/context/profile-context";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Check, Plus } from "lucide-react";
import { useFirestore, setDocumentNonBlocking, deleteDocumentNonBlocking } from "@/firebase";
import { doc, onSnapshot, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";

export function WatchlistButton({ 
    movieId, 
    movieData 
}: { 
    movieId: number, 
    movieData: {
        title: string;
        poster_path: string | null;
        release_date?: string;
        runtime?: number;
    } 
}) {
    const { user, profile } = useProfile();
    const [inWatchlist, setInWatchlist] = useState(false);
    const [isPending, startTransition] = useTransition();
    const { toast } = useToast();
    const firestore = useFirestore();
    const router = useRouter();

    useEffect(() => {
      if (!user || !profile || !firestore) {
        setInWatchlist(false);
        return;
      }
      const watchlistRef = doc(firestore, `users/${user.uid}/profiles/${profile.id}/watchlist`, String(movieId));
      const unsubscribe = onSnapshot(watchlistRef, (doc) => {
        setInWatchlist(doc.exists());
      });
      return () => unsubscribe();
    }, [user, profile, firestore, movieId]);

    const handleWatchlistToggle = () => {
        if (!user) {
            router.push('/login');
            return;
        }
        if (!profile) {
            toast({ title: "Selecione um perfil", description: "Você precisa escolher um perfil para adicionar itens à sua lista." });
            router.push('/profiles');
            return;
        }
        if (!firestore) {
            toast({ title: "Erro", description: "Não foi possível conectar ao banco de dados.", variant: "destructive" });
            return;
        }

        startTransition(() => {
            const watchlistRef = doc(firestore, `users/${user.uid}/profiles/${profile.id}/watchlist`, String(movieId));
            if (inWatchlist) {
                deleteDocumentNonBlocking(watchlistRef);
                toast({ title: "Removido da sua lista" });
            } else {
                setDocumentNonBlocking(watchlistRef, {
                    ...movieData,
                    movieId: movieId,
                    profileId: profile.id,
                    addedAt: serverTimestamp(),
                }, {});
                toast({ title: "Adicionado à sua lista" });
            }
        });
    };

    return (
        <Button onClick={handleWatchlistToggle} disabled={isPending}>
            {inWatchlist ? <Check className="mr-2 h-4 w-4" /> : <Plus className="mr-2 h-4 w-4" />}
            {inWatchlist ? "Na sua lista" : "Adicionar à lista"}
        </Button>
    );
}
