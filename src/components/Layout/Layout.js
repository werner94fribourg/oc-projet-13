import React from 'react';
import { useLocation } from 'react-router';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import styles from './Layout.module.scss';

const Layout = props => {
  const { pathname } = useLocation();

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
