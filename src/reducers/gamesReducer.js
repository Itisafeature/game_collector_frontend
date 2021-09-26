import { createSlice } from '@reduxjs/toolkit';
import { fetchGames } from '../actions/gameActions';

export const game = createSlice({
  name: 'game',
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: {
    [fetchGames.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchGames.fulfilled]: (state, action) => {
      state.data = action.payload.data;
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
