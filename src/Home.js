import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import { BasicTabs } from './components/navbar/navbar';

function App({email}) {
  return (  
        <div className="canvas">
          <h1 className="title" style={{color: "white"}}><b>TK1 Status</b></h1><br /><br /><p1 style={{color: 'white'}}>You are currently signed in as: {email}</p1><br /><br />
          <BasicTabs/>
          <br />
          <br />
        </div>
      );
}
export default App;
