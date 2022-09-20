import { useRef } from 'react';

export const TestForm = () => {
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const showMessage = () => {
    alert(
      `Hello, ${nameRef.current.value}! You're age is ${ageRef.current.value}`
    );
    nameRef.current.value = '';
    ageRef.current.value = '';
  };

  return (
    <form onSubmit={event => event.preventDefault()}>
      <label>
        Name:
        <input type="text" ref={nameRef} />
      </label>
      <label>
        Age:
        <input type="text" ref={ageRef} />
      </label>
      <button onClick={showMessage}>Show message</button>
    </form>
  );
};
