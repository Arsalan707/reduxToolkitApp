import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter', // by this name we identify counterSlice , this will be use in react code
  initialState: initialStateValue,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
