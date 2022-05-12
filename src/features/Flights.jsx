import React, { useEffect } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './flights.scss';
import { useDispatch } from 'react-redux';
import DepartureFlightsList from './DepartureFlightsList';
import ArrivalFlightsList from './ArrivalFlightsList';
import FlightsTable from './FlightsTable';
import { fetchFlights } from './flights.slice';

const Flights = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlights());
  }, []);

  return (
    <main className="page__flights flights">
      <div className="flights__tabs tabs">
        <button className="tabs__item">
          <NavLink className="tabs__link" to="/departures">
            departures
          </NavLink>
        </button>
        <button className="tabs__item">
          <NavLink className="tabs__link" to="/arrivals">
            arrivals
          </NavLink>
        </button>
      </div>
      <Routes>
        <Route path="/" element={<FlightsTable />}>
          <Route path="departures" element={<DepartureFlightsList />} />
          <Route path="arrivals" element={<ArrivalFlightsList />} />
        </Route>
      </Routes>
    </main>
  );
};
export default Flights;

// tabs__item_active
