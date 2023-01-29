import { createSlice } from '@reduxjs/toolkit';
import { getUser, modifyUser } from '../../api/api';

const initialState = {
  id: '',
  email: '',
  firstName: '',
  lastName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile(state, action) {
      const user = action.payload;

      state.id = user.id;
      state.email = user.email;
      state.firstName = user.firstName;
      state.lastName = user.lastName;
    },
    modifyUser(state, action) {
      const user = action.payload;
      state.firstName = user.firstName;
      state.lastName = user.lastName;
    },
    resetUser(state) {
      state.id = '';
      state.email = '';
      state.firstName = '';
      state.lastName = '';
    },
  },
});

const userActions = userSlice.actions;

const userReducer = userSlice.reducer;

export const setUserProfile = async (token, dispatch) => {
  const data = await getUser(token);

  if (data.invalid) return;

  dispatch(userActions.setProfile(data.user));
};

export const modifyUserProfile = async (token, user, dispatch) => {
  // user : {firstName: '', lastName: ''}
  const data = await modifyUser(token, user);

  if (data.invalid) return;

  dispatch(userActions.modifyUser(user));
};

export const resetUserProfile = dispatch => {
  dispatch(userActions.resetUser());
};

export default userReducer;
