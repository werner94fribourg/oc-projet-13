import FeatureItem from './FeatureItem/FeatureItem';
import chat from './icon-chat.png';
import money from './icon-money.png';
import security from './icon-security.png';
import styles from './Features.module.scss';

const Features = () => {
  return (
    <section className={styles.features}>
      <h2 className="sr-only">Features</h2>
      <FeatureItem
        logo={chat}
        title="You are our #1 priority"
        paragraph="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <FeatureItem
        logo={money}
        title="More savings means higher rates"
        paragraph="The more you save with us, the higher your interest rate will be!"
      />
      <FeatureItem
        logo={security}
        title="Security you can trust"
        paragraph="We use top of the line encryption to make sure your data and money is always safe."
      />
    </section>
  );
};

export default Features;
