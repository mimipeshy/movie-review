import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Searchform from './SearchForm';
import Moviescontainer from './MoviesContainer';
import Spinner from '../../components/layout/Spinner';

const Landing = (props) => {
  const { loading } = props;
  return (
    <div className="container">
      <Searchform />
      {loading ? <Spinner /> : <Moviescontainer />}
    </div>
  );
};

Landing.propTypes = {
  loading: propTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
});

export default connect(mapStateToProps)(Landing);
