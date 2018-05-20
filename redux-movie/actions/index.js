// actions/index.js
// Namespace actions
export const LOAD_REQUEST = 'movieList/LOAD_REQUEST';
export const LOAD_SUCCESS = 'movieList/LOAD_SUCCESS';
export const LOAD_FAILURE = 'movieList/LOAD_FAILURE';

import fetch from 'isomorphic-fetch';

// action creators go here

export const loadMovies = (searchParam, dispatch) => {
	// fetch happens inside load request action4
	// indicate we are loading movies now
	return dispatch => {
    fetch(`https://omdbapi.com/?apiKey=58381d17=${searchParam}`)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(someActionCreator(responseJson))
      })
      .catch((err) => { 
          dispatch({type: LOAD_FAILURE})
      })
  }

}


export const requestMovies = () => {
  return {
    type: LOAD_REQUEST,
    payload: movies
  }
};

export const someActionCreator = (jsonData) => {
  return {
    type: LOAD_SUCCESS,
    // anything else you want!!
    // include movies coming from the data
    data: jsonData.Search
    // TODO: handle edge cases: null response, no search results
  }
};