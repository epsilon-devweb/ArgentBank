import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: localStorage.getItem('authToken') || null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUsername: (state, action) => {
      state.user.userName = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload.token;
      localStorage.setItem('authToken', action.payload.token);
    },
    logout: (state, action) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('authToken');
    },
  }
});

export const { setUser, setUsername, setToken, logout } = authSlice.actions;
export default authSlice.reducer;