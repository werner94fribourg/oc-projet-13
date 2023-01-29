import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import userReducer from './slices/user';

const store = configureStore({
  reducer: { auth: authReducer, user: userReducer },
});

export default store;
