import React from 'react';
import formatData from '../../../tools/dateTools';

const Flight = ({ terminal, code, time, destination, status, airlineName, logoSrc }) => (
  <tr className="table__row">
    <th className="table__row-item-terminal">
      <span className={`table__item-terminal table__item-terminal_${terminal.toLowerCase()}`}>
        {terminal}
      </span>
    </th>
    <th className="table__item">{formatData(time)}</th>
    <th className="table__item">{destination}</th>
    <th className="table__item">{status}</th>
    <th className="table__row-item-airline">
      <img className="table__item-logo" src={logoSrc} alt="logo" />
      <span>{airlineName}</span>
    </th>
    <th className="table__item">{code}</th>
  </tr>
);

export default Flight;
