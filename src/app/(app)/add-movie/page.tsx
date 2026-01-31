'use client';

import { useState, useTransition, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useProfile } from '@/context/profile-context';
import { findMovie } from '@/actions/admin';
import type { MovieDetails } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export default function AddMoviePage() {
    const { user, loading: authLoading } = useProfile();
    const router = useRouter();
    const { toast } = useToast();

    const [isPending, startTransition] = useTransition();
    const [searchQuery, setSearchQuery] = useState('');
    const [foundMovie, setFoundMovie] = useState<MovieDetails | null>(null);
    const [customPosterUrl, setCustomPosterUrl] = useState('');
    const [driveFolderUrl, setDriveFolderUrl] = useState('');
    const [driveVideoUrl, setDriveVideoUrl] = useState('');
    const [isFetchingDrive, setIsFetchingDrive] = useState(false);

    const extractFolderId = (url: string) => {
        const patterns = [
            /\/folders\/([a-zA-Z0-9_-]+)/,
            /\/drive\/u\/\d+\/folders\/([a-zA-Z0-9_-]+)/,
            /id=([a-zA-Z0-9_-]+)/
        ];
        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match) return match[1];
        }
        return null;
    };

    const handleFetchDriveInfo = async () => {
        if (!driveFolderUrl) return;
        
        setIsFetchingDrive(true);
        try {
            const folderId = extractFolderId(driveFolderUrl);
            if (!folderId) throw new Error("ID da pasta não encontrado no link.");

            const apiKey = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY;
            if (!apiKey) throw new Error("API Key do Google Drive não configurada.");

            const response = await fetch(
                `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType,size)`
            );
            
            if (!response.ok) throw new Error("Erro ao acessar API do Google Drive");
            
            const data = await response.json();
            const files = data.files || [];
            
            // Filter likely video files
            const videoFiles = files.filter((f: any) => 
                f.mimeType?.startsWith('video/') ||
                f.name?.endsWith('.mp4') || 
                f.name?.endsWith('.mkv') ||
                f.name?.endsWith('.avi')
            );
            
            if (videoFiles.length === 0) {
                toast({
                    variant: 'destructive',
                    title: 'Nenhum vídeo encontrado',
                    description: 'A pasta está vazia ou não é pública? Certifique-se de que a pasta está como "Qualquer pessoa com o link".'
                });
                return;
            }

            // Pick largest file usually the main movie
            videoFiles.sort((a: any, b: any) => parseInt(b.size || '0') - parseInt(a.size || '0'));
            const mainVideo = videoFiles[0];
            
            const directLink = `https://drive.google.com/file/d/${mainVideo.id}/view`;
            setDriveVideoUrl(directLink);
            
            toast({
                title: 'Vídeo encontrado!',
                description: `Selecionado: ${mainVideo.name}`,
            });

        } catch (error: any) {
            console.error("Drive fetch error:", error);
            toast({
                variant: 'destructive',
                title: 'Erro ao ler pasta',
                description: error.message || 'Falha ao buscar arquivos no Drive.'
            });
        } finally {
            setIsFetchingDrive(false);
        }
    };

    if (!authLoading && user?.email !== 'gustavosextaro@gmail.com') {
        router.replace('/');
        return null;
    }

    const handleSearch = async (e: FormEvent) => {
        e.preventDefault();
        if (!searchQuery) return;

        startTransition(async () => {
            setFoundMovie(null);
            try {
                const movie = await findMovie(searchQuery);
                if (movie) {
                    const movieWithDefaults: MovieDetails = {
                        ...movie,
                        genre_ids: movie.genres?.map(g => g.id) || [],
                        videos: { results: [] },
                        trailer_url: null,
                        vote_average: 0, 
                    };
                    setFoundMovie(movieWithDefaults);
                    setCustomPosterUrl(movieWithDefaults.poster_path || '');
                } else {
                    // Falls back here if returns null (empty title etc)
                    toast({
                        variant: 'destructive',
                        title: 'Filme não encontrado',
                        description: 'Não foi possível encontrar um filme com esse título.',
                    });
                }
            } catch (err: any) {
                console.error("Search error:", err);
                toast({
                    variant: 'destructive',
                    title: 'Erro na busca',
                    description: err.message || 'Ocorreu um erro ao buscar o filme.',
                });
            }
        });
    };

    const handleAddToCatalog = async () => {
        if (!foundMovie) return;
        
        try {
            const { initializeFirebase } = await import('@/firebase');
            const { firestore } = initializeFirebase();
            const { doc, setDoc, serverTimestamp } = await import('firebase/firestore');

            await setDoc(doc(firestore, 'movies', String(foundMovie.id)), {
                ...foundMovie,
                poster_path: customPosterUrl,
                backdrop_path: customPosterUrl,
                drive_video_url: driveVideoUrl,
                createdAt: serverTimestamp(),
            });

            toast({
                title: 'Filme adicionado!',
                description: `${foundMovie.title} foi adicionado ao catálogo com sucesso.`,
            });
            setFoundMovie(null);
            setSearchQuery('');
        } catch (error) {
            console.error('Erro ao adicionar filme:', error);
            toast({
                variant: 'destructive',
                title: 'Erro ao adicionar',
                description: 'Ocorreu um erro ao salvar o filme no banco de dados.',
            });
        }
    };

    if (authLoading) {
        return <div className="container mx-auto px-4 md:px-8 py-8"><Skeleton className="h-96 w-full" /></div>;
    }

    return (
        <div className="container mx-auto px-4 md:px-8 py-8">
            <h1 className="text-4xl font-headline mb-8">Adicionar Novo Filme</h1>
            
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Buscar Filme</CardTitle>
                    <CardDescription>Cole um link do Letterboxd ou IMDb (ou digite o título) para buscar automaticamente.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSearch} className="flex items-center gap-4">
                        <div className="w-full">
                            <Label htmlFor="movie-title" className="sr-only">Título do Filme</Label>
                            <Input
                                id="movie-title"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Link do Letterboxd, IMDb ou nome do filme"
                                disabled={isPending}
                            />
                        </div>
                        <Button type="submit" disabled={isPending || !searchQuery}>
                            {isPending ? 'Buscando...' : 'Buscar'}
                        </Button>
                    </form>

                    {isPending && (
                        <div className="mt-8 space-y-4">
                            <Skeleton className="h-8 w-3/4" />
                            <Skeleton className="h-4 w-1/4" />
                            <Skeleton className="h-20 w-full" />
                            <Skeleton className="h-10 w-40" />
                        </div>
                    )}

                    {foundMovie && !isPending && (
                         <div className="mt-8">
                            <h2 className="text-2xl font-headline mb-4">Resultado da Busca</h2>
                             <div className="flex flex-col md:flex-row gap-8">
                                 <div className="w-full md:w-1/3">
                                     <Image
                                         src={foundMovie.poster_path || ''}
                                         alt={`Pôster de ${foundMovie.title}`}
                                         width={500}
                                         height={750}
                                         className="rounded-lg shadow-lg w-full"
                                         data-ai-hint="movie poster"
                                     />
                                 </div>
                                 <div className="w-full md:w-2/3 space-y-4">
                                     <h3 className="text-3xl font-bold font-headline">{foundMovie.title} ({foundMovie.release_date?.split('-')[0] || 'N/A'})</h3>
                                     <div className="flex flex-wrap gap-2">
                                         {foundMovie.genres?.map(g => <Badge key={g.id} variant="secondary">{g.name}</Badge>)}
                                     </div>
                                     <p className="text-muted-foreground">{foundMovie.overview}</p>
                                     <p><strong>Duração:</strong> {foundMovie.runtime} minutos</p>
                                     
                                     <div className="space-y-4 pt-4 border-t border-gray-800">
                                         <h4 className="text-xl font-semibold">Configurações de Mídia</h4>
                                         
                                         <div className="space-y-2">
                                             <Label htmlFor="drive-folder">Pasta do Google Drive (Opcional)</Label>
                                             <div className="flex gap-2">
                                                 <Input 
                                                    id="drive-folder"
                                                    value={driveFolderUrl}
                                                    onChange={(e) => setDriveFolderUrl(e.target.value)}
                                                    placeholder="Cole o link da pasta do Google Drive aqui"
                                                 />
                                                 <Button 
                                                    type="button" 
                                                    variant="secondary" 
                                                    onClick={handleFetchDriveInfo}
                                                    disabled={!driveFolderUrl || isFetchingDrive}
                                                 >
                                                    {isFetchingDrive ? 'Lendo...' : 'Ler Pasta'}
                                                 </Button>
                                             </div>
                                             <p className="text-xs text-muted-foreground">
                                                 O sistema irá buscar automaticamente o maior arquivo de vídeo nesta pasta.
                                             </p>
                                         </div>

                                         <div className="space-y-2">
                                             <Label htmlFor="drive-url">URL do Vídeo (Direto)</Label>
                                             <Input 
                                                id="drive-url"
                                                value={driveVideoUrl}
                                                onChange={(e) => setDriveVideoUrl(e.target.value)}
                                                placeholder="https://drive.google.com/file/d/..."
                                             />
                                         </div>

                                         <div className="space-y-2">
                                             <Label htmlFor="custom-poster">URL do Pôster (Opcional)</Label>
                                             <Input 
                                                id="custom-poster"
                                                value={customPosterUrl}
                                                onChange={(e) => setCustomPosterUrl(e.target.value)}
                                                placeholder="Cole o link do pôster aqui"
                                             />
                                         </div>
                                     </div>

                                     <Button onClick={handleAddToCatalog} className="w-full mt-6" size="lg">
                                        Adicionar ao Catálogo
                                     </Button>
                                 </div>
                             </div>
                         </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
