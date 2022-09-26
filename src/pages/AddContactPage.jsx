import { useState } from 'react';
import { nanoid } from 'nanoid';
import { getStatus } from '../servises/statusApi';
import { addUser } from 'redux/users/users-actions';
import { useDispatch } from 'react-redux';

export const AddContactPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setAge(value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const status = await getStatus();
    const newUser = {
      name,
      age,
      id: nanoid(),
      avatar: name,
      status,
    };
    dispatch(addUser(newUser));
    setName('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Age:
        <input type="text" name="age" value={age} onChange={handleChange} />
      </label>
      <button>Add user</button>
    </form>
  );
};
