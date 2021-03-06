import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './containers/home/Landing';
import Movie from './containers/home/Movie';
import store from './store/store';

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/movie/:id" component={Movie} />
        <Footer />
      </div>
    </Router>
  </Provider>
);

export default App;
