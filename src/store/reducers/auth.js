import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    signedInUser: null,
  },
  reducers: {
    saveSignedInUser: (state, action) => {
      state.signedInUser = action.payload;
    },
  },
});

export const { saveSignedInUser } = authSlice.actions;
//export const selectSignedInUser = (state) => state.auth.signedInUser;
export default authSlice.reducer;
