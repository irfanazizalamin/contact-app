import React from "react";

class FormApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      gender: "Man",
    };

    // nge bind this ke onSubmitHandler
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(event) {
    // menghentikan aksi default dari tombol submit
    event.preventDefault();

    const message = `
     Name: ${this.state.name}
     Email: ${this.state.email}
     Gender: ${this.state.gender}
   `;

    alert(message);
  }

  render() {
    return (
      <div>
        {console.log("this.state", this.state)}
        <h1>Register Form</h1>
        <form onSubmit={this.onSubmitHandler}>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <br />
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="text"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <br />
          <label htmlFor="gender">Gender: </label>
          <select
            id="gender"
            value={this.state.gender}
            onChange={(e) => this.setState({ gender: e.target.value })}
          >
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
          </select>
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default FormApp;
