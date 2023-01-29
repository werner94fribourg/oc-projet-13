import styles from './Account.module.scss';

const Account = props => {
  const { title, amount } = props;

  const usdFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <section className={styles.account}>
      <div className={styles['account__content-wrapper']}>
        <h3 className={styles['account__title']}>{title}</h3>
        <p className={styles['account__amount']}>
          {usdFormatter.format(amount)}
        </p>
        <p className={styles['account__amount-description']}>
          Available Balance
        </p>
      </div>
      <div className={`"${styles['account__content-wrapper']} ${styles.cta}"`}>
        <button className={styles['account__transaction-button']}>
          View transactions
        </button>
      </div>
    </section>
  );
};

export default Account;
