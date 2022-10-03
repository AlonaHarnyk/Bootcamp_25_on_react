import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperations';

export const UserAuthMenu = () => {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <>
      <p>Welcome, {name}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Log out
      </button>
    </>
  );
};
