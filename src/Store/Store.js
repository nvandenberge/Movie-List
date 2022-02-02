import { useReducer } from "react";
import { reducer, initialState } from "./reducer";
import { MoviesContext } from "./MoviesContext";
import { ACTIONS } from "./const";
import axios from "axios";

export const Store = ({ children }) => {
  const [movieData, dispatch] = useReducer(reducer, initialState);

  // Action Movies
  const getActionMovies = async () => {
    try {
      let res = await axios.get(ACTIONS.ACTION_URL);
      dispatch({
        type: ACTIONS.FETCH_ACTION_MOVIES,
        payload: res.data.results,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <MoviesContext.Provider value={{ movieData, dispatch, getActionMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default Store;
