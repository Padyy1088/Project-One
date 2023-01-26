import {useState, useEffect }from 'react';
import axios from 'axios'
import Table from '@mui/material/Table';
import { Box } from '@mui/system';
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
    const[BedPressure,setBedPressure] = useState([])
    const getBedPressure = async () => {
    const {data} =  await axios.get(url)
    const results = data.current.data.TK1.TK1_Bed_Pressure
    setBedPressure(data.current.data.TK1.TK1_Bed_Pressure.values[0])
    } 
    const[FlocculantFlow,setFlocculantFlow] = useState([])
    const getFlocculantFlow = async () => {
    const {data} =  await axios.get(url)
    const results = data.current.data.TK1.TK1_Flocculant_Flow_Rate
    setFlocculantFlow(data.current.data.TK1.TK1_Flocculant_Flow_Rate.values[0])
    }      
    const[UnderflowFlow,setUnderflowFlow] = useState([])
    const getUnderflowFlow = async () => {
    const {data} =  await axios.get(url)
    const results = data.current.data.TK1.TK1_Underflow_Flow_Rate
    setUnderflowFlow(data.current.data.TK1.TK1_Underflow_Flow_Rate.values[0])
    }        
    const[FeedFlow,setFeedFlow] = useState([])
    const getFeedFlow = async () => {
    const {data} =  await axios.get(url)
    const results = data.current.data.TK1.TK1_Feed_Flow_Rate
    setFeedFlow(data.current.data.TK1.TK1_Feed_Flow_Rate.values[0])
    }        
    const[FeedPercent,setFeedPercent] = useState([])
    const getFeedPercent = async () => {
    const {data} =  await axios.get(url)
    const results = data.current.data.TK1.TK1_Feed_Percent_Solids
    setFeedPercent(data.current.data.TK1.TK1_Feed_Percent_Solids.values[0])
    }        
    useEffect(() => {
        getFeedFlow();
        getFeedPercent();
        getUnderflowFlow();
        getFlocculantFlow();
        getBedPressure();
        getUnderflow();
        }, []);        


  return (
    <div>
        <label className="label" style={{color: "grey"}}>
            <b>
                NOW
            </b>
        </label>
        <br />
        <space style={{color: "#3A3B3B"}}>
            .
        </space>
        <Box>
        <TableContainer component={Paper}  style={{backgroundColor: '#3A3B3B', width: 'auto', height: 'auto'}}>
        <Table sx={{ minWidth: 525 }} aria-label="simple table">
            <TableHead>
            <TableRow className="TableRowBody0">
                <TableCell style={{color: 'grey', fontSize: 20}}>
                    <point style={{color: 'red'}}>
                        •
                    </point>
                    <b>
                         Underflow Percent Solids
                    </b> 
                </TableCell>
                <TableCell style={{color: 'white', fontSize: 20}} align="right">
                    <b>
                        {Underflow}
                    </b>
                </TableCell>
            </TableRow>
            <TableRow className="TableRowBody0">
                <TableCell style={{color: 'grey', fontSize: 20}}>
                    <point style={{color: 'yellow'}}>
                        •
                    </point>
                    <b>
                         Bed Pressure
                    </b>
                </TableCell>
                <TableCell style={{color: 'white', fontSize: 20}} align="right">
                    <b>
                        {BedPressure}
                    </b>
                </TableCell>
            </TableRow>
            <TableRow className="TableRowBody0">
                <TableCell style={{color: 'grey', fontSize: 20}}>
                    <point style={{color: 'purple'}}>
                        •
                    </point>
                    <b>
                         Underflow Flow Rate
                    </b>
                </TableCell>
                <TableCell style={{color: 'white', fontSize: 20}} align="right">
                    <b>
                        {UnderflowFlow}
                    </b>
                </TableCell>
            </TableRow>
            <TableRow className="TableRowBody0"> 
                <TableCell style={{color: 'grey', fontSize: 20}}>
                    <point style={{color: 'orange'}}>
                        •
                    </point>
                    <b>
                         Flocculant Flow Rate
                    </b>
                </TableCell>
                <TableCell style={{color: 'white', fontSize: 20}} align="right">
                    <b>
                        {FlocculantFlow}
                    </b>
                </TableCell>
            </TableRow>
            <TableRow className="TableRowBody0">
                <TableCell style={{color: 'grey', fontSize: 20}}>
                    <point style={{color: 'green'}}>
                        •
                    </point>
                    <b>
                         Feed Flow Rate
                    </b>
                </TableCell>
                <TableCell style={{color: 'white', fontSize: 20}} align="right">
                    <b>
                        {FeedFlow}
                    </b>
                </TableCell>
            </TableRow>
            <TableRow className="TableRowBody0">
                <TableCell style={{color: 'grey', fontSize: 20}}>
                    <point style={{color: 'blue'}}>
                        •
                    </point>
                    <b>
                         Feed Percent Solids
                    </b>
                </TableCell>
                <TableCell style={{color: 'white', fontSize: 20}} align="right">
                    <b>
                        {FeedPercent}
                    </b>
                </TableCell>
            </TableRow>
            </TableHead>
        </Table>
        </TableContainer>
        </Box>
    </div>
  );
}