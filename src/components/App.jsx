import { Layout } from './Layout';
import { AddContactPage } from 'pages/AddContactPage';
import { HomePage } from 'pages/HomePage';
import { Routes, Route, Navigate } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="add" element={<AddContactPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
