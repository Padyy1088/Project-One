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


function FlocculantFlowGraph() {


    const[FlocculantFlow,setFlocculantFlow] = useState([])
    const getFlocculantFlow = async () => {
        const {data} =  await axios.get(url)
       
        setFlocculantFlow(data.current.data.TK1.TK1_Flocculant_Flow_Rate.values)
        }      
          
    useEffect(() => {
        getFlocculantFlow();
        }, []);         

    
    const pdata =[
        {place:0,time: "0min",  FlocculantFlow: FlocculantFlow[0]},
        {place:0,time: "5min",  FlocculantFlow: FlocculantFlow[1]},
        {place:0,time: "15min",  FlocculantFlow: FlocculantFlow[2]},
        {place:0,time: "25min",  FlocculantFlow: FlocculantFlow[3]},
        {place:0,time: "35min",  FlocculantFlow: FlocculantFlow[4]},
        {place:0,time: "45min",  FlocculantFlow: FlocculantFlow[5]},
        {place:3,time: "55min", FlocculantFlow: FlocculantFlow[6]}];
            
    
    return (
            <div>
            <label className="label" style={{color: "grey"}}><b>FLOCCULANT FLOW RATE</b></label>
            <br /><space style={{color: "#3A3B3B"}}>.</space>
            <Box style={{backgroundColor: '#3A3B3B'}}>
            <LineChart width={1125} height={500} data={pdata} margin={{ top: 10, right: 20, bottom: 130, left:-30}}>
            <CartesianGrid strokeDasharray="0.1 1" />
            <XAxis dataKey="time"/>
            <YAxis type="number" domain={[1.2, 1.3]}/>
            <Tooltip/>
              <Line type="monotone" dataKey="FlocculantFlow" strokeWidth={5} stroke="orange" activeDot={{r: 8}}/>
            </LineChart>
            </Box>
            </div>
        )
    }
export default FlocculantFlowGraph;