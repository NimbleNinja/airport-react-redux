import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './flights.scss';
import FlightsTable from './FlightsTable';
import TabLink from './TabLink';
import FlightsList from './FlightsList';
import Dates from './Dates';

const Flights = () => (
  <div className="page__flights flights">
    <div className="flights__tabs tabs">
      <TabLink tabName="departures" />
      <TabLink tabName="arrivals" />
    </div>
    <Dates />
    <Routes>
      <Route path="/" element={<FlightsTable />}>
        <Route path=":listName" element={<FlightsList />} />
      </Route>
    </Routes>
  </div>
);
export default Flights;
