import './App.css';
import Logo from './components/loginpage/assets/pfp.png';
import { BasicTabs } from './components/navbar/navbar';
import DateTime from './datetime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Logout () {
  localStorage.removeItem("email")
  localStorage.removeItem("password")
  window.location.reload(true)
}

function App({email}) {
  return (  
        <div className="canvas">
          <DateTime className="clock"/>
          <h1 className="title" style={{color: "white"}}>
            <b>TK1 Status</b>
            </h1>
            
            <profile className="profile">
            <image><br />
            <img src={Logo} alt="pfp" style={{borderRadius: '100px', height: '50px'}}></img>
              </image>
              <p1 style={{color: 'white', marginTop: '17px', marginLeft: '10px'}}><FontAwesomeIcon icon={faEnvelope} /> {email}</p1><button onClick={Logout} style={{background: 'grey', borderRadius: '10px', width:'100px', marginTop: '17px', marginLeft: '10px', marginRight: '180px'}}>Log out</button>
              </profile>
              <br />
          <BasicTabs/>
          <br />
          <br />
        </div>
      );
}

export default App;
