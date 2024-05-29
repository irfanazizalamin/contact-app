import PropTypes from 'prop-types';

ContactItemImage.propTypes = {
  imageUrl: PropTypes.string.isRequired
}

export default function ContactItemImage({ imageUrl }) {
  return (
    <div className="contact-item__image">
      <img src={imageUrl} alt="contact-avatar" />
    </div>
  );
}
