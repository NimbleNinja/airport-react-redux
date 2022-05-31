import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './search.scss';

const qs = require('qs');

const Search = () => {
  const { search } = useLocation();

  const { value, date } = qs.parse(search.replace('?', ''));

  const [searchValue, setValue] = useState(value || '');

  const params = qs.stringify(searchValue ? { date, value: searchValue } : { date });
  const ulr = `/departures?${params}`;
  const navigate = useNavigate();

  return (
    <div className="page__search search">
      <span className="search__loop"></span>
      <input
        value={searchValue}
        onChange={e => setValue(e.target.value)}
        placeholder="Airline, destination or flight #"
        className="search__input"
        type="text"
      />
      <button onClick={() => navigate(ulr)} className="search__btn">
        search
      </button>
    </div>
  );
};

export default Search;
