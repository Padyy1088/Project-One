import {useState, useEffect }from 'react';
import axios from 'axios'
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
import Chart from 'chart.js/auto';
  
const url ="https://reference.intellisense.io/thickenernn/v1/referencia"


function Graph() {

    const[Underflow,setUnderflow] = useState([])
    const getUnderflow = async () => {
    const {data} =  await axios.get(url)
    const results = data.current.data.TK1.TK1_Underflow_Percent_Solids
    setUnderflow(data.current.data.TK1.TK1_Underflow_Percent_Solids.values[0])
    
    }
    useEffect(() => {
        getUnderflow();
        console.log(`this is in the underflow.${Underflow}`);
        }, []);
    


    const[BedPressure,setBedPressure] = useState([])
    const getBedPressure = async () => {
    const {data} =  await axios.get(url)
    const results = data.current.data.TK1.TK1_Bed_Pressure
    setBedPressure(data.current.data.TK1.TK1_Bed_Pressure.values[0])
    } 
    useEffect(() => {
        getBedPressure();
        }, []);



    const[FlocculantFlow,setFlocculantFlow] = useState([])
    const getFlocculantFlow = async () => {
        const {data} =  await axios.get(url)
        const results = data.current.data.TK1.TK1_Flocculant_Flow_Rate
        setFlocculantFlow(data.current.data.TK1.TK1_Flocculant_Flow_Rate.values[0])
        }      
        useEffect(() => {
            getFlocculantFlow();
            }, []);



    const[UnderflowFlow,setUnderflowFlow] = useState([])
    const getUnderflowFlow = async () => {
    const {data} =  await axios.get(url)
    const results = data.current.data.TK1.TK1_Underflow_Flow_Rate
    setUnderflowFlow(data.current.data.TK1.TK1_Underflow_Flow_Rate.values[0])
    }        
        useEffect(() => {
            getUnderflowFlow();
            }, []);


    const[FeedFlow,setFeedFlow] = useState([])
    const getFeedFlow = async () => {
    const {data} =  await axios.get(url)
    const results = data.current.data.TK1.TK1_Feed_Flow_Rate
    setFeedFlow(data.current.data.TK1.TK1_Feed_Flow_Rate.values[0])
    }        
        useEffect(() => {
            getFeedFlow();
            }, []);
    

    const[FeedPercent,setFeedPercent] = useState([])
    const getFeedPercent = async () => {
    const {data} =  await axios.get(url)
    const results = data.current.data.TK1.TK1_Feed_Percent_Solids
    setFeedPercent(data.current.data.TK1.TK1_Feed_Percent_Solids.values[0])
    }        
        useEffect(() => {
            getFeedPercent();
            }, []);        



    const pdata = [
        {
            name: 'Underflow Percent Solids',
            value: Underflow,
            time: 0,
        },
        {
            name: 'Bed Pressure',
            value: BedPressure,
            time: 5,
        },
        {
            name: 'Underflow Flow Rate',
            value: UnderflowFlow,
            time: 15,
        },
        {
            name: 'Flocculant Flow Rate',
            value: FlocculantFlow,
            time: 25,
        },
        {
            name: 'Feed Flow Rate',
            value: FeedFlow,
            time: 35,
        },
        {
            name: 'Feed Percent Solids',
            value: FeedPercent,
            time: 45,
        },
    ];
    
    return (
        <>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Line dataKey="name"
                        stroke="black" activeDot={{ r: 8 }} />
                    <Line dataKey="value"
                        stroke="red" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
    
export default Graph;