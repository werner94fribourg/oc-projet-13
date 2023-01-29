import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from './components/Layout/Layout';
import AppRouter from './components/Router/AppRouter';
import { getTokenFromStore } from './store/slices/auth';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getTokenFromStore(dispatch);
  }, [dispatch]);
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;
