import axios from 'axios';
import {
  SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING,
} from './types';

import { APIKey } from '../APIKey';

export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  });
};

export const fetchMovies = (text) => (dispatch) => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then((response) => dispatch({
      type: FETCH_MOVIES,
      payload: response.data,
    }))
    .catch((err) => (err));
};

export const fetchMovie = (id) => (dispatch) => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then((response) => dispatch({
      type: FETCH_MOVIE,
      payload: response.data,
    }))
    .catch((err) => (err));
};

export const setLoading = () => ({
  type: LOADING,
});
