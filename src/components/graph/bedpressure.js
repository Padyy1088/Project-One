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
        {place:0,time: "0min", BedPressure: BedPressure[0]},
        {place:0,time: "5min", BedPressure: BedPressure[1]},
        {place:0,time: "15min", BedPressure: BedPressure[2]},
        {place:0,time: "25min", BedPressure: BedPressure[3]},
        {place:0,time: "35min", BedPressure: BedPressure[4]},
        {place:0,time: "45min", BedPressure: BedPressure[5]},
        {place:48,time: "55min", BedPressure: BedPressure[6]}];
            
    
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