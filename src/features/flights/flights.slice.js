/* eslint no-param-reassign: "error" */
import { createSlice } from '@reduxjs/toolkit';
import { fetchFlights } from './flights.gateway';

const initialState = {
  departures: [],
  arrivals: [],
};

const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchFlights.fulfilled, (state, action) => {
      const { arrival, departure } = action.payload.body;
      state.arrivals = arrival;
      state.departures = departure;
    });
  },
});

export const { setInputDate } = flightsSlice.actions;
export default flightsSlice.reducer;
