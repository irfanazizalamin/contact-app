import PropTypes from 'prop-types';
import ContactItem from "./ContactItem";

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default function ContactList({ contacts, onDelete }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} id={contact.id} onDelete={onDelete} />
      ))}
    </div>
  );
}
