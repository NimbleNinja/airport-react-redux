import React from 'react';

const Day = ({ selectedDay, dayHandler, day }) => {
  const classList = `dates__day ${
    selectedDay === day.format('DD-MM-YYYY') ? 'dates__day_active' : ''
  }`;

  return (
    <div onClick={() => dayHandler(day)} className={classList}>
      <span className="dates__day-number">{day.format('DD/MM')}</span>
      <p>{day.format('dddd').toUpperCase()}</p>
    </div>
  );
};

export default Day;
