import React from 'react';
import { useSelector } from 'react-redux';
import * as flightsSelectors from './flights.selectors';
import FlightsList from './FlightsList';

const ArrivalFlightsList = () => {
  const arrivalList = useSelector(flightsSelectors.arrivalFlightsSelector);
  return <FlightsList text="hello" flights={arrivalList} />;
};

export default ArrivalFlightsList;
