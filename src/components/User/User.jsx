import PropTypes from 'prop-types';
import { Text, Span, Title } from './User.styled';
import Avatar from 'react-avatar';

export const User = ({ user: { name, email, id, hasJob }, deleteUser, changeStatus }) => {
  const isRed = email.includes('biz')
  return (
    <>
      <Avatar size="40" name={name} round={true} />
      <Text>
        Name: <Span >{name}</Span>
      </Text>
      <Text>
        Email: <Span isRed={isRed}>{email}</Span>
      </Text>
      <Text>Has job: <span>{hasJob.toString()}</span></Text>
      <button onClick={() => { deleteUser(id) }}>Delete</button>
      <button onClick={()=> {changeStatus(id)}}>Change job status</button>
    </>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    hasJob: PropTypes.bool.isRequired
  }).isRequired,
  deleteUser: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired
};

// export const User = ({ user }) => {
//   return (
//       <li>
//       <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//     </li>
//   );
// };
