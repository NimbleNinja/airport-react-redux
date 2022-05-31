import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchFlights } from '../gateway';

const qs = require('qs');

const Dates = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();

  const { value } = qs.parse(search.replace('?', ''));

  const [day, setDay] = useState('');

  const today = moment();
  const yesterday = moment().subtract(1, 'd');
  const nextday = moment().add(1, 'd');

  const navigate = useNavigate();

  const inputDateHandler = inpDate => {
    const formatedDate = inpDate.format('DD-MM-YYYY');
    setDay(formatedDate);
    const params = qs.stringify({ date: formatedDate, value });
    navigate(`/departures?${params}`);
    dispatch(fetchFlights(formatedDate));
  };

  const classes = date =>
    `dates__day ${day === date.format('DD-MM-YYYY') ? 'dates__day_active' : ''}`;

  return (
    <div className="flights__dates dates">
      <input
        className="dates__choise"
        type="date"
        onInput={e => inputDateHandler(moment(e.target.value))}
      />

      <div onClick={() => inputDateHandler(yesterday)} className={classes(yesterday)}>
        <span className="dates__day-number">{yesterday.format('DD/MM')}</span>
        <p>YESTERDAY</p>
      </div>
      <div onClick={() => inputDateHandler(today)} className={classes(today)}>
        <span className="dates__day-number">{today.format('DD/MM')}</span>
        <p>TODAY</p>
      </div>
      <div onClick={() => inputDateHandler(nextday)} className={classes(nextday)}>
        <span className="dates__day-number">{nextday.format('DD/MM')}</span>
        <p>NEXTDAY</p>
      </div>
    </div>
  );
};

export default Dates;
