'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useProfile } from '@/context/profile-context';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { revalidateHome } from '@/actions/movie-actions';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from '@/hooks/use-toast';

interface DeleteMovieButtonProps {
  movieId: string | number;
  movieTitle: string;
  documentId?: string;
}

export function DeleteMovieButton({ movieId, movieTitle, documentId }: DeleteMovieButtonProps) {
  const { user } = useProfile();
  const router = useRouter();
  const { toast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);

  // Authorization check
  if (user?.email !== 'gustavosextaro@gmail.com') {
    return null;
  }

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const { initializeFirebase } = await import('@/firebase');
      const { firestore } = initializeFirebase();
      const { doc, deleteDoc } = await import('firebase/firestore');

      // Use documentId if available (handles legacy random IDs), otherwise fallback to movieId
      const targetId = documentId || String(movieId);
      console.log(`Deleting movie document with ID: ${targetId}`);
      
      await deleteDoc(doc(firestore, 'movies', targetId));

      await revalidateHome();

      toast({
        title: "Filme removido",
        description: `"${movieTitle}" foi removido do catálogo.`,
      });

      window.location.href = '/';
    } catch (error) {
      console.error("Error deleting movie:", error);
      toast({
        variant: "destructive",
        title: "Erro ao remover",
        description: "Não foi possível remover o filme.",
      });
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="sm" className="gap-2">
          <Trash2 className="h-4 w-4" />
          Remover Filme
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Isso excluirá o filme "{movieTitle}" permanentemente do catálogo. 
            Esta ação não pode ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} disabled={isDeleting} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            {isDeleting ? 'Removendo...' : 'Sim, remover'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
