import React from 'react';
import { Outlet } from 'react-router-dom';
import Info from './Info';

const FlightsTable = () => (
  <table className="flights__table table">
    <Info />
    <Outlet />
  </table>
);

export default FlightsTable;
