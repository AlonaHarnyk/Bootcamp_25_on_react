import { Text, Span } from './User.styled';
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';
import { getUsers } from 'redux/users/usersSelectors';
import { useState } from 'react';

import { UpdateUserForm } from 'components/UpdateUserForm/UpdateUserForm';

export const User = ({
  user: { name, email, id}, removeUser
}) => {

  const [userToUpdate, setUserToUpdate] = useState(null)

  const users = useSelector(getUsers)

  const showUpdateForm = userId => {
    const user = users.find(({ id }) => id === userId);
    setUserToUpdate(user)
  };

  const closeForm = () => {
    setUserToUpdate(null)
  }

  const isRed = email.includes('biz');
  return (
    <>
      <Avatar size="40" name={name} round={true} />
      <Text>
        Name: <Span>{name}</Span>
      </Text>
      <Text>
        Email: <Span isRed={isRed}>{email}</Span>
      </Text>
      <button
        onClick={() => {
          removeUser(id);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          showUpdateForm(id);
        }}
      >
        Update user
      </button>
      {userToUpdate && userToUpdate.id === id && (
        <UpdateUserForm userToUpdate={userToUpdate} closeForm={closeForm} />
      )}
    </>
  );
};


// export const User = ({ user }) => {
//   return (
//       <li>
//       <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//     </li>
//   );
// };