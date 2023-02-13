import { Directory } from './Directory'
import { PayDirectory } from './PayDirectory';
import './Login.css'
import logo from './Travelers-Logo.jpg'
import { useEffect, useState } from 'react';

export const Login = () => {
  const [foo, setFoo] = useState()

  return (
    <>
      <header className='Login-header'>

        <div>
          <img src={logo} className='Login-logo' />
        </div>

        <div>
          <h1 className='Login-Directory'>
            | Employee Directory Login
          </h1>
        </div>

      </header>
      <form onSubmit={handleSignin} className='Login-Form'>
        <div><label htmlFor="username" className="Login">Username: </label></div>
        <input type="text" id="username" />

        <div><label htmlFor="password" className="Login">Password: </label></div>
        <input type="text" id="password" />

        <div><button>Submit</button></div>
      </form>
      <button onClick={handleSignout}>Sign out</button>

      <hr />
      <h4>Directory</h4>
      <Directory />
      <hr />
      <h4>Viewable Compensations</h4>
      <PayDirectory foo={foo} />
    </>
  );
  function handleSignin(event) {
    event.preventDefault();

    const usernameInput = event.target.username.value;
    const passwordInput = event.target.password.value;

    console.log(usernameInput);
    console.log(passwordInput);

    const url = 'http://localhost:3004/login'

    localStorage.setItem('token', JSON.stringify({
      'username': usernameInput,
      'password': passwordInput
    }))

    let request = fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: usernameInput,
        password: passwordInput
      })
    })
      .then(res => { if (res.ok) { return res } else { throw "bad username/password" } })
      .then(res => res.json())
      .then(res => { console.log("login fetch:", res); return res })
      .then(() => setFoo(Math.random()))
      .catch(err => console.error("couldn't log in", err))
  }

  function handleSignout(event) {
    console.log('deleting: ', JSON.parse(localStorage.getItem('token')))
    localStorage.setItem('token', JSON.stringify({
      'username': '',
      'password': ''
    }))
  }
}

