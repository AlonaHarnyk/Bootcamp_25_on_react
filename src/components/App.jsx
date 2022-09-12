import { Component } from 'react';
import { usersData } from '../data/users';
import { Button } from './Button/Button';
import { Section } from './Section/Section';
import { UsersList } from './UsersList/UsersList';
import { GlobalStyles } from 'utils/GlobalStyle';

export default class App extends Component {
  state = {
    users: usersData,
    isShown: false,
  };

  changeVisibility = () => {
    this.setState({
      isShown: true,
    });
  };

  deleteUser = userId => {
    this.setState(prevState => ({
      users: prevState.users.filter(({ id }) => id !== userId),
    }));
  };

  changeStatus = userId => {
    this.setState(prevState => ({
      users: prevState.users.map(user =>
        user.id !== userId ? user : { ...user, hasJob: !user.hasJob }
      ),
    }));
  };

  render() {
    const { users, isShown } = this.state;

    return (
      <>
        <Section title="Users list">
          {isShown ? (
            <UsersList
              users={users}
              deleteUser={this.deleteUser}
              changeStatus={this.c}
            />
          ) : (
            <Button
              type="button"
              text="Show list of users"
              clickHandler={this.changeVisibility}
            />
          )}
        </Section>
        <GlobalStyles />
      </>
    );
  }
}
