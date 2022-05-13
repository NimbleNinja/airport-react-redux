import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Flights from './features/flights/components/Flights';
import Search from './features/search/Search';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="page">
        <h1 className="page__title">Search flight</h1>
        <Search />
        <Flights />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
