import { HomePage } from 'pages/HomePage';
import { EventsPage } from 'pages/EventsPage';
import { EventsSubPage } from 'pages/EventsSubPage';
import { EventDetailsPage } from 'pages/EventDetailsPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Layout } from './Layout';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="events" element={<EventsPage />}>
            <Route path=":eventId" element={<EventsSubPage />} />
          </Route>
        </Route>
        <Route path="events/:eventId/details" element={<EventDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
