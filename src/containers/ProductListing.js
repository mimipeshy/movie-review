import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProducts } from '../actions/productsActions';
import ProductComponent from './ProductComponent';
import Filter from './ProductFilter';

const ProductPage = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products');
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container">
      <div className="ui row container">
        <Filter />
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductPage;
