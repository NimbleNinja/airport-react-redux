import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './search.scss';

const Search = () => {
  const [value, setValue] = useState('');

  const qs = require('qs');
  const ulr = `/departures?${qs.stringify({ value })}`;

  const navigate = useNavigate();

  const searchHandler = () => {
    navigate(ulr);
  };

  return (
    <div className="page__search search">
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Airline, destination or flight #"
        className="search__input"
        type="text"
      />
      <button onClick={searchHandler} className="search__btn">
        search
      </button>
    </div>
  );
};

export default Search;
