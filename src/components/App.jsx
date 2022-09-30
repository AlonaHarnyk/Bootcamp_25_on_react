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

  const changeVisibility = () => {
    setIsListShown(true);
    dispatch(fetchUsers());
  };

  const showForm = () => {
    setIsFormShown(true);
  };

  const closeForm = () => {
    setIsFormShown(false);
  };

  return (
    <>
      <Section title="Users list">
        {isListShown ? (
          <>
            {isLoading && users.length === 0 ? (
              <h1>LOADING..</h1>
            ) : (
              <UsersList
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