import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { selectIsFetchingCurrent } from 'redux/auth/authSelectors';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { UsersPage } from 'pages/UsersPage/UsersPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage'; 
import { PrivateRoute } from 'HOCs/PrivateRoute';
import { PublicRoute } from 'HOCs/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrent = useSelector(selectIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])
  return (
    <>
      {!isFetchingCurrent && <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<PublicRoute><HomePage /></PublicRoute>} />
          <Route path='users' element={<PrivateRoute><UsersPage /></PrivateRoute>} />
          <Route path='register' element={<PublicRoute restricted><RegisterPage /></PublicRoute>} />
          <Route path='login' element={<PublicRoute restricted><LoginPage /></PublicRoute>} />
        </Route>
      </Routes>
      }
    </>
  );
};