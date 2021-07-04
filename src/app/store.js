import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import myCounterReducer from '../features/my-counter/MyCounterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    myCounter: myCounterReducer,
  },
});
