import { createSlice } from '@reduxjs/toolkit';
import { signupUser } from '../actions/userActions';

export const user = createSlice({
  name: 'user',
  initialState: {
    current_user: null,
    loading: false,
    error: false,
    errorMsg: '',
  },
  reducers: {},
  extraReducers: {
    [signupUser.pending]: (state, action) => {
      state.current_user = action.payload.data;
    },
    [signupUser.fulfilled]: (state, action) => {
      state.current_user = action.payload.data;
      state.loading = false;
    },
    [signupUser.rejected]: (state, action) => {
      state.error = true;
      state.errorMsg = '';
    },
  },
});

export default user.reducer;
