import { configureStore } from '@reduxjs/toolkit';
import { greetingSlice } from './greeting_slice';

export const store = configureStore({
  reducer: {
    greeting: greetingSlice.reducer,
  },
});