export interface Movie {
  id: number;
  title: string;
  name?: string;
  original_title?: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  genre_ids: number[];
  runtime?: number;
  genres?: { id: number; name: string }[];
  trailer_url?: string | null;
}

export interface MovieDetails extends Movie {
  tagline?: string | null;
  videos: {
    results: {
      key: string;
      site: string;
      type: string;
    }[];
  };
  drive_video_url?: string;
  documentId?: string;
}

export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
