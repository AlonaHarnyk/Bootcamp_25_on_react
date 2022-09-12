export const Button = ({ type, text, clickHandler }) => {
  return (
    <button type={type} onClick={clickHandler}>
      {text}
    </button>
  );
};
