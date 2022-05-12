import React from 'react';
import Flight from './Flight';
import NoFlights from './NoFlights';

const FlightsList = ({ flights }) => (
  <tbody className="table__list">
    {flights.length === 0 ? (
      <NoFlights />
    ) : (
      flights.map(flight => {
        const key = Math.round(Math.random() * 100000);

        return <Flight key={key} {...flight} />;
      })
    )}
  </tbody>
);

export default FlightsList;
