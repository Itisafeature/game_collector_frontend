import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signupUser = createAsyncThunk('/users/signup', async formData => {
  const response = await axios.post('/signup'.formData);
  return response.user;
});
