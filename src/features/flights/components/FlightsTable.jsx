import React from 'react';
import { Outlet } from 'react-router-dom';
import Info from './Info';

const FlightsTable = () => (
  <table className="flights__table table">
    <Info />
    <tbody className="table__list">
      <Outlet />
    </tbody>
  </table>
);

export default FlightsTable;
