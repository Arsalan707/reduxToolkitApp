import { configureStore } from '@reduxjs/toolkit';
import usERReducer from './slice/userSlice'; // we use and name their usERReducer  (we export it default )

export const store = configureStore({
  reducer: {
    user: usERReducer, // thier user is name of slice which we initialize
  },
});
