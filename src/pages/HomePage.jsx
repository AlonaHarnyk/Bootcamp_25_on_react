import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, updateUser } from 'redux/users/users-actions';
import { getUsers } from '../redux/users/users-selectors';
import Avatar from 'react-avatar';

export const HomePage = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Avatar</th>
          <th>Name</th>
          <th>Age</th>
          <th>Status</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ name, age, id, status, avatar }, index) => (
          <tr key={id}>
            <td>{index + 1}</td>
            <td>
              <Avatar name={avatar} round={true} size={40} />
            </td>
            <td>{name}</td>
            <td>{age}</td>
            <td>
              <span
                onClick={() => {
                  dispatch(updateUser(id));
                }}
              >
                {status === 'yes' ? 'online' : 'offline'}
              </span>
            </td>
            <td>
              <button
                onClick={() => {
                  dispatch(deleteUser(id));
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
