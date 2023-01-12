import {useState, useEffect }from 'react';
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './elements/Table.css'
const url = "https://reference.intellisense.io/thickenernn/v1/referencia"

export default function BasicTable() {

    const[Underflow,setUnderflow] = useState([])
    const getUnderflow = async () => {
    const {data} =  await axios.get(url)
    const results = data.current.data.TK1.TK1_Underflow_Percent_Solids
    setUnderflow(data.current.data.TK1.TK1_Underflow_Percent_Solids.values[0])
    }
    useEffect(() => {
        getUnderflow();
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


  return (
    <div className="Table">
        <TableContainer component={Paper} style={{backgroundColor: '#3A3B3B', width: '100%', height: 'auto'}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow className="TableRowBody0">
                <TableCell style={{color: 'white', fontSize: 20}}><point style={{color: 'red'}}>•</point> Underflow Percent Solids</TableCell>
                <TableCell style={{color: 'white', fontSize: 20}} align="right">{Underflow}</TableCell>
            </TableRow>
            <TableRow className="TableRowBody0">
                <TableCell style={{color: 'white', fontSize: 20}}><point style={{color: 'yellow'}}>•</point> Bed Pressure</TableCell>
                <TableCell style={{color: 'white', fontSize: 20}} align="right">{BedPressure}</TableCell>
            </TableRow>
            <TableRow className="TableRowBody0">
                <TableCell style={{color: 'white', fontSize: 20}}><point style={{color: 'purple'}}>•</point> Underflow Flow Rate</TableCell>
                <TableCell style={{color: 'white', fontSize: 20}} align="right">{UnderflowFlow}</TableCell>
            </TableRow>
            <TableRow className="TableRowBody0"> 
                <TableCell style={{color: 'white', fontSize: 20}}><point style={{color: 'orange'}}>•</point> Flocculant Flow Rate</TableCell>
                <TableCell style={{color: 'white', fontSize: 20}} align="right">{FlocculantFlow}</TableCell>
            </TableRow>
            <TableRow className="TableRowBody0">
                <TableCell style={{color: 'white', fontSize: 20}}><point style={{color: 'green'}}>•</point> Feed Flow Rate</TableCell>
                <TableCell style={{color: 'white', fontSize: 20}} align="right">{FeedFlow}</TableCell>
            </TableRow>
            <TableRow className="TableRowBody0">
                <TableCell style={{color: 'white', fontSize: 20}}><point style={{color: 'blue'}}>•</point> Feed Percent Solids</TableCell>
                <TableCell style={{color: 'white', fontSize: 20}} align="right">{FeedPercent}</TableCell>
            </TableRow>
            </TableHead>
        </Table>
        </TableContainer>
    </div>
  );
}
