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

function Graph({pdata}) {

    return (
            <div className="box">
            <label className="label" style={{color: "grey"}}><b>BEFORE</b></label>
            <br /><space style={{color: "#242525"}}>.</space>
            <Box>
            <LineChart width={600} height={343} data={pdata} margin={{ top: 10, right: 20, bottom: 0, left:-30}}>
            <CartesianGrid strokeDasharray="0.1 1" />
            <XAxis dataKey="time"/>
            <YAxis type="number" domain={[0, 49]}/>
            <Tooltip/>
              <Line type="monotone" dataKey="Underflow" stroke="red"  activeDot={{r: 8}}/>
              <Line type="monotone" dataKey="BedPressure" stroke="yellow" activeDot={{r: 8}}/>
              <Line type="monotone" dataKey="FlocculantFlow" stroke="orange" activeDot={{r: 8}}/>
              <Line type="monotone" dataKey="UnderflowFlow" stroke="purple" activeDot={{r: 8}}/>
              <Line type="monotone" dataKey="FeedFlow" stroke="green" activeDot={{r: 8}}/>
              <Line type="monotone" dataKey="FeedPercent" stroke="blue" activeDot={{r: 8}}/>
            </LineChart>
            </Box>
            </div>
        )
    }
export default Graph;

