import { faSignOut, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../../store/slices/auth';
import logo from './argentBankLogo.png';
import styles from './Header.module.scss';

const Header = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const signOutHandler = () => {
    logout(dispatch);
  };

  return (
    <nav className={styles['header-nav']}>
      <NavLink
        className={`${styles['header-nav__router-link']} ${styles['header-nav__logo']}`}
        to="/"
      >
        <img
          className={styles['header-nav__logo-image']}
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {auth.isAuth && (
          <React.Fragment>
            <NavLink
              className={`${styles['header-nav__router-link']} ${styles['header-nav__nav-item']}`}
              to="/profile"
            >
              <FontAwesomeIcon icon={faUserCircle} /> Tony
            </NavLink>
            <NavLink
              className={`${styles['header-nav__router-link']} ${styles['header-nav__nav-item']}`}
              to="/"
              onClick={signOutHandler}
            >
              <FontAwesomeIcon icon={faSignOut} /> Sign Out
            </NavLink>
          </React.Fragment>
        )}
        {!auth.isAuth && (
          <NavLink
            className={`${styles['header-nav__router-link']} ${styles['header-nav__nav-item']}`}
            to="/signin"
          >
            <FontAwesomeIcon icon={faUserCircle} /> Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
