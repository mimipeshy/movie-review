import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductComponent from './containers/ProductComponent';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductListing />
      <ProductComponent />
      <ProductDetail />
    </div>
  );
}

export default App;
