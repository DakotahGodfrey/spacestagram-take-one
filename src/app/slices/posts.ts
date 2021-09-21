import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PostObject } from '../../types';
import { API_URL } from '../api';
import { RootState } from '../store';

interface PostsState {
  posts: PostObject[] | [];
  status: 'idle' | 'pending' | 'resolved';
  errors: boolean;
}

export const getMostRecentPosts = createAsyncThunk(
  'posts/fetchInitialPosts',
  async () => {
    const endDate = new Date();
    const endDateFormatted = endDate.toISOString().split('T')[0];
    const startDate = new Date(endDate.setMonth(endDate.getMonth() - 1));
    const formattedStartDate = startDate.toISOString().split('T')[0];
    const response = await fetch(
      `${API_URL}start_date=${formattedStartDate}&end_date=${endDateFormatted}`
    );
    const data = await response.json();
    return data;
  }
);

const initialState: PostsState = {
  posts: [],
  status: 'idle',
  errors: false,
};
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMostRecentPosts.pending, (state) => {
      state.errors = false;
      state.status = 'pending';
    });
    builder.addCase(getMostRecentPosts.fulfilled, (state, { payload }) => {
      state.errors = false;
      state.status = 'resolved';
      state.posts = payload.reverse();
    });
    builder.addCase(getMostRecentPosts.rejected, (state) => {
      state.status = 'resolved';
      state.errors = true;
    });
  },
});

export const selectPosts = (state: RootState) => state.posts;
export default postsSlice.reducer;
