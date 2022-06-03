import React from 'react';
import { Outlet } from 'react-router-dom';

const FlightsTable = () => (
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
    <tbody className="table__list">
      <Outlet />
    </tbody>
  </table>
);

export default FlightsTable;
