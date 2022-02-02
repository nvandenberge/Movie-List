// import axios from "axios";
// import { useReducer } from "react";
// import { reducer, initialState } from "./reducer";

export const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=`;

export const ACTIONS = {
  ACTION_URL: `${BASE_URL}${process.env.REACT_APP_TMDB_API_KEY}&with_genres=28`,
  // COMEDY_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=35`;
  // HORROR_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=27`;
  // ROMANCE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=10749`;
  // DOCUMENTRY_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=99`;
  // TOP_RATED_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;
  // NETFLIX_ORIGINALS_URL = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_networks=213`;
};

// export const getMovies = async (url, action) => {
//     const [movies, dispatch] = useReducer(reducer, initialState);
//   try {
//     let res = await axios.get(url);
//     dispatch({ type: action, payload: res.data.results });
//   } catch (error) {
//     console.error(error);
//   }
// };
