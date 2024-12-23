import { useState } from "react";
import Movie from "./Movie/Movie";

const MovieList = ({ tempMovieData, movies }) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default MovieList;
