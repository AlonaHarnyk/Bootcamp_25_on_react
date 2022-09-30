import { useState } from 'react';
import { addUser } from 'redux/users/usersOperations';
import { useDispatch } from 'react-redux';

export const AddUserForm = ({closeForm}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addUser({ name, email }));
    setName('')
    setEmail('')
    closeForm()
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          required
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add user</button>
    </form>
  );
};
