"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useProfile } from "@/context/profile-context";
import { useToast } from "@/hooks/use-toast";
import { useFirestore } from "@/firebase";
import { doc, setDoc, updateDoc, getDoc, serverTimestamp } from "firebase/firestore";
import type { MovieDetails } from "@/types";

interface ManualPosterButtonProps {
  movie: MovieDetails;
}

export function ManualPosterButton({ movie }: ManualPosterButtonProps) {
  const { user } = useProfile();
  const { toast } = useToast();
  const firestore = useFirestore();
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState(movie.poster_path || "");
  const [isUpdating, setIsUpdating] = useState(false);

  // Restrict to specific user email
  if (user?.email !== "gustavosextaro@gmail.com") {
    return null;
  }

  const handleUpdate = async () => {
    if (!url || !firestore) return;

    setIsUpdating(true);
    try {
      const movieRef = doc(firestore, "movies", String(movie.id));
      const movieSnap = await getDoc(movieRef);

      if (movieSnap.exists()) {
        // Update existing Firestore movie
        await updateDoc(movieRef, {
          poster_path: url,
          backdrop_path: url, // Update both as requested
          updatedAt: serverTimestamp(),
        });
      } else {
        // Create override for mock movie in Firestore
        await setDoc(movieRef, {
          ...movie,
          poster_path: url,
          backdrop_path: url,
          createdAt: movieSnap.exists() ? undefined : serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      }

      toast({
        title: "Pôster atualizado!",
        description: "O pôster do filme foi alterado com sucesso.",
      });
      setOpen(false);
      // We don't need to refresh manually if the parent re-renders or data is re-fetched on navigation
      // But for immediate visual feedback, a refresh might be needed if not using real-time sync everywhere
      window.location.reload(); 
    } catch (error: any) {
      console.error("Error updating poster:", error);
      toast({
        variant: "destructive",
        title: "Erro ao atualizar",
        description: error.message || "Ocorreu um erro ao salvar o novo pôster.",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <ImageIcon className="h-4 w-4" />
          Alterar Pôster
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Alterar Pôster</DialogTitle>
          <DialogDescription>
            Cole o link direto da imagem para o pôster do filme.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="poster-url">URL da Imagem</Label>
            <Input
              id="poster-url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://exemplo.com/poster.jpg"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleUpdate} disabled={isUpdating || !url}>
            {isUpdating ? "Salvando..." : "Salvar Alterações"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
