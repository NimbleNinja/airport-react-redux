// import { createSelector } from '@reduxjs/toolkit';

export const departuresSelector = store => store.flights.departures;
export const arrivalSelector = store => store.flights.arrivals;

// export const departuresList = createSelector(departuresSelector, items =>
//  items.map(item => ({
//    id: item.ID,
//    terminal: item.term,
//    time: item.actual,
//    destination: item['airportToID.name_en'],
//    status: item.status,
//    airlineName: item.airline?.en.name,
//    logoSrc: item.airline.en.logoName,
//    code: item.codeShareData[0].codeShare,
//  })),
// );

// export const arrivalsList = createSelector(arrivalSelector, items =>
//  items.map(item => ({
//    id: item.ID,
//    terminal: item.term,
//    time: item.actual,
//    destination: item['airportFromID.name_en'],
//    status: item.status,
//    airlineName: item.airline?.en.name,
//    logoSrc: item.airline.en.logoName,
//    code: item.codeShareData[0].codeShare,
//  })),
// );
