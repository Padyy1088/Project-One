
import Table from '@mui/material/Table';
import { Box } from '@mui/system';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './elements/Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

export default function BasicTable({underflow,bedpressure,underflowflow,flocculantflow,feedflow,feedpercent}) {

  return (
    <div className="box">
        <label className="label" style={{color: "grey"}}>
            <b>
                NOW
            </b>        
        </label>
        <br />
        <span style={{color: "#3A3B3B"}}>
            .
        </span>
        <Box>
        <TableContainer component={Paper}  style={{backgroundColor: '#242525', width: 'auto', height: 'auto'}}>
        <Table sx={{ minWidth: 525 }} aria-label="simple table">
            <TableHead>
            <TableRow className="TableRowBody0">
                <TableCell style={{color: 'white', fontSize: 20}}>
                    <span style={{color: 'red'}}>
                    <FontAwesomeIcon icon={faDatabase} /> {''} 
                    </span>
                    <b>
                        Underflow Percent Solids
                    </b> 
                </TableCell>
                <TableCell style={{color: 'white', fontSize: 20}} align="right">
                    <b>
                        {underflow}
                    </b>
                </TableCell>
            </TableRow>
            <TableRow className="TableRowBody0">
                <TableCell style={{color: 'white', fontSize: 20}}>
                    <span style={{color: 'yellow'}}>
                    <FontAwesomeIcon icon={faDatabase} /> {''}
                    </span>
                    <b>
                         Bed Pressure
                    </b>
                </TableCell>
                <TableCell style={{color: 'white', fontSize: 20}} align="right">
                    <b>
                        {bedpressure}
                    </b>
                </TableCell>
            </TableRow>
            <TableRow className="TableRowBody0">
                <TableCell style={{color: 'white', fontSize: 20}}>
                    <span style={{color: 'purple'}}>
                    <FontAwesomeIcon icon={faDatabase} /> {''}
                        </span>
                    <b>
                         Underflow Flow Rate
                    </b>
                </TableCell>
                <TableCell style={{color: 'white', fontSize: 20}} align="right">
                    <b>
                        {underflowflow}
                    </b>
                </TableCell>
            </TableRow>
            <TableRow className="TableRowBody0"> 
                <TableCell style={{color: 'white', fontSize: 20}}>
                    <span style={{color: 'orange'}}>
                    <FontAwesomeIcon icon={faDatabase} /> {''}
                    </span>
                    <b>
                         Flocculant Flow Rate
                    </b>
                </TableCell>
                <TableCell style={{color: 'white', fontSize: 20}} align="right">
                    <b>
                        {flocculantflow}
                    </b>
                </TableCell>
            </TableRow>
            <TableRow className="TableRowBody0">
                <TableCell style={{color: 'white', fontSize: 20}}>
                    <span style={{color: 'green'}}>
                    <FontAwesomeIcon icon={faDatabase} /> {''}
                    </span>
                    <b>
                         Feed Flow Rate
                    </b>
                </TableCell>
                <TableCell style={{color: 'white', fontSize: 20}} align="right">
                    <b>
                        {feedflow}
                    </b>
                </TableCell>
            </TableRow>
            <TableRow className="TableRowBody0">
                <TableCell style={{color: 'white', fontSize: 20}}>
                    <span style={{color: 'blue'}}>
                    <FontAwesomeIcon icon={faDatabase} /> {''}
                    </span>
                    <b>
                         Feed Percent Solids
                    </b>
                </TableCell>
                <TableCell style={{color: 'white', fontSize: 20}} align="right">
                    <b>
                        {feedpercent}
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