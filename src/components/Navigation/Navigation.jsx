import { Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" end>Home</Link>
        </li>
        <li>
          <Link to="events">Events</Link>
        </li>
      </ul>
    </nav>
  );
};
