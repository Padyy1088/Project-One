import { BasicTabs } from "./components/navbar/navbar";
import { Box, maxWidth } from "@mui/system";
import './App.css';


function App() {
  return (  
    <div className="canvas">
      <br /><h1 className="header" style={{color: "grey"}}><b>TK1 Status</b></h1>
      <br /><BasicTabs/>
      <br />
      <br /><h2 className="about">Created and programmed by Paddy at Intellisense.io.<br />Designed by Dima on Figma.</h2>
      <br />
      <br />
    </div>
  );
}

export default App;
