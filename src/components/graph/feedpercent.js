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


function FeedPercentGraph() {

    const[FeedPercent,setFeedPercent] = useState([])
    const getFeedPercent = async () => {
    const {data} =  await axios.get(url)
    
    setFeedPercent(data.current.data.TK1.TK1_Feed_Percent_Solids.values)
    }        
    useEffect(() => {
        getFeedPercent();
        }, []);         

    
    const pdata =[
        {time: "0 mins ago", FeedPercent: FeedPercent[0]},
        {time: "5 mins ago", FeedPercent: FeedPercent[1]},
        {time: "15 mins ago", FeedPercent: FeedPercent[2]},
        {time: "25 mins ago", FeedPercent: FeedPercent[3]},
        {time: "35 mins ago", FeedPercent: FeedPercent[4]},
        {time: "45 mins ago", FeedPercent: FeedPercent[5]},
        {time: "55 mins ago", FeedPercent: FeedPercent[6]}];
            
    
    return (
            <div>
            <label className="label" style={{color: "grey"}}><b>FEED PERCENT</b></label>
            <br /><space style={{color: "#3A3B3B"}}>.</space>
            <Box style={{backgroundColor: '#3A3B3B'}}>
            <LineChart width={1125} height={500} data={pdata} margin={{ top: 10, right: 20, bottom: 130, left:-30}}>
            <CartesianGrid strokeDasharray="0.1 1" />
            <XAxis dataKey="time"/>
            <YAxis dataKey="FeedPercent"/>
            <Tooltip/>
              <Line type="monotone" dataKey="FeedPercent" strokeWidth={5} stroke="blue" activeDot={{r: 8}}/>
            </LineChart>
            </Box>
            </div>
        )
    }
export default FeedPercentGraph;