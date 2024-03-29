import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Logo from './assets/intellisense.png';
import './assets/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

function Login({onLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  console.log(history)
  
  function validateForm() {
    if (email === "crowpaddy@gmail.com" && password === "1234") {
      localStorage.setItem('email', JSON.stringify(email));
      onLogin()
    }
    return email === "crowpaddy@gmail.com" && password === "1234";
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      
    }
  }

  

  return (
    <div className="canvas">
      <br />
      <form onSubmit={handleSubmit} className="entry" noValidate autoComplete="off">
        <img src={Logo} alt="Intellisense.io"></img><br />
        <p1 style={{color: 'white', fontSize:'11px'}}><u><b>Login to example referencia dashboard</b></u></p1><br /><br />
        <TextField style={{background: 'white', borderRadius: "5px"}} onChange={(e) => setEmail(e.target.value)} id="standard-basic" label={<FontAwesomeIcon icon={faEnvelope} />} />
        <br /><br />
        <TextField style={{background: 'white', borderRadius: "5px"}} onChange={(e) => setPassword(e.target.value)} id="outlined-password-input" type="password" label={<FontAwesomeIcon icon={faKey} />} />
        <br /><br />
        <buttons style={{marginRight: '8px'}}>
          <Button style={{borderRadius: "10px", margin:'7px', width: '110px'}} onClick={validateForm} variant="contained" type="submit">Login</Button>
        <Button style={{borderRadius: "10px"}} variant="contained" type="submit">Register</Button>
        </buttons>
        <br /><br /><br />
      </form>
    </div>
  );
}

export default Login;
