import { createSlice } from '@reduxjs/toolkit';
import { loginUser, signupUser, logoutUser } from '../actions/userActions';

const INITIAL_STATE = {
  currentUser: {
    data: null,
    games: {
      ownedGames: [],
      wantedGames: [],
    },
  },
  loading: false,
  error: false,
  errorMsg: '',
};

export const user = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    removeUser: state => {
      state = INITIAL_STATE;
    },
  },
  extraReducers: {
    [signupUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signupUser.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: false,
        errorMsg: '',
        currentUser: { ...state.currentUser, data: action.payload.data },
      };
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
      return {
        loading: false,
        error: false,
        errorMsg: '',
        currentUser: {
          data: action.payload.data,
          games: {
            ownedGames: action.payload.games.ownedGames,
            wantedGames: action.payload.games.wantedGames,
          },
        },
      };
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
      return INITIAL_STATE;
    },
    [logoutUser.rejected]: (state, action) => {
      state.error = true;
      state.loading = false;
      state.errorMsg = 'Unsuccessful logout. Please try again.';
    },
  },
});

export const { removeUser } = user.actions;
export default user.reducer;
