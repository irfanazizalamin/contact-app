import React from "react";
import PropTypes from 'prop-types';

class ContactInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tag: "",
    };

    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          placeholder="Nama"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Tag"
          value={this.state.tag}
          onChange={(e) => this.setState({ tag: e.target.value })}
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

ContactInput.propTypes = {
  addContact: PropTypes.func.isRequired
}

export default ContactInput;
