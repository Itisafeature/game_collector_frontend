import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signupUser = createAsyncThunk(
  '/users/signup',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/signup', formData);
      return response.data;
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
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.errMsg);
    }
  }
);
