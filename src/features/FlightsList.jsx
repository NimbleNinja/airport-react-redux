import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Flight from './Flight';
import NoFlights from './NoFlights';
import * as flightsSelectors from './flights.selectors';

const FlightsList = () => {
  const { search } = useLocation();
  const { listName } = useParams();

  const qs = require('qs');
  const filter = qs.parse(search).value;

  const currentSelector =
    listName === 'departures' ? flightsSelectors.departuresList : flightsSelectors.arrivalsList;
  const flights = useSelector(currentSelector);

  const filteredList = filter ? flights.filter(flight => flight.code.includes(filter)) : flights;

  return (
    <>
      {filteredList.length === 0 ? (
        <NoFlights />
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
