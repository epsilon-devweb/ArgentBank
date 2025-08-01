import ChatLogo from '../assets/img/icon-chat.webp';
import MoneyLogo from '../assets/img/icon-money.webp';
import SecurityLogo from '../assets/img/icon-security.webp';
import PropTypes from 'prop-types';

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt={`${title} Icon`} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

FeatureItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Feature = () => {
  const features = [
    {
      icon: ChatLogo,
      title: 'You are our #1 priority',
      description: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    },
    {
      icon: MoneyLogo,
      title: 'More savings means higher rates',
      description: 'The more you save with us, the higher your interest rate will be!',
    },
    {
      icon: SecurityLogo,
      title: 'Security you can trust',
      description: 'We use top of the line encryption to make sure your data and money is always safe.',
    },
  ];

  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {features.map((feature, index) => (
        <FeatureItem key={index} {...feature} />
      ))}
    </section>
  );
};

export default Feature;
