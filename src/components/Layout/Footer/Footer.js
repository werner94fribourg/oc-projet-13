import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles['footer__text']}>Copyright 2020 Argent Bank</p>
    </footer>
  );
};

export default Footer;
