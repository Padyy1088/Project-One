import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import UnderflowGraph from './components/graph/underflow';
import Login from "./components/loginpage/loginpage";
import MainUI from './components/main/main';
import Home from './Home';
import { BasicTabs } from './components/navbar/navbar';
// function Home() {
//   return (  
//     <div className="canvas">
//       <br /><h1 className="title" style={{color: "grey"}}><b>TK1 Status</b></h1><br /><br /><br />
//       <BasicTabs/>
//       <br />
//       <br />
//     </div>
//   );

// }

function App() {
  // return (  
  //   <BrowserRouter>
  //     <div>
  //       <Switch>
  //         <Route exact path="/" component={Login} />
  //         <Route exact path="/main" component={Home} />
  //       </Switch>
  //     </div>
  //   </BrowserRouter>
  // );
  return (  
        <div className="canvas">
          <h1 className="title" style={{color: "white"}}><b>TK1 Status</b></h1><br /><br /><br /><br />
          <BasicTabs/>
          <br />
          <br />
        </div>
      );

}


export default App;
