import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Accounts from '../components/Profile/Accounts/Accounts';
import ProfileHeader from '../components/Profile/ProfileHeader/ProfileHeader';
import { setUserProfile } from '../store/slices/user';

const Profile = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.isAuth) setUserProfile(auth.token, dispatch);
  }, [auth, dispatch]);

  return (
    <React.Fragment>
      <ProfileHeader />
      <Accounts />
    </React.Fragment>
  );
};

export default Profile;
