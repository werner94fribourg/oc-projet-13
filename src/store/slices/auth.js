import { createSlice } from '@reduxjs/toolkit';
import { login } from '../../api/api';

const initialState = { isAuth: false, token: '' };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuth = true;
      state.token = action.payload;
    },
    logout(state) {
      state.isAuth = false;
      state.token = '';
    },
  },
});

const authActions = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;

export const connect = async (credentials, dispatch) => {
  const data = await login(credentials);
  if (data.invalid) return data;

  dispatch(authActions.login(data.token));
  localStorage.setItem('token', data.token);
};

export const getTokenFromStore = dispatch => {
  const token = localStorage.getItem('token');

  if (token) dispatch(authActions.login(token));
};

export const logout = dispatch => {
  localStorage.removeItem('token');

  dispatch(authActions.logout());
};
