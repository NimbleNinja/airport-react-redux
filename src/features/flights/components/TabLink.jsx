import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { fetchArrivals, fetchDepartures } from '../flights.slice';

const TabLink = ({ tabName }) => {
  const { search } = useLocation();
  const params = search || '';

  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(fetchArrivals());
    dispatch(fetchDepartures());
  };

  return (
    <NavLink
      onClick={clickHandler}
      className={({ isActive }) => (isActive ? `tabs__link tabs__link_active` : 'tabs__link')}
      to={`/${tabName}${params}`}
    >
      {tabName}
    </NavLink>
  );
};
export default TabLink;
