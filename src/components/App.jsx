import { Component } from 'react';
import { GlobalStyles } from 'utils/GlobalStyle';
import movies from '../data/movies.json';
import { moviesMapper } from '../utils/mapper';
import { MoviesGallery } from './MoviesGallery/MoviesGallery';
import Modal from './Modal/Modal'

export default class App extends Component {
  state = {
    movies: moviesMapper(movies),
    currentImage: null
  };

  componentDidMount() {
    const savesMovies = localStorage.getItem('movies')
    if (savesMovies) {
      this.setState({movies: JSON.parse(savesMovies)})
    }
  }

  componentDidUpdate(_, prevState) {
    const { movies } = this.state;
    if (prevState.movies !== movies) {
      localStorage.setItem('movies', JSON.stringify(movies))
    }
  }


  deleteMovie = (movieId) => {
    this.setState((prevState) => ({
      movies: prevState.movies.filter(({id}) => id !== movieId)
    }))
  }

  openModal = (data) => {
    this.setState({currentImage: data})
  }

  closeModal = () => {
    this.setState({currentImage: null})
  }

  render() {
    const {movies, currentImage} = this.state
    return (
      <>
        <MoviesGallery movies={movies} deleteMovie={this.deleteMovie} openModal={this.openModal} />
        {currentImage && <Modal currentImage={currentImage} closeModal={this.closeModal} />}
        <GlobalStyles />
      </>
    );
  }
}
