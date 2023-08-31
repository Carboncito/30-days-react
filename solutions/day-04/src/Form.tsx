import { FormEvent } from 'react';

const Form = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <h2>SUBSCRIBE</h2>
      <p>Sign up with your email address to receive news and updates.</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <input placeholder="First name" />
        <input placeholder="Last name" />
        <input placeholder="Email" />
      </form>
    </div>
  );
};

export default Form;
