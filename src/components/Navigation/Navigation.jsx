import { useContext } from 'react';
import { AuthContext } from '../../authContext';
import { LoginForm } from '../LoginForm/LoginForm';

export const Navigation = () => {
  const { isAuth, logout } = useContext(AuthContext);

  return isAuth ? (
    <>
      <p>You're welcome!</p>
      <button onClick={logout}>Logout</button>
    </>
  ) : (
    <LoginForm />
  );
};
