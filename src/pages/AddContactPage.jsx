// import { useState } from 'react';
import { nanoid } from 'nanoid';
import { getStatus } from '../servises/statusApi';
// import { addUser } from 'redux/users/users-actions';
import { addUser } from 'redux/users/usersSlice';
import { useDispatch } from 'react-redux';
// import { usersSlice } from 'redux/users/usersSlice';
import { useLocalStorage } from '../hooks/useLocaleStorage';

export const AddContactPage = () => {
  // console.log(usersSlice);
  const [name, setName] = useLocalStorage('name', '');
  const [age, setAge] = useLocalStorage('age', '');

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
