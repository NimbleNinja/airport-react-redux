import React from 'react';
import './search.scss';

const Search = () => (
  <div className="page__search search">
    <input placeholder="Airline, destination or flight #" className="search__input" type="text" />
    <button className="search__btn">search</button>
  </div>
);

export default Search;
