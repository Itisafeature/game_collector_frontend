import { createSlice } from '@reduxjs/toolkit';
import { fetchGames } from '../actions/gameActions';

export const game = createSlice({
  name: 'game',
  initialState: {
    allGames: [],
    shownGames: [],
    totalCount: 0,
  },
  reducers: {
    showMoreGames: state => {
      state.shownGames = [
        ...state.shownGames,
        ...state.allGames.slice(
          state.shownGames.length,
          state.shownGames.length + 8
        ),
      ];
    },
  },
  extraReducers: {
    [fetchGames.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchGames.fulfilled]: (state, action) => {
      state.allGames = action.payload.data;
      state.shownGames = action.payload.data.slice(0, 8);
      state.totalCount = action.payload.data.length;
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

export const { showMoreGames } = game.actions;
export default game.reducer;
