
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
  
function UnderflowFlowGraph({pdata}) {

    return (
            <div>
            <label className="label" style={{color: "white"}}><b>UNDERFLOW FLOW RATE</b></label>
            <br /><space style={{color: "#3A3B3B"}}>.</space>
            <Box>
            <LineChart width={1125} height={343} data={pdata} margin={{ top: 10, right: 20, bottom: 1, left:-30}}>            <CartesianGrid strokeDasharray="0.1 1" />
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