import React from 'react';
import FlightsList from './FlightsList';
import './flights.scss';

const Flights = () => (
  <main className="page__flights flights">
    <div className="flights__tabs tabs">
      <button className="tabs__item">departures</button>
      <button className="tabs__item tabs__item_active">arrivals</button>
    </div>
    <table className="flights__table table">
      <thead>
        <tr className="table__info info">
          <th className="info__item">Terminal</th>
          <th className="info__item">Local time</th>
          <th className="info__item">Destination</th>
          <th className="info__item">Status</th>
          <th className="info__item">Airline</th>
          <th className="info__item">Flight</th>
        </tr>
      </thead>
      <FlightsList />
    </table>
  </main>
);

export default Flights;
