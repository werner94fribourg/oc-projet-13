import { useSelector } from 'react-redux';
import styles from './Footer.module.scss';

const Footer = () => {
  const indexPage = useSelector(state => state.index.indexPage);
  return (
    <footer className={styles.footer} data-index={indexPage}>
      <p className={styles['footer__text']}>Copyright 2020 Argent Bank</p>
    </footer>
  );
};

export default Footer;
