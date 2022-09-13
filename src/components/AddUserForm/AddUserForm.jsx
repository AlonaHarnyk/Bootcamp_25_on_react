import { Component } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  name: '',
  email: '',
};

export default class AddUserForm extends Component {
  static propTypes = {
    addUser: PropTypes.func.isRequired,
  };

  state = {
    ...INITIAL_STATE,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      ...INITIAL_STATE,
    });
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
        <button type="submit">Add user</button>
      </form>
    );
  }
}
