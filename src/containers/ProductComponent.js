import React from 'react';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const { title } = products;
  return (
    <div className="four comumn wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            Image
          </div>
          <div className="content">
            content
          </div>
          <div className="header">
            {title}
          </div>
        </div>
      </div>
      <h4>Product Component</h4>
    </div>
  );
};
export default ProductComponent;
