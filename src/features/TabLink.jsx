import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const TabLink = ({ tabName }) => {
  const { search } = useLocation();
  const params = search || '';

  return (
    <NavLink
      className={({ isActive }) => (isActive ? `tabs__link tabs__link_active` : 'tabs__link')}
      to={`/${tabName}${params}`}
    >
      {tabName}
    </NavLink>
  );
};
export default TabLink;
