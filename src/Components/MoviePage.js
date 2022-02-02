import React, { useEffect, useContext } from "react";
import { MoviesContext } from "../Store/MoviesContext";
import Row from "./Row";

const MoviePage = () => {
  const { movieData, getActionMovies } = useContext(MoviesContext);

  useEffect(() => {
    getActionMovies();
  }, []);
  console.log("movies", movieData);

  return( 
  <div>
    Movie Page
    <Row 
    title="Action Movies" movies={movieData?.Action} />
  </div>);
};

export default MoviePage;
