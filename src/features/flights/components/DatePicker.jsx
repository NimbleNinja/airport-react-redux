import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchFlights } from '../flights.gateway';
import DayToChoose from './DayToChoose';

const qs = require('qs');

const DatePicker = () => {
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

  return (
    <div className="flights__dates dates">
      <input
        className="dates__choise"
        type="date"
        onInput={e => inputDateHandler(moment(e.target.value))}
      />
      {[yesterday, today, nextday].map(dayToChoose => (
        <DayToChoose
          key={dayToChoose.format('dddd')}
          dayHandler={inputDateHandler}
          selectedDay={day}
          day={dayToChoose}
        />
      ))}
    </div>
  );
};

export default DatePicker;
