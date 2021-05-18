/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Moviecard from './MovieCard';

const MoviesContainer = (props) => {
  const { movies } = props;
  let content = '';

  content = movies.Response === 'True'
    ? movies.Search.map((movie, index) => (
      <Moviecard key={index} movie={movie} />
    ))
    : null;
  return (
    <div className="row">{content}</div>
  );
};

MoviesContainer.propTypes = {
  movies: propTypes.objectOf(propTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  loading: state.movies.loading,
});

export default connect(mapStateToProps)(MoviesContainer);
