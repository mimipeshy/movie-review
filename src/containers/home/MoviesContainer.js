/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Moviecard from '../../components/MovieCard';

const MoviesContainer = (props) => {
  const { movies } = props;
  const { Response, Search } = movies;
  let content = '';

  content = Response === 'True'
    ? Search.map((movie, index) => (
      <Moviecard key={index} movie={movie} />
    ))
    : null;
  return (
    <div className="row">
      {content}
    </div>
  );
};

MoviesContainer.propTypes = {
  movies: propTypes.oneOfType([
    propTypes.array,
    propTypes.object,
  ]).isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  loading: state.movies.loading,
});

export default connect(mapStateToProps)(MoviesContainer);
