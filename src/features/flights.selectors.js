import { createSelector } from '@reduxjs/toolkit';

export const departureFlightsSelector = state => state.flights.departures;
export const arrivalFlightsSelector = state => state.flights.arrivals;

export const departureList = createSelector(departureFlightsSelector, items =>
  items.map(item => ({
    id: item.ID,
    terminal: item.term,
    time: item.actual,
    destination: item['airportToID.name_en'],
    status: item.status,
    airlineName: item.airline?.en.name,
    logoSrc: item.logo,
    code: item.codeShareData[0].codeShare,
  })),
);

export const arrivalList = createSelector(arrivalFlightsSelector, items =>
  items.map(item => ({
    id: item.ID,
    terminal: item.term,
    time: item.actual,
    destination: item['airportFromID.name_en'],
    status: item.status,
    airlineName: item.airline?.en.name,
    logoSrc: item.logo,
    code: item.codeShareData[0].codeShare,
  })),
);
