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
import { Container } from '@mui/material';
  
const url ="https://reference.intellisense.io/thickenernn/v1/referencia"


function UnderflowGraph() {

    const[Underflow,setUnderflow] = useState([])
    const getUnderflow = async () => {
    const {data} =  await axios.get(url)
    
    setUnderflow(data.current.data.TK1.TK1_Underflow_Percent_Solids.values)
    
    }     
    useEffect(() => {
        getUnderflow();
        }, []);         

    
    const pdata =[
        {place:46,time: "0min", Underflow: Underflow[0]},
        {place:46,time: "5min", Underflow: Underflow[1]},
        {place:46,time: "15min", Underflow: Underflow[2]},
        {place:46,time: "25min", Underflow: Underflow[3]},
        {place:46,time: "35min", Underflow: Underflow[4]},
        {place:46,time: "45min", Underflow: Underflow[5]},
        {place:47,time: "55min", Underflow: Underflow[6]}]
            
    
    return (
            <div>
            <label className="label" style={{color: "grey"}}><b>UNDERFLOW</b></label>
            <br /><space style={{color: "#3A3B3B"}}>.</space>
            <Box style={{backgroundColor: '#3A3B3B'}}>
            <LineChart width={1125} height={500} data={pdata} margin={{ top: 10, right: 20, bottom: 130, left:-30}}>
            <CartesianGrid strokeDasharray="0.1 1" />
            <XAxis dataKey="time"/>
            <YAxis type="number" domain={[45, 46]}/>
            <Tooltip/>
              <Line type="monotone" dataKey="Underflow" strokeWidth={5} stroke="red" activeDot={{r: 8}}/>
            </LineChart>
            </Box>
            </div>
        )
    }
export default UnderflowGraph;