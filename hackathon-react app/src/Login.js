import { Directory } from './Directory'
import { PayDirectory } from './PayDirectory';

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
      <br />
      <PayDirectory />
    </>
  );
}

const handleSignin = (event) => {
  event.preventDefault();

  const usernameInput = event.target.username;
  const passwordInput = event.target.password;

  console.log(usernameInput.value);
  console.log(passwordInput.value);

  const url = 'http://localhost:3004/login'

  return fetch(url, {
    method: "post",
    body: {
      username: usernameInput,
      password: passwordInput
    }
  })
    .then(res => res.json())
    .then(res => { console.log(res); return res })
}

const handleSignout = () => {
  if (localStorage.getItem('login')) {

  }
}