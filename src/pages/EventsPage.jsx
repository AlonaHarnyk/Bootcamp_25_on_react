import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchEvents } from 'servises/events-api';

export const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    events &&
    <>
          <h1>Events</h1>
          <ul>
              {events.map(({name, id}) => <li key={id}>
                  <Link to={id}>{name}</Link>
              </li>)}
      </ul>
      <Outlet/>
    </>
  );
};
