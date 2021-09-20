import { createSlice } from '@reduxjs/toolkit';

export const user = createSlice({
  name: 'user',
  initialState: {
    current_user: null,
  },
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload.user;
    },
  },
});
