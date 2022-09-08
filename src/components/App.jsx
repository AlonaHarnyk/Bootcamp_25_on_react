import { users } from '../data/users';
import { User } from './User/User';
import { Section } from './Section/Section';
import { UsersList } from './UsersList/UsersList';
import { GlobalStyles } from 'utils/GlobalStyle';
import {useMedia} from 'react-use';

export const App = () => {
  const isDesktop = useMedia('(min-width: 768px)')
  return (
    <>
      {isDesktop ? <p>It's desktop</p> : <p>It's not desktop</p>}
      <Section>
        <User user={users[0]} />
      </Section>
      <Section title="Users list">
        <UsersList users={users} />
      </Section>
      <GlobalStyles/>
    </>
  );
};
