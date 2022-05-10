import React from 'react';

const Flight = ({ term, status, codeShare }) => (
  <tr className="table__item">
    <th className="table__item-info">{term}</th>
    <th className="table__item-info">local time</th>
    <th className="table__item-info">destination</th>
    <th className="table__item-info">{status}</th>
    <th className="table__item-info">airline</th>
    <th className="table__item-info">{codeShare}</th>
  </tr>
);

export default Flight;
