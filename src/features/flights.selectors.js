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
    logo: item.logo,
    code: item['planeTypeID.code'],
  })),
);
