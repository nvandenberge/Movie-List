import React, { useEffect, useContext } from "react";
import { MoviesContext } from "../../Store/MoviesContext";
import Row from "../Row/Row";

const MoviePage = () => {
  const {
    movieData,
    fetchTrending,
    fetchTopRated,
    fetchActionMovies,
    fetchComedyMovies,
    fetchHorrorMovies,
    fetchRomanceMovies,
    fetchDocumentryMovies,
  } = useContext(MoviesContext);

  // TODO: check if data already exists before making api call to reduce api calls
  useEffect(() => {
    fetchTrending();
    fetchTopRated();
    fetchActionMovies();
    fetchComedyMovies();
    fetchHorrorMovies();
    fetchRomanceMovies();
    fetchDocumentryMovies();
  }, []);

  return (
    <div>
       <Row
        title="TRENDING"
        isLargeRow
        movies={movieData?.Trending}
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
