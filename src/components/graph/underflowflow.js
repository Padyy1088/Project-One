import {useState, useEffect }from 'react';
import axios from 'axios'
import './elements/graph.css'
import { Box } from '@mui/system';
import {
    LineChart,
    Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
  
const url ="https://reference.intellisense.io/thickenernn/v1/referencia"


function UnderflowFlowGraph() {

    const[UnderflowFlow,setUnderflowFlow] = useState([])
    const getUnderflowFlow = async () => {
    const {data} =  await axios.get(url)
    
    setUnderflowFlow(data.current.data.TK1.TK1_Underflow_Flow_Rate.values)
    }        

    useEffect(() => {
        getUnderflowFlow();
        }, []);         

    
    const pdata =[
        {time: "0 mins ago",  UnderflowFlow: UnderflowFlow[0]},
        {time: "5 mins ago",  UnderflowFlow: UnderflowFlow[1]},
        {time: "15 mins ago",  UnderflowFlow: UnderflowFlow[2]},
        {time: "25 mins ago",  UnderflowFlow: UnderflowFlow[3]},
        {time: "35 mins ago",  UnderflowFlow: UnderflowFlow[4]},
        {time: "45 mins ago", UnderflowFlow: UnderflowFlow[5]},
        {time: "55 mins ago", UnderflowFlow: UnderflowFlow[6]}];
            
    
    return (
            <div>
            <label className="label" style={{color: "grey"}}><b>UNDERFLOW FLOW RATE</b></label>
            <br /><space style={{color: "#3A3B3B"}}>.</space>
            <Box style={{backgroundColor: '#3A3B3B'}}>
            <LineChart width={1125} height={500} data={pdata} margin={{ top: 10, right: 20, bottom: 130, left:-30}}>
            <CartesianGrid strokeDasharray="0.1 1" />
            <XAxis dataKey="time"/>
            <YAxis type="number" domain={[4.4, 5.7]}/>
            <Tooltip/>
              <Line type="monotone" dataKey="UnderflowFlow" strokeWidth={5} stroke="purple" activeDot={{r: 8}}/>
            </LineChart>
            </Box>
            </div>
        )
    }
export default UnderflowFlowGraph;