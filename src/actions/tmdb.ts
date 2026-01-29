
"use server";

import { 
    searchMovies as searchMoviesApi, 
    getDiscover as getDiscoverApi, 
    getGenres as getGenresApi 
} from "@/lib/tmdb";

export async function searchMovies(query: string, page: number) {
    return searchMoviesApi(query, page);
}

export async function getDiscover(filters: Record<string, string>, page: number) {
    return getDiscoverApi(filters, page);
}

export async function getGenres() {
    return getGenresApi();
}
