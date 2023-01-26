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


function FeedFlowGraph() {


    const[FeedFlow,setFeedFlow] = useState([])
    const getFeedFlow = async () => {
    const {data} =  await axios.get(url)
    
    setFeedFlow(data.current.data.TK1.TK1_Feed_Flow_Rate.values)
    }        
     
    useEffect(() => {
        getFeedFlow();
        }, []);         

    
    const pdata =[
        {place:0,time: "0min", FeedFlow: FeedFlow[0]},
        {place:0,time: "5min", FeedFlow: FeedFlow[1]},
        {place:0,time: "15min",  FeedFlow: FeedFlow[2]},
        {place:0,time: "25min",  FeedFlow: FeedFlow[3]},
        {place:0,time: "35min",  FeedFlow: FeedFlow[4]},
        {place:0,time: "45min", FeedFlow: FeedFlow[5]},
        {place:48,time: "55min", FeedFlow: FeedFlow[6]}];
            
    
    return (
            <div>
            <label className="label" style={{color: "grey"}}><b>FEED FLOW RATE</b></label>
            <br /><space style={{color: "#3A3B3B"}}>.</space>
            <Box style={{backgroundColor: '#3A3B3B'}}>
            <LineChart width={1125} height={500} data={pdata} margin={{ top: 10, right: 20, bottom: 130, left:-30}}>
            <CartesianGrid strokeDasharray="0.1 1" />
            <XAxis dataKey="time"/>
            <YAxis type="number" domain={[47, 47.20]}/>
            <Tooltip/>
              <Line type="monotone" dataKey="FeedFlow" strokeWidth={5} stroke="green" activeDot={{r: 8}}/>
            </LineChart>
            </Box>
            </div>
        )
    }
export default FeedFlowGraph;