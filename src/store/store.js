import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import indexReducer from './slices/indexPage';
import userReducer from './slices/user';

const store = configureStore({
  reducer: { auth: authReducer, user: userReducer, index: indexReducer },
});

export default store;
