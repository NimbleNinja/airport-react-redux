import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './flights.scss';
import { useDispatch } from 'react-redux';
import DepartureFlightsList from './DepartureFlightsList';
import ArrivalFlightsList from './ArrivalFlightsList';
import FlightsTable from './FlightsTable';
import { fetchFlights } from './flights.slice';
import NoFlights from './NoFlights';
import TabLink from './TabLink';

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
          {/* <Route index element={<NoFlights />} /> */}
          <Route path="departures" element={<DepartureFlightsList />} />
          <Route path="arrivals" element={<ArrivalFlightsList />} />
        </Route>
      </Routes>
    </main>
  );
};
export default Flights;
