import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, connect } from 'react-redux';

// import propTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { setProducts, changeFilter } from '../actions/productsActions';

const productFilter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = (filter) => {
    changeFilter(filter);
  };

  const fetchCategory = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products/categories');
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <Container>
      <Row>
        <label htmlFor="options">
          Filter Price by:
          <select name="filter" id="filter" onChange={handleFilterChange}>
            <option value="men&apos;s clothes">men&apos;s clothing</option>
            <option value="lowest"> women&apos;s clothing</option>
            <option value="highest"> jewelery</option>
          </select>
        </label>
      </Row>
    </Container>
  );
};
// productFilter.propTypes = {
//   changeFilter: PropTypes.func.isRequired,
// };
const mapStateToProps = (state) => ({
  // books: state.books,
  filter: state.filter,
});
const mapDispatch = {
  changeFilter,
};
export default connect(mapStateToProps, mapDispatch)(productFilter);
