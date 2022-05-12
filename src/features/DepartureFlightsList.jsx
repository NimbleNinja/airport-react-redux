import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as flightsSelectors from './flights.selectors';
import FlightsList from './FlightsList';

const DepartureFlightsList = () => {
  const { search } = useLocation();

  const qs = require('qs');
  const filter = qs.parse(search).value;

  const departureList = useSelector(flightsSelectors.departureList);

  const filteredList = filter
    ? departureList.filter(flight => flight.code.includes(filter))
    : departureList;

  return <FlightsList flights={filteredList} />;
};

export default DepartureFlightsList;
