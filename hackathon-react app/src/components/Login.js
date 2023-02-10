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

      <hr />
      <h4>Directory</h4>
      <Directory />
      <hr />
      <h4>Viewable Compensations</h4>
      <PayDirectory />
    </>
  );
}

const handleSignin = (event) => {
  event.preventDefault();

  const usernameInput = event.target.username.value;
  const passwordInput = event.target.password.value;

  console.log(usernameInput);
  console.log(passwordInput);

  const url = 'http://localhost:3004/login'

  return fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: usernameInput,
      password: passwordInput
    })
  })
    .then(res => res.json())
    .then(res => { console.log(res); return res })
}

const handleSignout = () => {
  if (localStorage.getItem('login')) {

  }
}