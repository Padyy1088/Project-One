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


function BedPressureGraph() {

 
    const[BedPressure,setBedPressure] = useState([])
    const getBedPressure = async () => {
    const {data} =  await axios.get(url)
   
    setBedPressure(data.current.data.TK1.TK1_Bed_Pressure.values)
    } 
     
    useEffect(() => {
        getBedPressure();
        }, []);         

    
    const pdata =[
        {time: "0 mins ago", BedPressure: BedPressure[0]},
        {time: "5 mins ago", BedPressure: BedPressure[1]},
        {time: "15 mins ago", BedPressure: BedPressure[2]},
        {time: "25 mins ago", BedPressure: BedPressure[3]},
        {time: "35 mins ago", BedPressure: BedPressure[4]},
        {time: "45 mins ago", BedPressure: BedPressure[5]},
        {time: "55 mins ago", BedPressure: BedPressure[6]}];
            
    
    return (
            <div>
            <label className="label" style={{color: "grey"}}><b>BED PRESSURE</b></label>
            <br /><space style={{color: "#3A3B3B"}}>.</space>
            <Box style={{backgroundColor: '#3A3B3B'}}>
            <LineChart width={1125} height={500} data={pdata} margin={{ top: 10, right: 20, bottom: 130, left:-30}}>
            <CartesianGrid strokeDasharray="0.1 1" />
            <XAxis dataKey="time"/>
            <YAxis type="number" domain={[44, 45]}/>
            <Tooltip/>
              <Line type="monotone" dataKey="BedPressure" strokeWidth={5} stroke="yellow" activeDot={{r: 8}}/>
            </LineChart>
            </Box>
            </div>
        )
    }
export default BedPressureGraph;