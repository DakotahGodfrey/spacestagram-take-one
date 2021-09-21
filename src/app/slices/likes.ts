import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface LikesState {
  likes: string[];
}

const initialState: LikesState = {
  likes: [],
};
const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    addToLikes: (state, action: PayloadAction<string>) => {
      if (state.likes.includes(action.payload)) {
        state.likes = state.likes.filter((el) => el !== action.payload);
      } else {
        state.likes.push(action.payload);
      }
    },
  },
});
export const { addToLikes } = likesSlice.actions;
export const selectLikes = (state: RootState) => state.likes;
export default likesSlice.reducer;
