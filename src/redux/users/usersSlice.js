import { fetchUsers, deleteUser, addUser, updateUser } from './usersOperations';
import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchUsers.pending]: state => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },
    [fetchUsers.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteUser.pending]: state => {
      state.isLoading = true;
    },
    [deleteUser.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
      state.isLoading = false;
    },
    [deleteUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addUser.pending]: state => {
      state.isLoading = true;
    },
    [addUser.fulfilled]: (state, { payload }) => {
      state.items = [...state.items, payload];
      state.isLoading = false;
    },
    [addUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [updateUser.pending]: state => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      const index = state.items.findIndex(user => user.id === payload.id);
      state.items[index] = payload;
      state.isLoading = false;
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default usersSlice.reducer;
