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

function FeedFlowGraph({pdata}) {

    return (
            <div>
            <label className="label" style={{color: "grey"}}><b>FEED FLOW RATE</b></label>
            <br /><space style={{color: "#3A3B3B"}}>.</space>
            <Box>
            <LineChart width={1125} height={343} data={pdata} margin={{ top: 10, right: 20, bottom: 1, left:-30}}>            <CartesianGrid strokeDasharray="0.1 1" />
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