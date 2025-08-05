import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import { userFetch } from '../api/userApi';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

const { token } = store.getState().auth
if (token) {
  store.dispatch(userFetch(token));
}

export default store;