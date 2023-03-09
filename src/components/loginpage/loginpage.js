import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Logo from './assets/intellisense.png'
import { useState } from 'react';
import './assets/App.css';
import { Link, Route, Switch } from 'react-router-dom';



function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0
    }
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (  
      <div className="canvas">
        <br />
        <form onSubmit={handleSubmit} className="entry" noValidate autoComplete="off">
          <img src={Logo} alt="Intellisense.io"></img><br />
          <p1 style={{color: 'white', fontSize:'11px'}}><u><b>Login to Referencia example dashboard.</b></u></p1><br /><br />
          <TextField style={{background: 'white', borderRadius: "5px"}} onChange={(e) => setEmail(e.target.value)} id="standard-basic" label="Email" />
          <br /><br />
          <TextField style={{background: 'white', borderRadius: "5px"}} onChange={(e) => setPassword(e.target.value)} id="outlined-password-input" type="Password" label="Password" />
          <br /><br />
          <Button style={{borderRadius: "10px"}} disabled={!validateForm()} variant="contained">Login</Button>
        </form>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    );
  
  }

  export default Login;