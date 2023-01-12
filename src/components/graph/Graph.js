import {useState, useEffect }from 'react';
import axios from 'axios'
import {
    LineChart,
    ResponsiveContainer,
    Legend,
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
    const results = data.current.data.TK1.TK1_Underflow_Percent_Solids
    setUnderflow(data.current.data.TK1.TK1_Underflow_Percent_Solids.values)
    
    }
    useEffect(() => {
        getUnderflow();
        }, []);
    


    const[BedPressure,setBedPressure] = useState([])
    const getBedPressure = async () => {
    const {data} =  await axios.get(url)
    const results = data.current.data.TK1.TK1_Bed_Pressure
    setBedPressure(data.current.data.TK1.TK1_Bed_Pressure.values)
    } 
    useEffect(() => {
        getBedPressure();
        }, []);



    const[FlocculantFlow,setFlocculantFlow] = useState([])
    const getFlocculantFlow = async () => {
        const {data} =  await axios.get(url)
        const results = data.current.data.TK1.TK1_Flocculant_Flow_Rate
        setFlocculantFlow(data.current.data.TK1.TK1_Flocculant_Flow_Rate.values)
        }      
        useEffect(() => {
            getFlocculantFlow();
            }, []);



    const[UnderflowFlow,setUnderflowFlow] = useState([])
    const getUnderflowFlow = async () => {
    const {data} =  await axios.get(url)
    const results = data.current.data.TK1.TK1_Underflow_Flow_Rate
    setUnderflowFlow(data.current.data.TK1.TK1_Underflow_Flow_Rate.values)
    }        
        useEffect(() => {
            getUnderflowFlow();
            }, []);


    const[FeedFlow,setFeedFlow] = useState([])
    const getFeedFlow = async () => {
    const {data} =  await axios.get(url)
    const results = data.current.data.TK1.TK1_Feed_Flow_Rate
    setFeedFlow(data.current.data.TK1.TK1_Feed_Flow_Rate.values)
    }        
        useEffect(() => {
            getFeedFlow();
            }, []);
    

    const[FeedPercent,setFeedPercent] = useState([])
    const getFeedPercent = async () => {
    const {data} =  await axios.get(url)
    const results = data.current.data.TK1.TK1_Feed_Percent_Solids
    setFeedPercent(data.current.data.TK1.TK1_Feed_Percent_Solids.values)
    }        
        useEffect(() => {
            getFeedPercent();
            }, []);        


    const pdata =[
        {place:0,time: "0min", underFlow: Underflow[0], bedPressure: BedPressure[0], flocculantFlow: FlocculantFlow[0], underflowFlow: UnderflowFlow[0], feedFlow: FeedFlow[0], feedPercent: FeedPercent[0]},
        {place:0,time: "5min", underFlow: Underflow[1], bedPressure: BedPressure[1], flocculantFlow: FlocculantFlow[1], underflowFlow: UnderflowFlow[1], feedFlow: FeedFlow[1], feedPercent: FeedPercent[1]},
        {place:0,time: "15min", underFlow: Underflow[2], bedPressure: BedPressure[2], flocculantFlow: FlocculantFlow[2], underflowFlow: UnderflowFlow[2], feedFlow: FeedFlow[2], feedPercent: FeedPercent[2]},
        {place:0,time: "25min", underFlow: Underflow[3], bedPressure: BedPressure[3], flocculantFlow: FlocculantFlow[3], underflowFlow: UnderflowFlow[3], feedFlow: FeedFlow[3], feedPercent: FeedPercent[3]},
        {place:0,time: "35min", underFlow: Underflow[4], bedPressure: BedPressure[4], flocculantFlow: FlocculantFlow[4], underflowFlow: UnderflowFlow[4], feedFlow: FeedFlow[4], feedPercent: FeedPercent[4]},
        {place:0,time: "45min", underFlow: Underflow[5], bedPressure: BedPressure[5], flocculantFlow: FlocculantFlow[5], underflowFlow: UnderflowFlow[5], feedFlow: FeedFlow[5], feedPercent: FeedPercent[5]},
        {place:48,time: "55min", underFlow: Underflow[6], bedPressure: BedPressure[6], flocculantFlow: FlocculantFlow[6], underflowFlow: UnderflowFlow[6], feedFlow: FeedFlow[6], feedPercent: FeedPercent[6]}];
            
    
    return (
            <div>
            <LineChart width={800} height={500} data={pdata} margin={{ top: 100, right: 20, bottom: 5, left:40}}>
            <CartesianGrid strokeDasharray="3 0" />
            <XAxis dataKey="time"/>
            <YAxis dataKey="place"/>
            <Tooltip/>
              <Line type="monotone" dataKey="underFlow" stroke="red"/>
              <Line type="monotone" dataKey="bedPressure" stroke="yellow" />
              <Line type="monotone" dataKey="flocculantFlow" stroke="orange" />
              <Line type="monotone" dataKey="underflowFlow" stroke="purple" />
              <Line type="monotone" dataKey="feedFlow" stroke="green" />
              <Line type="monotone" dataKey="feedPercent" stroke="blue" />
              
            </LineChart>
            </div>
        )
    }
export default Graph;