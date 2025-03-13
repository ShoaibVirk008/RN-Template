import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  isBottomTabVisible: true,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setIsBottomTabVisible: (state, action) => {
      state.isBottomTabVisible = action.payload;
    },
  },
});

// Export actions
export const { setPosts, setIsBottomTabVisible } = appSlice.actions;

// Export reducer
export default appSlice.reducer;