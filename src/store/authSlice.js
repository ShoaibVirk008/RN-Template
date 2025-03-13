import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  signedInUserDetails: null,
  isLoggedIn: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSignedInUserDetails: (state, action) => {
      state.signedInUserDetails = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    resetAuthState: (state) => {
      state.signedInUserDetails = null;
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

// Export actions
export const { setSignedInUserDetails, setIsLoggedIn, setToken, resetAuthState } = authSlice.actions;

// Export reducer
export default authSlice.reducer;