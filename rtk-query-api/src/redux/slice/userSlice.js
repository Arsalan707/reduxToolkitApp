import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk('fatchUser', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    dataa: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dataa = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      console.log('ERROR', action.payload);
      state.isError = true;
    });
  },
});

export default userSlice.reducer;
