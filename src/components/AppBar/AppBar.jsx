import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectToken } from 'redux/auth/authSelectors';
import { Navigation } from 'components/Navigation/Navigation';
import { UserAuthMenu } from '../UserAuthMenu/UserAuthMenu';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';

export const AppBar = () => {
    const token = useSelector(selectToken)
    console.log(token)
  return (
    <>
      <Navigation />
      {token ? <UserAuthMenu /> : <AuthNavigation />}
    </>
  );
};
