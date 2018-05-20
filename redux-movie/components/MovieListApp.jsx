// components/CounterApp.jsx
import { connect } from 'react-redux';
import { loadMovies } from '../actions';
import MovieList from './MovieList';

const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.movies,
    isLoading: state.isLoading,
    isError: state.isError,
    isSuccess: state.isSuccess
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMovie: movies => dispatch(fetchMovie(movies, dispatch))
  }
};

const MovieListApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

export default MovieListApp;