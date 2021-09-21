import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { PostObject } from '../../types';
import { API_URL } from '../api';
import { RootState } from '../store';

interface PostsState {
  posts: PostObject[] | [];
  results: PostObject[] | [];
  status: 'idle' | 'pending' | 'resolved';
  errors: boolean;
  post: PostObject | null;
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
export const getPostsByMonth = createAsyncThunk(
  'posts/getPostsByMonth',
  async (dates: { startDate: string; endDate: string }) => {
    const { startDate, endDate } = dates;
    const response = await fetch(
      `${API_URL}start_date=${startDate}&end_date=${endDate}`
    );
    const data = await response.json();
    return data;
  }
);
export const getPostsByDate = createAsyncThunk(
  'posts/getPostsByDate',
  async (date: string) => {
    const response = await fetch(`${API_URL}date=${date}`);
    const data = await response.json();
    return data;
  }
);

const initialState: PostsState = {
  posts: [],
  results: [],
  status: 'idle',
  errors: false,
  post: null,
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
    builder.addCase(
      getMostRecentPosts.fulfilled,
      (state, action: PayloadAction<[]>) => {
        state.errors = false;
        state.status = 'resolved';
        state.posts = action.payload.reverse();
      }
    );
    builder.addCase(getMostRecentPosts.rejected, (state) => {
      state.status = 'resolved';
      state.errors = true;
    });
    builder.addCase(getPostsByMonth.pending, (state) => {
      state.errors = false;
      state.status = 'pending';
    });
    builder.addCase(
      getPostsByMonth.fulfilled,
      (state, action: PayloadAction<[]>) => {
        state.errors = false;
        state.status = 'resolved';
        state.results = action.payload.reverse();
      }
    );
    builder.addCase(getPostsByMonth.rejected, (state) => {
      state.status = 'resolved';
      state.errors = true;
    });
    builder.addCase(getPostsByDate.pending, (state) => {
      state.post = null;
      state.errors = false;
      state.status = 'pending';
    });
    builder.addCase(
      getPostsByDate.fulfilled,
      (state, action: PayloadAction<PostObject>) => {
        state.errors = false;
        state.status = 'resolved';
        state.post = action.payload;
      }
    );
    builder.addCase(getPostsByDate.rejected, (state) => {
      state.status = 'resolved';
      state.errors = true;
    });
  },
});

export const selectPosts = (state: RootState) => state.posts;
export default postsSlice.reducer;
