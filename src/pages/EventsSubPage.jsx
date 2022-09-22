import { Link } from 'react-router-dom';
import { useFetchEvent } from 'hooks/useFetchEvent';

export const EventsSubPage = () => {
  const event = useFetchEvent();

  return (
    <>
      {event && (
        <>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} width="300" />
          <Link to="details">More details</Link>
        </>
      )}
    </>
  );
};
