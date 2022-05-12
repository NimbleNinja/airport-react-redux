import React from 'react';
import Flight from './Flight';
import NoFlights from './NoFlights';

const FlightsList = ({ flights }) => (
  <>
    {flights.length === 0 ? (
      <NoFlights />
    ) : (
      flights.map(flight => {
        const key = Math.round(Math.random() * 100000);

        return <Flight key={key} {...flight} />;
      })
    )}
  </>
);

export default FlightsList;
