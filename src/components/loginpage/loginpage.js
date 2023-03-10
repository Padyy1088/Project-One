import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Logo from './assets/intellisense.png';
import './assets/App.css';
import MainUI from '../main/main';
import { Component } from 'react';
import { render } from '@testing-library/react';
import { clear } from '@testing-library/user-event/dist/clear';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function validateForm() {
    return email === "crowpaddy@gmail.com" && password === "1234";
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      
      render (
        history.push("/home")
      )
    }
  }

  return (
    <div className="canvas">
      <br />
      <form onSubmit={handleSubmit} className="entry" noValidate autoComplete="off">
        <img src={Logo} alt="Intellisense.io"></img><br />
        <p1 style={{color: 'white', fontSize:'11px'}}><u><b>Login to example referencia dashboard</b></u></p1><br /><br />
        <TextField style={{background: 'white', borderRadius: "5px"}} onChange={(e) => setEmail(e.target.value)} id="standard-basic" label="Email" />
        <br /><br />
        <TextField style={{background: 'white', borderRadius: "5px"}} onChange={(e) => setPassword(e.target.value)} id="outlined-password-input" type="password" label="Password" />
        <br /><br />
        <Button style={{borderRadius: "10px"}} disabled={!validateForm()} variant="contained" type="submit">Login</Button>
      </form>
    </div>
  );
}

export default Login;
