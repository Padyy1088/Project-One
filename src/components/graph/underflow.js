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
        {time: "0 mins ago", Underflow: Underflow[0]},
        {time: "5 mins ago", Underflow: Underflow[1]},
        {time: "15 mins ago", Underflow: Underflow[2]},
        {time: "25 mins ago", Underflow: Underflow[3]},
        {time: "35 mins ago", Underflow: Underflow[4]},
        {time: "45 mins ago", Underflow: Underflow[5]},
        {time: "55 mins ago", Underflow: Underflow[6]}]
            
    
    return (
            <div>
            <label className="label" style={{color: "grey"}}><b>UNDERFLOW</b></label>
            <br /><space style={{color: "#3A3B3B"}}>.</space>
            <Box>
            <LineChart width={1125} height={343} data={pdata} margin={{ top: 10, right: 20, bottom: 1, left:-30}}>
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