import { useState } from 'react';
import { Button } from './Button/Button';
import { Section } from './Section/Section';
import { UsersList } from './UsersList/UsersList';
import { AddUserForm } from './AddUserForm/AddUserForm';
import { GlobalStyles } from 'utils/GlobalStyle';
import { fetchUsers } from 'redux/users/usersOperations';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading, getError, getUsers } from 'redux/users/usersSelectors';

export const App = () => {
  const [isListShown, setIsListShown] = useState(false);
  const [isFormShown, setIsFormShown] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError)
  const users = useSelector(getUsers)
  // state = {
  //   users: usersData,
  //   isListShown: false,
  //   isFormShown: false,
  //   userToUpdate: {},
  // };

  const changeVisibility = () => {
    setIsListShown(true);
    dispatch(fetchUsers());
  };

  // deleteUser = userId => {
  //   this.setState(prevState => ({
  //     users: prevState.users.filter(({ id }) => id !== userId),
  //   }));
  // };

  // changeStatus = userId => {
  //   this.setState(prevState => ({
  //     users: prevState.users.map(user =>
  //       user.id !== userId ? user : { ...user, hasJob: !user.hasJob }
  //     ),
  //   }));
  // };

  const showForm = () => {
    setIsFormShown(true);
  };

  const closeForm = () => {
    setIsFormShown(false);
  };

  // addUser = data => {
  //   const newUser = {
  //     ...data,
  //     hasJob: false,
  //     id: nanoid(),
  //   };
  //   this.setState(prevState => ({
  //     users: [...prevState.users, newUser],
  //     isFormShown: false,
  //   }));
  // };

  // showUpdateForm = userId => {
  //   const { users } = this.state;
  //   const user = users.find(({ id }) => id === userId);
  //   this.setState({ userToUpdate: user });
  // };

  // updateUser = user => {
  //   const { users } = this.state;
  //   const index = users.findIndex(({ id }) => id === user.id)
  //   console.log(index)
  //   const newUsers = [...users]
  //   newUsers[index] = user
  //   this.setState({users: newUsers, userToUpdate: {}})
  // };

  return (
    <>
      <Section title="Users list">
        {isListShown ? (
          <>
            {isLoading && users.length === 0 ? (
              <h1>LOADING..</h1>
            ) : (
              <UsersList
              // users={users}
              // deleteUser={this.deleteUser}
              // changeStatus={this.changeStatus}
              // showUpdateForm={this.showUpdateForm}
              // userToUpdate={userToUpdate}
              // updateUser={this.updateUser}
              />
            )}
            {!isFormShown && (
              <Button type="button" text="Add user" clickHandler={showForm} />
            )}
          </>
        ) : (
          <Button
            type="button"
            text="Show list of users"
            clickHandler={changeVisibility}
          />
        )}
        {isFormShown && <AddUserForm closeForm={closeForm} />}
      </Section>
      {error && <p>{error}</p>}
      <GlobalStyles />
    </>
  );
};
