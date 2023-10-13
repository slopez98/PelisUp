export interface IMovie {
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    name?: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: Date;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface ITrendingReponse {
    page: number,
    results: IMovie[],
    total_pages: number,
    total_results: number
}