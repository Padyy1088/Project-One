import * as React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
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
import Login from '../loginpage/loginpage';

export function BasicTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
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
                  <MainUI />
                </Route>
                <Route path="/underflow">
                  <UnderflowGraph/>
                </Route>
                <Route path="/bedpressure">
                  <BedPressureGraph/>
                </Route>
                <Route path="/underflowflow">
                  <UnderflowFlowGraph/>
                </Route>
                <Route path="/flocculantflow">
                  <FlocculantFlowGraph/>
                </Route>
                <Route path="/feedflow">
                  <FeedFlowGraph/>
                </Route>
                <Route path="/feedpercent">
                  <FeedPercentGraph/>
                </Route>
                <Route path="/fullgraph">
                  <FullGraph/>
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