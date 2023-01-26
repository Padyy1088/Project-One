import * as React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import BasicTable from '../table/Table';
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

export function BasicTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    return (
      <div className="Panel">
        <React.Fragment>
          <CssBaseline />
          <Container >
          <div className="Color">
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'container' }}>
              </Box>
              <Box sx={{ borderBottom: 1, borderColor: 'container' }}>
                <Tabs textColor="white"value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="All" {...a11yProps(0)} />
                  <Tab label="Underflow" {...a11yProps(1)} />
                  <Tab label="Bed Pressure" {...a11yProps(2)} />
                  <Tab label="Underflow Flow" {...a11yProps(3)} />
                  <Tab label="Flocculant Flow" {...a11yProps(4)} />
                  <Tab label="Feed Flow"{...a11yProps(5)} />
                  <Tab label="Feed Percent"{...a11yProps(6)} />
                  <Tab label="Full size Graph"{...a11yProps(7)} />
                </Tabs>
              </Box>
              <BrowserRouter>
              <TabPanel value={value} index={0}>
              <Box sx={{ borderBottom: 0, borderColor: 'container' }}>
              <MainUI/>
              </Box >
              </TabPanel>
              <TabPanel value={value} index={1}>
              <Box sx={{ borderBottom: 1, borderColor: 'container' }}>
                <UnderflowGraph />
                <br />
              </Box >
              </TabPanel>
              <TabPanel value={value} index={2}>
              <Box sx={{ borderBottom: 1, borderColor: 'container' }}>
                <BedPressureGraph />
                <br />
              </Box >
              </TabPanel>
              <TabPanel value={value} index={3}>
              <Box sx={{ borderBottom: 1, borderColor: 'container' }}>
                <UnderflowFlowGraph />
                <br />
              </Box >
              </TabPanel>
              <TabPanel value={value} index={4}>
              <Box sx={{ borderBottom: 1, borderColor: 'container' }}>
                <FlocculantFlowGraph />
                <br />
              </Box >
              </TabPanel>
              <TabPanel value={value} index={5}>
              <Box sx={{ borderBottom: 1, borderColor: 'container' }}>
                <FeedFlowGraph />
                <br />
              </Box >
              </TabPanel>
              <TabPanel value={value} index={6}>
              <Box sx={{ borderBottom: 1, borderColor: 'container' }}>
                <FeedPercentGraph />
                <br />
              </Box >
              </TabPanel>
              <TabPanel value={value} index={7}>
              <Box sx={{ borderBottom: 1, borderColor: 'container' }}>
                <FullGraph />
                <br />
              </Box >
              </TabPanel>
              </BrowserRouter>
            </Box>
          </div>
          </Container>
        </React.Fragment>
      </div>
    );
  }