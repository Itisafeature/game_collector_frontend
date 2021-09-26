import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGames = createAsyncThunk(
  '/games/fetch',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.get('/games');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.errMsg);
    }
  }
);
