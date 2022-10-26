import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './DataSlice';

export const store = configureStore({
  reducer: {
    dataReducer,
  },
});
