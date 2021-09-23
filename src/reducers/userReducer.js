import { createSlice } from '@reduxjs/toolkit';
import { loginUser, signupUser } from '../actions/userActions';

export const user = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    errorMsg: '',
  },
  reducers: {},
  extraReducers: {
    [signupUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signupUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload.data;
      state.loading = false;
      state.error = false;
      state.errMsg = '';
    },
    [signupUser.rejected]: (state, action) => {
      state.error = true;
      state.loading = false;
      state.errorMsg = action.payload;
    },
    [loginUser.pending]: (state, action) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload.data;
      state.loading = false;
      state.error = false;
      state.errMsg = '';
    },
    [loginUser.rejected]: (state, action) => {
      state.error = true;
      state.loading = false;
      state.errorMsg = 'Invalid Username/Password.';
    },
  },
});

export default user.reducer;
