import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  signedInUser: null,
  isLoggedIn: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSignedInUser: (state, action) => {
      state.signedInUser = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    resetAuthState: (state) => {
      state.signedInUser = null;
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

// Export actions
export const { setSignedInUserDetails, setIsLoggedIn, setToken, resetAuthState } = authSlice.actions;

// Export reducer
export default authSlice.reducer;