import './App.css';
import "./App.css";
import { useState, useEffect } from "react";
import Filter from "./components/Filter/Filter";
import MoviesList from "./components/MoviesList/MoviesList";
import NavBar from "./components/NavBar/NavBar";
import MovieTrailer from './components/MovieTrailer';
import { data } from "./data.js";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
function App() {
  const [textFilter, setTextFilter] = useState("");
  const [starsRate, setStarsRate] = useState(0);

  useEffect(() => {
    alert("Welcome to my Movies App");
  }, []);

  const [movies, setMovies] = useState(data);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="app">
      <NavBar addMovie={addMovie} />
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Filter
                setTextFilter={setTextFilter}
                setStarsRate={setStarsRate}
              />
              <MoviesList
                movies={movies}
                textFilter={textFilter}
                starsRate={starsRate}
              />
            </Container>
          }
        />
        <Route
          path="/MovieTrailer/:movieid"
          element={<MovieTrailer/>}
        />
      </Routes>
    </div>
  );
}


export default App;
