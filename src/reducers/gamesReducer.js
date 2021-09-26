import { createSlice } from '@reduxjs/toolkit';
import { fetchGames } from '../actions/gameActions';

export const game = createSlice({
  name: 'game',
  initialState: {
    games: [],
  },
  reducers: {},
  extraReducers: {
    [fetchGames.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchGames.fulfilled]: (state, action) => {
      state.currentUser = action.payload.data;
      state.loading = false;
      state.error = false;
      state.errMsg = '';
    },
    [fetchGames.rejected]: (state, action) => {
      state.error = true;
      state.loading = false;
      state.errorMsg = action.payload;
    },
  },
});

// export const { remove } = user.actions;
export default game.reducer;
