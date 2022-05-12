import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import * as flightsSelectors from './flights.selectors';
import FlightsList from './FlightsList';

const DepartureFlightsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('value');

  const departureList = useSelector(flightsSelectors.departureList);

  const filteredList = filter
    ? departureList.filter(flight => flight.destination.startsWiht(filter))
    : departureList;

  return <FlightsList flights={filteredList} />;
};

export default DepartureFlightsList;
