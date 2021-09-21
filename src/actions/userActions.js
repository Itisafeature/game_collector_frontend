import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signupUser = createAsyncThunk(
  '/users/signup',
  async (formData, thunkAPI) => {
    const response = await axios.post('/signup', formData);
    return response.data;
  }
);
