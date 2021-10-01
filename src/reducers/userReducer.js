import { createSlice } from '@reduxjs/toolkit';
import { loginUser, signupUser, logoutUser } from '../actions/userActions';

export const user = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    errorMsg: '',
  },
  reducers: {
    remove: state => {
      state.currentUser = null;
    },
  },
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
    [loginUser.pending]: (state, action) => {
      state.loading = true;
    },
    [logoutUser.fulfilled]: (state, action) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
      state.errMsg = '';
    },
    [logoutUser.rejected]: (state, action) => {
      state.error = true;
      state.loading = false;
      state.errorMsg = 'Unsuccessful logout. Please try again.';
    },
  },
});

export const { remove } = user.actions;
export default user.reducer;
