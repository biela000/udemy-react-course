import React, { useState, useEffect, useCallback } from "react";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";

const App = () => {
  const apiURL =
    "https://react-http-396d0-default-rtdb.europe-west1.firebasedatabase.app/movies.json";
  const [MOVIE_LIST, setMOVIE_LIST] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchMoviesHandler = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(apiURL);
      if (response.status === 404) {
        throw new Error("oopsie doopsie");
      }
      const data = await response.json();
      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].opening,
          releaseDate: data[key].release,
        });
      }
      //const transformedMovies = data.map((key) => {
      //  return {
      //    id: key,
      //    title: data[key].title,
      //    openingText: data[key].opening,
      //    releaseDate: data[key].release,
      //  };
      //});
      setMOVIE_LIST(loadedMovies);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  }, []);
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  const addMovieHandler = async (movie) => {
    await fetch(apiURL, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetchMoviesHandler();
    //setMOVIE_LIST(data);
  };
  return (
    <React.Fragment>
      <AddMovie onFormSubmit={addMovieHandler} />
      <button onClick={fetchMoviesHandler}>Fetch movies</button>
      <MovieList movies={MOVIE_LIST} />
      {isLoading && <h1>Loading movies</h1>}
      {error && <h1>{error}</h1>}
    </React.Fragment>
  );
};

export default App;
