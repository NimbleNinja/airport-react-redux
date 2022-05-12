import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as flightsSelectors from './flights.selectors';
import FlightsList from './FlightsList';

const ArrivalFlightsList = () => {
  const { search } = useLocation();

  const qs = require('qs');
  const filter = qs.parse(search).value;

  const arrivalList = useSelector(flightsSelectors.arrivalsList);

  const filteredList = filter
    ? arrivalList.filter(flight => flight.code.includes(filter))
    : arrivalList;

  return <FlightsList text="hello" flights={filteredList} />;
};

export default ArrivalFlightsList;
