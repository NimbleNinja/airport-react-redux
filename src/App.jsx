import React from 'react';
import Flights from './features/flights/Flights';
import Search from './features/search/Search';

const App = () => (
  <div className="page">
    <h1 className="page__title">Search flight</h1>
    <Search />
    <Flights />
  </div>
);

export default App;
