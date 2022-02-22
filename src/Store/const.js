export const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=`;

export const REQUESTS = {
  TRENDING_URL: `${BASE_URL}${process.env.REACT_APP_TMDB_API_KEY}&with_networks=213&language=en-US`,
  TOP_RATED_URL: `${BASE_URL}${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
  ACTION_URL: `${BASE_URL}${process.env.REACT_APP_TMDB_API_KEY}&with_genres=28&language=en-US`,
  COMEDY_URL: `${BASE_URL}${process.env.REACT_APP_TMDB_API_KEY}&with_genres=35&language=en-US`,
  HORROR_URL: `${BASE_URL}${process.env.REACT_APP_TMDB_API_KEY}&with_genres=27&language=en-US`,
  ROMANCE_URL: `${BASE_URL}${process.env.REACT_APP_TMDB_API_KEY}&with_genres=10749&language=en-US`,
  DOCUMENTRY_URL: `${BASE_URL}${process.env.REACT_APP_TMDB_API_KEY}&with_genres=99&language=en-US`,
};

export const FETCH_TRENDING = 'FETCH_TRENDING';
export const FETCH_TOP_RATED = 'FETCH_TOP_RATED';
export const FETCH_ACTION_MOVIES = 'FETCH_ACTION_MOVIES';
export const FETCH_COMEDY_MOVIES = 'FETCH_COMEDY_MOVIES';
export const FETCH_HORROR_MOVIES = 'FETCH_HORROR_MOVIES';
export const FETCH_ROMANCE_MOVIES = 'FETCH_ROMANCE_MOVIES';
export const FETCH_DOCUMENTRY_MOVIES = 'FETCH_DOCUMENTRY_MOVIES';
