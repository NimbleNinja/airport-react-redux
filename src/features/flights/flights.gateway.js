import { createAsyncThunk } from '@reduxjs/toolkit';

export const url = 'https://api.iev.aero/api/flights';

export const fetchFlights = createAsyncThunk('flights/fetchFlights', async date => {
  const response = await fetch(`${url}/${date}`);
  return response.json();
});
