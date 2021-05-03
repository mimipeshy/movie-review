import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../actions/ProductActions';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log('Err', err);
      });
    dispatch(setProducts);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log('products', products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};
export default ProductListing;
