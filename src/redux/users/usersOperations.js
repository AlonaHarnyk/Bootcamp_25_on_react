import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:8080';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/users/${id}`, {
        headers: {
          authorization: 'admin',
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addUser = createAsyncThunk(
  'users/addUser',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users', user);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (user, { rejectWithValue }) => {
      try {
        console.log(user)
          await axios.put(`/users/${user.id}`);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
