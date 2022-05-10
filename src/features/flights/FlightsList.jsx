import React from 'react';
import Flight from './Flight';

const flightsList = [
  {
    id: 2000030775736,
    term: 'A',
    actual: '2020-02-09T00:35:00Z',
    status: 'LN',
    logo: '/media/airline/files/5ab0f23020f9e949838987.png',
    codeShare: 'W66192',
    name: 'Wizz Air',
  },
  {
    id: 2000030175736,
    term: 'A',
    actual: '2020-02-09T00:35:00Z',
    status: 'LN',
    logo: '/media/airline/files/5ab0f23020f9e949838987.png',
    codeShare: 'W66192',
    name: 'Wizz Air',
  },
  {
    id: 2000030775732,
    term: 'A',
    actual: '2020-02-09T00:35:00Z',
    status: 'LN',
    logo: '/media/airline/files/5ab0f23020f9e949838987.png',
    codeShare: 'W66192',
    name: 'Wizz Air',
  },
];

const FlightsList = () => (
  <tbody className="table__list">
    {flightsList.map(flight => (
      <Flight key={flight.id} {...flight} />
    ))}
  </tbody>
);

export default FlightsList;
