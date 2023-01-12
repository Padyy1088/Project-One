import './App.css';
import BasicTable from './components/table/Table';
import Graph from './components/graph/Graph';

function App() {
  return (
    <div style={{backgroundColor: '#3A3B3B', width: '1920px', height: '1080px'}}>
    <BasicTable />
    <br />
    <br />
    <br />
    <br />
    <Graph />
    </div>
  );
}

export default App;


// import { LineChart, Line, XAxis, YAxis } from 'recharts';
// const data =[{time: 5, uv: 400, pv: 200},
//             {time: 10, uv: 300, pv: 150},
//             {time: 20, uv: 100, pv: 400}];

// function App() {
//   return (
//     <div>
//     <LineChart width={800} height={800} data={data} margin={{ top: 100, right: 20, bottom: 5, left:40}}>
//       <Line type="monotone" dataKey="uv" stroke="#8884d8" />
//       <Line type="monotone" dataKey="pv" stroke="#8884d8" />
//       <XAxis dataKey="time" />
//       <YAxis/>
//     </LineChart>
//     </div>
// )
//   }

// export default App;