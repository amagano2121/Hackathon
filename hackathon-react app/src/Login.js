import { Directory } from './Directory'

export const Login = () => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="username">Username: </ label>
        <input type="text" id="username" />

        <label for="password">Password: </ label>
        <input type="text" id="password" />

        <input type="submit" value="Submit" />
      </form>

      <Directory />
    </>
  );
}

const handleSubmit = (event) => {
  event.preventDefault();

  const usernameInput = event.target.username;
  const passwordInput = event.target.password;

  console.log(usernameInput.value);
  console.log(passwordInput.value);
}

