import { Component } from 'react';
import { GlobalStyles } from 'utils/GlobalStyle';
// import movies from '../data/movies.json';
import { moviesMapper } from '../utils/mapper';
import { MoviesGallery } from './MoviesGallery/MoviesGallery';
import Modal from './Modal/Modal';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Notification } from './Notification/Notitfication';
import { getMovies } from '../servises/moviesApi';

export default class App extends Component {
  state = {
    isShown: false,
    movies: [],
    currentImage: null,
    page: 1,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const { isShown, page } = this.state;
    if ((isShown && prevState.isShown !== isShown) || page !== prevState.page) {
      this.fetchMovies();
    }
  }

  fetchMovies = () => {
    this.setState({ isLoading: true });
    getMovies(this.state.page)
      .then(({ data: { results } }) => {
        this.setState(prevState => ({
          movies: [...prevState.movies, ...moviesMapper(results)],
        }));
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: error.message });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  deleteMovie = movieId => {
    this.setState(prevState => ({
      movies: prevState.movies.filter(({ id }) => id !== movieId),
    }));
  };

  openModal = data => {
    this.setState({ currentImage: data });
  };

  closeModal = () => {
    this.setState({ currentImage: null });
  };

  showFilms = () => {
    this.setState(prevState => ({
      isShown: !prevState.isShown,
    }));
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { movies, currentImage, isShown, isLoading, error } = this.state;
    return (
      <>
        <Button
          text={isShown ? 'Hide movies' : 'Show movies'}
          clickHandler={this.showFilms}
        />
        {isShown && (
          <>
            <MoviesGallery
              movies={movies}
              deleteMovie={this.deleteMovie}
              openModal={this.openModal}
            />
            {!isLoading && !error && (
              <Button text="Load more" clickHandler={this.loadMore} />
            )}
          </>
        )}
        {isLoading && <Loader />}
        {error && <Notification text={error} />}
        {currentImage && (
          <Modal currentImage={currentImage} closeModal={this.closeModal} />
        )}
        <GlobalStyles />
      </>
    );
  }
}
