import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: null,
  success: false,
  token: null,
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signupStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user; // Assuming your API returns { user: {...} }
      state.token = action.payload.token; // If using JWT
      state.isAuthenticated = true;
      state.success = true;
    },
    signupFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    resetAuth: (state) => {
      return initialState; // Reset to initial state
    }
  }
});

export const { signupStart, signupSuccess, signupFailure, resetAuth } = authSlice.actions;
export default authSlice.reducer;