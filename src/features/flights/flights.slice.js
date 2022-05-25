/* eslint no-param-reassign: "error" */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// const url = 'https://api.iev.aero/api/flights/10-02-2020';
const url = 'https://6230a0d6f113bfceed572660.mockapi.io/todolist';

// export const fetchFlights = createAsyncThunk('flights/fetchFlights', async () => {
//  const response = await fetch(url);
//  return response.json();
// });

export const fetchDepartures = createAsyncThunk('flights/fetchDepartures', async () => {
  const response = await fetch(`${url}/departures`);
  return response.json();
});
export const fetchArrivals = createAsyncThunk('flights/fetchArrivals', async () => {
  const response = await fetch(`${url}/arrivals`);
  return response.json();
});

const initialState = {
  departures: [],
  arrivals: [],
};

const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDepartures.fulfilled, (state, action) => {
        state.departures = action.payload;
      })
      .addCase(fetchArrivals.fulfilled, (state, action) => {
        state.arrivals = action.payload;
      });
  },
});

export default flightsSlice.reducer;
