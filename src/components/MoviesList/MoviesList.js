import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../movieCard/MovieCard";
import "./movieslist.css";

const Movielist = ({ movies, textFilter, starsRate }) => {
  return (
    <div className="movies">
      {movies
        .filter(
          (movie) =>
            movie.rate >= starsRate &&
            movie.title.toLowerCase().includes(textFilter.toLowerCase())
        )
        .map((movie) => (
          <Link
            to={`/MovieTrailer/${movie.id}`}
            style={{ textDecoration: "none" }}
          >
            {" "}
            <MovieCard movie={movie} key={movie.id} />{" "}
          </Link>
        ))}
    </div>
  );
};

export default Movielist;