import React, { useEffect, useContext } from "react";
import { MoviesContext } from "../Store/MoviesContext";
import Row from "./Row";

const MoviePage = () => {
  const {
    movieData,
    fetchNetflixOriginals,
    fetchTopRated,
    fetchActionMovies,
    fetchComedyMovies,
    fetchHorrorMovies,
    fetchRomanceMovies,
    fetchDocumentryMovies,
  } = useContext(MoviesContext);

  useEffect(() => {
    fetchNetflixOriginals();
    fetchTopRated();
    fetchActionMovies();
    fetchComedyMovies();
    fetchHorrorMovies();
    fetchRomanceMovies();
    fetchDocumentryMovies();
  }, []);

  console.log('movies', movieData);

  return (
    <div>
       <Row
        title="NETFLIX ORIGINALS"
        isLargeRow
        movies={movieData?.NetflixOriginals}
      />
      <Row title="TOP RATED" movies={movieData?.TopRated} />
      <Row title="ACTION MOVIES" movies={movieData?.Action} />
      <Row title="COMEDY MOVIES" movies={movieData?.Comedy} />
      <Row title="HORROR MOVIES" movies={movieData?.Horror} />
      <Row title="ROMANCE MOVIES" movies={movieData?.Romance} />
      <Row title="DOCUMENTARIES" movies={movieData?.Documentaries} />
    
    </div>
  );
};

export default MoviePage;
