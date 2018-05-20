// actions/index.js
// Namespace actions
export const LOAD_REQUEST = 'movieList/LOAD_REQUEST';
export const LOAD_SUCCESS = 'movieList/LOAD_SUCCESS';
export const LOAD_FAILURE = 'movieList/LOAD_FAILURE';

import fetch from 'isomorphic-fetch';

// action creators go here

export const loadMovies = (searchParam, dispatch) => {
	// fetch happens inside load request action creator!

	// indicate we are loading movies now
	dispatch(requestMovies());

	fetch(`SOME_API_URL`)
  .then((response) => response.json())
  .then((responseJson) => {
    // "we successfully got back a response" scenario
    // requirement: generate a view with the movie results upon successfully getting a response
    // --> do things here that will eventually update the view

    // dispatch EMITS AN ACTION
    // (an action <--> view only)
    // --> dispatch change the view to the success view

    dispatch(someActionCreator(responseJson))
  })
  // ...what about failure?...
};

export const requestMovies = () => {
	// create action for requesting movies
	// ...
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