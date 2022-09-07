import { users } from '../data/users';
import { User } from './User/User';
import { Section } from './Section/Section';
import { UsersList } from './UsersList/UsersList';

export const App = () => {
  return (
    <>
      <Section>
        <User user={users[0]} />
      </Section>
      <Section title="Users list">
        <UsersList users={users} />
      </Section>
    </>
  );
};
