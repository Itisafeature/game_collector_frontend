import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signupUser = createAsyncThunk(
  '/users/signup',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/signup', formData);
      return { data: response.user.data, games: response.data.games };
    } catch (err) {
      return rejectWithValue(err.response.data.errMsg);
    }
  }
);

export const loginUser = createAsyncThunk(
  '/users/login',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/login', formData);
      return { data: response.data.data.user, games: response.data.data.games };
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.errMsg);
    }
  }
);

export const logoutUser = createAsyncThunk(
  '/users/logout',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get('/logout');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.errMsg);
    }
  }
);
