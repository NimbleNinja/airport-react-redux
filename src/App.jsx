import React from 'react';

const App = () => (
  <div className="page">
    <h1 className="page__title">Search flight</h1>
    <div className="page__search search">
      <input placeholder="Airline, destination or flight #" className="search__input" type="text" />
      <button className="search__btn">search</button>
    </div>
    <div className="page__flights flights">
      <div className="flights__tabs">
        <button className="flights__tab">departures</button>
        <button className="flights__tab flights__tab_active">arrivals</button>
      </div>
      <ul className="flights__info info">
        <li className="info__status">Terminal</li>
        <li className="info__time">Local time</li>
        <li className="info__destination">Destination</li>
        <li className="info__status">Status</li>
        <li className="info__airline">Airline</li>
        <li className="info__flight">Flight</li>
      </ul>
      <ul className="flights__list">
        <li className="flights__list-item">
          <ul className="flight">
            <li className="flight__status">terminal</li>
            <li className="flight__time">local time</li>
            <li className="flight__destination">destination</li>
            <li className="flight__status">status</li>
            <li className="flight__airline">airline</li>
            <li className="flight__flight">flight</li>
          </ul>
        </li>
        <li className="flights__list-item">
          <ul className="flight">
            <li className="flight__status">terminal</li>
            <li className="flight__time">local time</li>
            <li className="flight__destination">destination</li>
            <li className="flight__status">status</li>
            <li className="flight__airline">airline</li>
            <li className="flight__flight">flight</li>
          </ul>
        </li>
        <li className="flights__list-item">
          <ul className="flight">
            <li className="flight__status">terminal</li>
            <li className="flight__time">local time</li>
            <li className="flight__destination">destination</li>
            <li className="flight__status">status</li>
            <li className="flight__airline">airline</li>
            <li className="flight__flight">flight</li>
          </ul>
        </li>
        <li className="flights__list-item">
          <ul className="flight">
            <li className="flight__status">terminal</li>
            <li className="flight__time">local time</li>
            <li className="flight__destination">destination</li>
            <li className="flight__status">status</li>
            <li className="flight__airline">airline</li>
            <li className="flight__flight">flight</li>
          </ul>
        </li>
        <li className="flights__list-item">
          <ul className="flight">
            <li className="flight__status">terminal</li>
            <li className="flight__time">local time</li>
            <li className="flight__destination">destination</li>
            <li className="flight__status">status</li>
            <li className="flight__airline">airline</li>
            <li className="flight__flight">flight</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
);

export default App;
