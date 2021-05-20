/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { fetchMovie, setLoading } from '../../actions/searchActions';
import Spinner from '../../containers/layout/Spinner';

class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }

  render() {
    const { loading, movie } = this.props;
    const {
      Poster, Title, Genre, Released, Rated, imdbRating, Director, Writer, Actors, Plot, imdbID,
    } = movie;

    const movieInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={Poster} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{Title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong>
                {' '}
                {Genre}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong>
                {' '}
                {Released}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong>
                {' '}
                {Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong>
                {' '}
                {imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong>
                {' '}
                {Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong>
                {' '}
                {Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong>
                {' '}
                {Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>About </h3>
              {Plot}
              <hr />
              <a
                href={`https://www.imdb.com/title/${imdbID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View on IMDB
              </a>
              <Link to="/" className="btn btn-default text-light">
                Go Back To Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

    const content = loading ? <Spinner /> : movieInfo;
    return <div>{content}</div>;
  }
}

Movie.propTypes = {
  movie: propTypes.oneOf([propTypes.object, propTypes.array]).isRequired,
  fetchMovie: propTypes.func.isRequired,
  setLoading: propTypes.func.isRequired,
  match: propTypes.objectOf(propTypes.any).isRequired,
  loading: propTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  movie: state.movies.movie,
});

export default connect(
  mapStateToProps,
  { fetchMovie, setLoading },
)(Movie);
