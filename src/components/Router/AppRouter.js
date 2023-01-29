import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import Signin from '../../pages/Signin';

const AppRouter = () => {
  const auth = useSelector(state => state.auth);

  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route
        path="/signin"
        element={!auth.isAuth ? <Signin /> : <Navigate to="/profile" replace />}
      />
      <Route
        path="/profile"
        element={auth.isAuth ? <Profile /> : <Navigate to="/signin" replace />}
      />
      <Route path="*" element={<Navigate to="/" replace />} replace />
    </Routes>
  );
};

export default AppRouter;
