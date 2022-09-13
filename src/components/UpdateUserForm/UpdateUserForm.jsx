import { Component } from 'react';
import PropTypes from 'prop-types';


export default class UpdateUserForm extends Component {
  static propTypes = {
      updateUser: PropTypes.func.isRequired,
      userToUpdate: PropTypes.object.isRequired
  };

  state = {
      name: this.props.userToUpdate.name,
      email: this.props.userToUpdate.email
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
      event.preventDefault();
      this.props.updateUser({...this.props.userToUpdate, ...this.state})
  };

  render() {
    const { name, email } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            required
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            required
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Save changes</button>
      </form>
    );
  }
}
