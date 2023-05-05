import './elements/graph.css'
import { Box } from '@mui/system';
import {
    LineChart,
    Tooltip,
    Legend,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

function Graph({pdata}) {

    return (
            <div>
            <label className="label" style={{color: "grey"}}><b>FULL GRAPH WITH LEGENDS</b></label>
            <br /><space style={{color: "#3A3B3B"}}>.</space>
            <Box>
            <LineChart width={1125} height={343} data={pdata} margin={{ top: 10, right: 20, bottom: 1, left:-30}}>            <CartesianGrid strokeDasharray="0.1 1" />
            <XAxis dataKey="time"/>
            <YAxis type="number" domain={[0, 49]}/>
            <Tooltip/>
              <Line type="monotone" dataKey="Underflow" stroke="red" activeDot={{r: 8}}/>
              <Line type="monotone" dataKey="BedPressure" stroke="yellow" activeDot={{r: 8}}/>
              <Line type="monotone" dataKey="FlocculantFlow" stroke="orange" activeDot={{r: 8}}/>
              <Line type="monotone" dataKey="UnderflowFlow" stroke="purple" activeDot={{r: 8}}/>
              <Line type="monotone" dataKey="FeedFlow" stroke="green" activeDot={{r: 8}}/>
              <Line type="monotone" dataKey="FeedPercent" stroke="blue" activeDot={{r: 8}}/>
              <Legend />
            </LineChart>
            </Box>
            </div>
        )
    }
export default Graph;