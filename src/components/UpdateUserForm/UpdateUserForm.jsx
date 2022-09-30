import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/users/usersOperations';

export const UpdateUserForm = ({ userToUpdate, closeForm }) => {
  const [name, setName] = useState(userToUpdate.name);
  const [email, setEmail] = useState(userToUpdate.email);

  const dispatch = useDispatch()

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
    dispatch(updateUser({ ...userToUpdate, name, email }))
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
      <button type="submit">Save changes</button>
    </form>
  );
};
