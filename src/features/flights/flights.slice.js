/* eslint no-param-reassign: "error" */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.iev.aero/api/flights/10-02-2020';

export const fetchFlights = createAsyncThunk('flights/fetchFlights', async () => {
  const response = await fetch(url);
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
    builder.addCase(fetchFlights.fulfilled, (state, action) => {
      const { arrival, departure } = action.payload.body;
      state.arrivals = arrival;
      state.departures = departure;
    });
  },
});

export default flightsSlice.reducer;
