import React from 'react';

const Flight = ({ terminal, code, time, destination, status, airlineName, logo }) => (
  <tr className="table__item">
    <th className="table__item-info">{terminal}</th>
    <th className="table__item-info">{time}</th>
    <th className="table__item-info">{destination}</th>
    <th className="table__item-info">{status}</th>
    <th className="table__item-info">
      <img
        style={{ width: '40px', height: '40px' }}
        src={`https://api.iev.aero/${logo}`}
        alt="logo"
      />
      {airlineName}
    </th>
    <th className="table__item-info">{code}</th>
  </tr>
);

export default Flight;
