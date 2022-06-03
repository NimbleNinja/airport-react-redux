import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Flight from './Flight';
import * as flightsSelectors from '../flights.selectors';
import { fetchFlights } from '../flights.gateway';

const qs = require('qs');

const FlightsList = () => {
  const { search } = useLocation();
  const { listName } = useParams();

  const { date, value } = qs.parse(search.replace('?', ''));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFlights(date || moment().format('DD-MM-YYYY')));
  }, [listName]);

  const currentSelector =
    listName === 'departures' ? flightsSelectors.departuresList : flightsSelectors.arrivalsList;
  const flights = useSelector(currentSelector);

  const filteredList = value ? flights.filter(flight => flight.code.includes(value)) : flights;

  return (
    <>
      {filteredList.length === 0 ? (
        <tr className="table__item">
          <td className="table__item-info" colSpan={6}>
            No flights...
          </td>
        </tr>
      ) : (
        filteredList.map(flight => {
          const key = Math.round(Math.random() * 100000);
          return <Flight key={key} {...flight} />;
        })
      )}
    </>
  );
};

export default FlightsList;
