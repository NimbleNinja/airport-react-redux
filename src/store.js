import { configureStore } from '@reduxjs/toolkit';
import flightsSlice from './features/flights.slice';

const store = configureStore({
  reducer: {
    flights: flightsSlice,
  },
});

export default store;
