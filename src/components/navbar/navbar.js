import * as React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import {useState, useEffect }from 'react';
import axios from 'axios'
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import FullGraph from '../graph/fullgraph';
import { a11yProps } from '../navbar/a11yProps';
import { TabPanel } from './TabPanel';
import UnderflowGraph from '../graph/underflow';
import BedPressureGraph from '../graph/bedpressure';
import UnderflowFlowGraph from '../graph/underflowflow';
import FlocculantFlowGraph from '../graph/flocculantflow';
import FeedFlowGraph from '../graph/feedflow';
import FeedPercentGraph from '../graph/feedpercent';
import { CssBaseline } from '@mui/material';
import MainUI from '../main/main';

const url ="https://reference.intellisense.io/thickenernn/v1/referencia"

export function BasicTabs() {
  
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    
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
      <div className="Panel">
        <React.Fragment>
          <CssBaseline />
          <Container >
          <div>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'container' }}>
              </Box>
              <Box sx={{ borderBottom: 1, borderColor: 'container' }}>
                <Tabs className="tabs" textColor="white"value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="All" value="/home" to="/" component={Link} {...a11yProps(0)} />
                  <Tab label="Underflow" value="/underflow" to="/underflow" component={Link} {...a11yProps(1)} />
                  <Tab label="Bed Pressure" value="/bedpressure" to="/bedpressure" component={Link}{...a11yProps(2)} />
                  <Tab label="Underflow Flow" value="/underflowflow" to="/underflowflow" component={Link}{...a11yProps(3)} />
                  <Tab label="Flocculant Flow" value="/flocculantflow" to="/flocculantflow" component={Link}{...a11yProps(4)} />
                  <Tab label="Feed Flow" value="/feedflow" to="/feedflow" component={Link}{...a11yProps(5)} />
                  <Tab label="Feed Percent" value="/feedpercent" to="/feedpercent" component={Link}{...a11yProps(6)} />
                  <Tab label="Full size Graph" value="/fullgraph" to="/fullgraph" component={Link}{...a11yProps(7)} />
                </Tabs>
              </Box>
              <TabPanel>
              <Box sx={{ borderBottom: 0, borderColor: 'container' }}>
              <Switch>
                <Route path="/" exact>
                  <MainUI pdata={pdata} underflow={Underflow[0]} bedpressure={BedPressure[0]} underflowflow={UnderflowFlow[0]} flocculantflow={FlocculantFlow[0]} feedflow={FeedFlow[0]} feedpercent={FeedPercent[0]}/>
                  {/* <ErrorMSG/> */}
                </Route>
                <Route path="/underflow">
                  <UnderflowGraph pdata={pdata}/>
                </Route>
                <Route path="/bedpressure">
                  <BedPressureGraph pdata={pdata}/>
                </Route>
                <Route path="/underflowflow">
                  <UnderflowFlowGraph pdata={pdata}/>
                </Route>
                <Route path="/flocculantflow">
                  <FlocculantFlowGraph pdata={pdata}/>
                </Route>
                <Route path="/feedflow">
                  <FeedFlowGraph pdata={pdata}/>
                </Route>
                <Route path="/feedpercent">
                  <FeedPercentGraph pdata={pdata}/>
                </Route>
                <Route path="/fullgraph">
                  <FullGraph pdata={pdata}/>
                </Route>
              </Switch>
              </Box >
              </TabPanel>
            </Box>
          </div>
          </Container>
        </React.Fragment>
      </div>
    );
  }