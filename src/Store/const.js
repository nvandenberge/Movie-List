export const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=`;

export const REQUESTS = {
  NETFLIX_ORIGINALS_URL: `${BASE_URL}${process.env.REACT_APP_TMDB_API_KEY}&with_networks=213`,
  TOP_RATED_URL: `${BASE_URL}${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
  ACTION_URL: `${BASE_URL}${process.env.REACT_APP_TMDB_API_KEY}&with_genres=28`,
  COMEDY_URL: `${BASE_URL}${process.env.REACT_APP_TMDB_API_KEY}&with_genres=35`,
  HORROR_URL: `${BASE_URL}${process.env.REACT_APP_TMDB_API_KEY}&with_genres=27`,
  ROMANCE_URL: `${BASE_URL}${process.env.REACT_APP_TMDB_API_KEY}&with_genres=10749`,
  DOCUMENTRY_URL: `${BASE_URL}${process.env.REACT_APP_TMDB_API_KEY}&with_genres=99`,
};

export const FETCH_NETFLIX_ORIGINALS = 'FETCH_NETFLIX_ORIGINALS';
export const FETCH_TOP_RATED = 'FETCH_TOP_RATED';
export const FETCH_ACTION_MOVIES = 'FETCH_ACTION_MOVIES';
export const FETCH_COMEDY_MOVIES = 'FETCH_COMEDY_MOVIES';
export const FETCH_HORROR_MOVIES = 'FETCH_HORROR_MOVIES';
export const FETCH_ROMANCE_MOVIES = 'FETCH_ROMANCE_MOVIES';
export const FETCH_DOCUMENTRY_MOVIES = 'FETCH_DOCUMENTRY_MOVIES';
