import { Component } from 'react';
import { nanoid } from 'nanoid';
import { usersData } from '../data/users';
import { Button } from './Button/Button';
import { Section } from './Section/Section';
import { UsersList } from './UsersList/UsersList';
import AddUserForm from './AddUserForm/AddUserForm';
import { GlobalStyles } from 'utils/GlobalStyle';

export default class App extends Component {
  state = {
    users: usersData,
    isListShown: false,
    isFormShown: false,
    userToUpdate: {},
  };

  changeVisibility = () => {
    this.setState({
      isListShown: true,
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

  showForm = () => {
    this.setState({
      isFormShown: true,
    });
  };

  addUser = data => {
    const newUser = {
      ...data,
      hasJob: false,
      id: nanoid(),
    };
    this.setState(prevState => ({
      users: [...prevState.users, newUser],
      isFormShown: false,
    }));
  };

  showUpdateForm = userId => {
    const { users } = this.state;
    const user = users.find(({ id }) => id === userId);
    this.setState({ userToUpdate: user });
  };

  updateUser = user => {
    const { users } = this.state;
    const index = users.findIndex(({ id }) => id === user.id)
    console.log(index)
    const newUsers = [...users]
    newUsers[index] = user
    this.setState({users: newUsers, userToUpdate: {}})
  };

  render() {
    const { users, isListShown, isFormShown, userToUpdate } = this.state;

    return (
      <>
        <Section title="Users list">
          {isListShown ? (
            <>
              <UsersList
                users={users}
                deleteUser={this.deleteUser}
                changeStatus={this.changeStatus}
                showUpdateForm={this.showUpdateForm}
                userToUpdate={userToUpdate}
                updateUser={this.updateUser}
              />
              {!isFormShown && (
                <Button
                  type="button"
                  text="Add user"
                  clickHandler={this.showForm}
                />
              )}
            </>
          ) : (
            <Button
              type="button"
              text="Show list of users"
              clickHandler={this.changeVisibility}
            />
          )}
          {isFormShown && <AddUserForm addUser={this.addUser} />}
        </Section>
        <GlobalStyles />
      </>
    );
  }
}
