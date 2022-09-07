import PropTypes from 'prop-types';
import { User } from '../User/User';

export const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <User user={user} />
        </li>
      ))}
    </ul>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

// export const UsersList = ({ users }) => {
//   return (
//     <ul>
//       {users.map(user => (
//           <User user={user} key={user.id} />
//       ))}
//     </ul>
//   );
// };
