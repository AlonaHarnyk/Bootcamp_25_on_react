import { User } from '../User/User';
import { getUsers } from '../../redux/users/usersSelectors.js'
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from 'redux/users/usersOperations';

export const UsersList = () => {
  const users = useSelector(getUsers)
  const dispatch = useDispatch()

console.log(users)
  
  const handleDelete = id => {
dispatch(deleteUser(id))
  }


  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <User user={user} removeUser={handleDelete} />
        </li>
      ))}
    </ul>
  );
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
