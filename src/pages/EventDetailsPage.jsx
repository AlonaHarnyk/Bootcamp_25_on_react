import { useFetchEvent } from 'hooks/useFetchEvent';

export const EventDetailsPage = () => {
  const event = useFetchEvent();

  return (
    <>
      {event && (
        <>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} width="300" />
          <p>Main genre: {event.classifications[0].genre.name}</p>
          <p>Subgenre: {event.classifications[0].subGenre.name}</p>
          <p>{event.info}</p>
        </>
      )}
    </>
  );
};
