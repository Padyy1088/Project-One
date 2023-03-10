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


function Graph() {

    const[Underflow,setUnderflow] = useState([])
    const getUnderflow = async () => {
    const {data} =  await axios.get(url)
    
    setUnderflow(data.current.data.TK1.TK1_Underflow_Percent_Solids.values)
    
    }

    const[BedPressure,setBedPressure] = useState([])
    const getBedPressure = async () => {
    const {data} =  await axios.get(url)
   
    setBedPressure(data.current.data.TK1.TK1_Bed_Pressure.values)
    } 
    
    const[FlocculantFlow,setFlocculantFlow] = useState([])
    const getFlocculantFlow = async () => {
    const {data} =  await axios.get(url)
       
    setFlocculantFlow(data.current.data.TK1.TK1_Flocculant_Flow_Rate.values)
    }      
        
    const[UnderflowFlow,setUnderflowFlow] = useState([])
    const getUnderflowFlow = async () => {
    const {data} =  await axios.get(url)
    
    setUnderflowFlow(data.current.data.TK1.TK1_Underflow_Flow_Rate.values)
    }        
        
    const[FeedFlow,setFeedFlow] = useState([])
    const getFeedFlow = async () => {
    const {data} =  await axios.get(url)
    
    setFeedFlow(data.current.data.TK1.TK1_Feed_Flow_Rate.values)
    }        
        
    const[FeedPercent,setFeedPercent] = useState([])
    const getFeedPercent = async () => {
    const {data} =  await axios.get(url)
    
    setFeedPercent(data.current.data.TK1.TK1_Feed_Percent_Solids.values)
    }  

    useEffect(() => {
        getFeedFlow();
        getFeedPercent();
        getUnderflowFlow();
        getFlocculantFlow();
        getBedPressure();
        getUnderflow();
        }, []);         

    const pdata =[
        {time: "0 mins ago", Underflow: Underflow[0], BedPressure: BedPressure[0], FlocculantFlow: FlocculantFlow[0], UnderflowFlow: UnderflowFlow[0], FeedFlow: FeedFlow[0], FeedPercent: FeedPercent[0]},
        {time: "5 mins ago", Underflow: Underflow[1], BedPressure: BedPressure[1], FlocculantFlow: FlocculantFlow[1], UnderflowFlow: UnderflowFlow[1], FeedFlow: FeedFlow[1], FeedPercent: FeedPercent[1]},
        {time: "15 mins ago", Underflow: Underflow[2], BedPressure: BedPressure[2], FlocculantFlow: FlocculantFlow[2], UnderflowFlow: UnderflowFlow[2], FeedFlow: FeedFlow[2], FeedPercent: FeedPercent[2]},
        {time: "25 mins ago", Underflow: Underflow[3], BedPressure: BedPressure[3], FlocculantFlow: FlocculantFlow[3], UnderflowFlow: UnderflowFlow[3], FeedFlow: FeedFlow[3], FeedPercent: FeedPercent[3]},
        {time: "35 mins ago", Underflow: Underflow[4], BedPressure: BedPressure[4], FlocculantFlow: FlocculantFlow[4], UnderflowFlow: UnderflowFlow[4], FeedFlow: FeedFlow[4], FeedPercent: FeedPercent[4]},
        {time: "45 mins ago", Underflow: Underflow[5], BedPressure: BedPressure[5], FlocculantFlow: FlocculantFlow[5], UnderflowFlow: UnderflowFlow[5], FeedFlow: FeedFlow[5], FeedPercent: FeedPercent[5]},
        {time: "55 mins ago", Underflow: Underflow[6], BedPressure: BedPressure[6], FlocculantFlow: FlocculantFlow[6], UnderflowFlow: UnderflowFlow[6], FeedFlow: FeedFlow[6], FeedPercent: FeedPercent[6]}];
            
    
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