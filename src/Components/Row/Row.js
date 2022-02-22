import React, { useState } from "react";
import "./Row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, movies, isLargeRow }) => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [movieOverview, setMovieOverview] = useState("");
  const [showTrailer, setShowTrailer] = useState(false);
  const base_url = "https://image.tmdb.org/t/p/original/";

  // styling for video player
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  // get trailer from Youtube
  const handleClick = (movie) => {
    // get movie trailer
    trailerUrl
      ? setTrailerUrl("")
      : movieTrailer(movie?.title || "")
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          })
          .catch((error) => console.log(error));
    // get movie title
    movieTitle ? setMovieTitle("") : setMovieTitle(movie.title);
    // get movie overview
    movieOverview ? setMovieOverview("") : setMovieOverview(movie.overview);
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies?.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie?.title}
          />
        ))}
      </div>
      {movieTitle && (
          <div className="row__movieInfo">
            <h2>{movieTitle}</h2>
            <p>{movieOverview}</p>
            <button
              className="row__trailerButton"
              onClick={() => setShowTrailer(!showTrailer)}
            >
              {showTrailer ? "Hide Trailer" : "Show Trailer"}
            </button>
            <button>
              {/* put an AddToList button here and pass it the movie id and stuff
                then inside the AddToList we will make a call to add the movie to users account via express
                then we will make a call to get the users account and then we will pass that to the Account component
              */}
              Add to List
              </button>
          </div>
      )}
      {showTrailer && trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
