'use server';

import { searchMovieOnline } from '@/ai/flows/movie-search';

export async function findMovie(title: string) {
    if (!title) return null;
    try {
        console.log(`Buscando filme: ${title}`);
        const result = await searchMovieOnline({ title });
        console.log('Resultado da busca:', result);
        return result;
    } catch (error: any) {
        console.error("Error finding movie detailed:", error);
        // Throw error to be caught by the UI
        throw new Error(error.message || "Erro desconhecido ao buscar filme");
    }
}
