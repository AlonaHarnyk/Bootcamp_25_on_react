import PropTypes from 'prop-types'; 
export const User = ({ user: {name, email} }) => {
  return (
      <>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </>
  );
};

User.propTypes = {
    user: PropTypes.shape({
        name:PropTypes.string.isRequired,
        email:PropTypes.string.isRequired
    }).isRequired,
}

// export const User = ({ user }) => {
//   return (
//       <li>
//       <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//     </li>
//   );
// };