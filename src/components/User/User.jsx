import PropTypes from 'prop-types';
import { Text, Span } from './User.styled';
import Avatar from 'react-avatar';
// import UpdateUserForm from 'components/UpdateUserForm/UpdateUserForm';

export const User = ({
  user: { name, email, id, hasJob }, removeUser
}) => {
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
      {/* <button
        onClick={() => {
          changeStatus(id);
        }}
      >
        Change job status
      </button>
      <button
        onClick={() => {
          showUpdateForm(id);
        }}
      >
        Update user
      </button>
      {userToUpdate && userToUpdate.id === id && (
        <UpdateUserForm userToUpdate={userToUpdate} updateUser={updateUser} />
      )} */}
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
