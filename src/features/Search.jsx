import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './search.scss';

const Search = () => {
  const qs = require('qs');
  const { search } = useLocation();
  const initValue = qs.parse(search).value;

  const [value, setValue] = useState(initValue || '');

  const params = qs.stringify({ date: '12-05-2022', value });
  const ulr = `/departures?${params}`;
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
