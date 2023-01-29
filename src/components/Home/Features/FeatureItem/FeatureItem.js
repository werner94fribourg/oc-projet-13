import styles from './FeatureItem.module.scss';

const FeatureItem = props => {
  const { logo, title, paragraph } = props;

  return (
    <div className={styles.feature}>
      <img src={logo} alt="Chat Icon" className={styles['feature__icon']} />
      <h3 className={styles['feature__title']}>{title}</h3>
      <p className={styles['feature__paragraph']}>{paragraph}</p>
    </div>
  );
};

export default FeatureItem;
