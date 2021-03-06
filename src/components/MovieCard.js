import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const MovieCard = (props) => {
  const { movie } = props;
  const {
    Poster, Title, Year, imdbID,
  } = movie;
  return (
    <div className="col-md-3 mb-5">
      <div className="card card-body bg-dark text-center h-100">
        <img className="w-100 mb-2" src={Poster} alt="Movie Cover" />
        <h5 className="text-light card-title">
          {Title}
          {' '}
          -
          {Year}
        </h5>
        <Link className="btn btn-primary" to={`/movie/${imdbID}`}>
          Movie Details
          <i className="fas fa-chevron-right" />
        </Link>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: propTypes.objectOf(propTypes.any).isRequired,
};

export default MovieCard;
