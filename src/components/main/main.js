// This line imports the CSS file for this component. 
// The CSS file contains styling rules for the UI elements used in this component.
import './App.css';

// These lines import two child components of MainUI: BasicTable and Graph.
import BasicTable from '../table/Table';
import Graph from '../graph/Graph';

// This is the MainUI component, which renders the child components BasicTable and Graph side by side.
function MainUI() {
  return (
    <div className="main">
      <BasicTable /> {/* Renders the BasicTable component. */}
      <Graph /> {/* Renders the Graph component. */}
    </div>
  );
}

export default MainUI;
