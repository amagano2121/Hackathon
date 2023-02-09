import { Directory } from './Directory'

export const Login = () => {
  return (
    <>
      <form onSubmit={handleSignin}>
        <label htmlFor="username">Username: </ label>
        <input type="text" id="username" />

        <label htmlFor="password">Password: </ label>
        <input type="text" id="password" />

        <input type="submit" value="Submit" />
      </form>

      <button onClick={handleSignout}>Sign out</button>
      <Directory />
    </>
  );
}

const handleSignin = (event) => {
  event.preventDefault();

  const usernameInput = event.target.username;
  const passwordInput = event.target.password;

  console.log(usernameInput.value);
  console.log(passwordInput.value);
}

const handleSignout = () => {
  if (localStorage.getItem('login')) {

  }
}