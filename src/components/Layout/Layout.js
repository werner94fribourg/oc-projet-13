import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = props => {
  return (
    <React.Fragment>
      <Header />
      <main className="main">{props.children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
