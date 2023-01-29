import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <section className={styles['banner__content']}>
        <h2 className="sr-only">Promoted Content</h2>
        <p className={styles['banner__content-subtitle']}>No fees.</p>
        <p className={styles['banner__content-subtitle']}>
          No minimum deposit.
        </p>
        <p className={styles['banner__content-subtitle']}>
          High interest rates.
        </p>
        <p className={styles['banner__content-text']}>
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  );
};

export default Banner;
