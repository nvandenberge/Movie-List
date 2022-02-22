import { useEffect, useReducer } from "react";
import { reducer, initialState } from "./reducer";
import { MoviesContext } from "./MoviesContext";
import {
  REQUESTS,
  FETCH_TRENDING,
  FETCH_TOP_RATED,
  FETCH_ACTION_MOVIES,
  FETCH_COMEDY_MOVIES,
  FETCH_DOCUMENTRY_MOVIES,
  FETCH_HORROR_MOVIES,
  FETCH_ROMANCE_MOVIES,
} from "./const";
import axios from "axios";

export const Store = ({ children }) => {
  const [movieData, dispatch] = useReducer(reducer, initialState);

  const fetchTrending = async () => {
    try {
      let res = await axios.get(REQUESTS.TRENDING_URL);
      dispatch({
        type: FETCH_TRENDING,
        payload: res.data.results,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTopRated = async () => {
    try {
      let res = await axios.get(REQUESTS.TOP_RATED_URL);
      dispatch({
        type: FETCH_TOP_RATED,
        payload: res.data.results,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchActionMovies = async () => {
    try {
      let res = await axios.get(REQUESTS.ACTION_URL);
      dispatch({
        type: FETCH_ACTION_MOVIES,
        payload: res.data.results,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchComedyMovies = async () => {
    try {
      let res = await axios.get(REQUESTS.COMEDY_URL);
      dispatch({
        type: FETCH_COMEDY_MOVIES,
        payload: res.data.results,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchHorrorMovies = async () => {
    try {
      let res = await axios.get(REQUESTS.HORROR_URL);
      dispatch({
        type: FETCH_HORROR_MOVIES,
        payload: res.data.results,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRomanceMovies = async () => {
    try {
      let res = await axios.get(REQUESTS.ROMANCE_URL);
      dispatch({
        type: FETCH_ROMANCE_MOVIES,
        payload: res.data.results,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDocumentryMovies = async () => {
    try {
      let res = await axios.get(REQUESTS.DOCUMENTRY_URL);
      dispatch({
        type: FETCH_DOCUMENTRY_MOVIES,
        payload: res.data.results,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        movieData,
        dispatch,
        fetchTrending,
        fetchTopRated,
        fetchActionMovies,
        fetchComedyMovies,
        fetchHorrorMovies,
        fetchDocumentryMovies,
        fetchRomanceMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default Store;
