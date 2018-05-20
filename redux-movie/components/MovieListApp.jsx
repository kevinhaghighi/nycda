// components/CounterApp.jsx
import { connect } from 'react-redux';
import { loadMovies } from '../actions';
import MovieList from './MovieList';

const mapStateToProps = (state, ownProps) => {
  // ...
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // ...
};

const MovieListApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

export default MovieListApp;