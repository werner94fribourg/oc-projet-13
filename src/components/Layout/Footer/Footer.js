import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer class={styles.footer}>
      <p class={styles['footer__text']}>Copyright 2020 Argent Bank</p>
    </footer>
  );
};

export default Footer;
