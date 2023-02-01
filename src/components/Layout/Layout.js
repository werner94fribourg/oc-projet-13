import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { setIndex } from '../../store/slices/indexPage';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import styles from './Layout.module.scss';

const Layout = props => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const indexPage = useSelector(state => state.index.indexPage);

  useEffect(() => {
    setIndex(pathname === '/', dispatch);
  }, [pathname, dispatch]);

  useEffect(() => {
    const body = document.querySelector('body');
    body.dataset.index = indexPage;
  }, [indexPage]);

  const stylesMain =
    pathname === '/signin' || pathname === '/profile' ? styles['main-app'] : '';

  return (
    <React.Fragment>
      <Header />
      <main className={stylesMain}>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
