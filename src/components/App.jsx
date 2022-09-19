import { useState, useEffect } from 'react';
import { GlobalStyles } from 'utils/GlobalStyle';
import data from '../data/movies.json';
import { moviesMapper } from '../utils/mapper';
import { MoviesGallery } from './MoviesGallery/MoviesGallery';

export const App = () => {
  const [movies, setMovies] = useState(() => JSON.parse(localStorage.getItem('movies')) ?? moviesMapper(data));

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const deleteMovie = movieId => {
    setMovies(prevMovies => prevMovies.filter(({ id }) => id !== movieId));
  };

  return (
    <>
      <MoviesGallery movies={movies} deleteMovie={deleteMovie} />
      <GlobalStyles />
    </>
  );
};
