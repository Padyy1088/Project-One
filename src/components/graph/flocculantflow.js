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
        {time: "0 mins ago",  FlocculantFlow: FlocculantFlow[0]},
        {time: "5 mins ago",  FlocculantFlow: FlocculantFlow[1]},
        {time: "15 mins ago",  FlocculantFlow: FlocculantFlow[2]},
        {time: "25 mins ago",  FlocculantFlow: FlocculantFlow[3]},
        {time: "35 mins ago",  FlocculantFlow: FlocculantFlow[4]},
        {time: "45 mins ago",  FlocculantFlow: FlocculantFlow[5]},
        {time: "55 mins ago", FlocculantFlow: FlocculantFlow[6]}];
            
    
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