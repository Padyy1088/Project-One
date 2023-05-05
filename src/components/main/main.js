import './App.css';
import BasicTable from '../table/Table';
import Graph from '../graph/Graph';

function MainUI({pdata,underflow,bedpressure,underflowflow,flocculantflow,feedflow,feedpercent}) {

  return (
    <div className="main">
      <BasicTable underflow={underflow} bedpressure={bedpressure} underflowflow={underflowflow} flocculantflow={flocculantflow} feedflow={feedflow} feedpercent={feedpercent}/> {/* Renders the BasicTable component. */}
      <Graph pdata={pdata}/>
    </div>
  );
}

export default MainUI;
