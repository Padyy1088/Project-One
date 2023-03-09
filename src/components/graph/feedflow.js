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
        {time: "0 mins ago", FeedFlow: FeedFlow[0]},
        {time: "5 mins ago", FeedFlow: FeedFlow[1]},
        {time: "15 mins ago",  FeedFlow: FeedFlow[2]},
        {time: "25 mins ago",  FeedFlow: FeedFlow[3]},
        {time: "35 mins ago",  FeedFlow: FeedFlow[4]},
        {time: "45 mins ago", FeedFlow: FeedFlow[5]},
        {time: "55 mins ago", FeedFlow: FeedFlow[6]}];
            
    
    return (
            <div>
            <label className="label" style={{color: "grey"}}><b>FEED FLOW RATE</b></label>
            <br /><space style={{color: "#3A3B3B"}}>.</space>
            <Box style={{backgroundColor: '#3A3B3B'}}>
            <LineChart width={1125} height={500} data={pdata} margin={{ top: 10, right: 20, bottom: 130, left:-30}}>
            <CartesianGrid strokeDasharray="0.1 1" />
            <XAxis dataKey="time"/>
            <YAxis type="FeedFlow"/>
            <Tooltip/>
              <Line type="monotone" dataKey="FeedFlow" strokeWidth={5} stroke="green" activeDot={{r: 8}}/>
            </LineChart>
            </Box>
            </div>
        )
    }
export default FeedFlowGraph;