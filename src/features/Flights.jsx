import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './flights.scss';
import { useDispatch } from 'react-redux';
import FlightsTable from './FlightsTable';
import { fetchFlights } from './flights.slice';
import TabLink from './TabLink';
import FlightsList from './FlightsList';

const Flights = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlights());
  }, []);

  return (
    <main className="page__flights flights">
      <div className="flights__tabs tabs">
        <TabLink tabName="departures" />
        <TabLink tabName="arrivals" />
      </div>
      <Routes>
        <Route path="/" element={<FlightsTable />}>
          <Route path=":listName" element={<FlightsList />} />
        </Route>
      </Routes>
    </main>
  );
};
export default Flights;
