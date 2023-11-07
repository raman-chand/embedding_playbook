import { useState, useMemo } from 'react'
import Viz from './components/viz'
import Obj from './components/obj'

// higher-order component composing multiple components into a single <Tableau/> component
function Tableau(props) {
  // const [localVizObj, setLocalVizObj] = useState(null);
  const [localInteractive, setLocalInteractive] = useState(false);
  const vizObj = new Obj();

  const setVizObj = (viz) => {
    vizObj = useMemo(() => {

    },[viz]);
  };

  const hideTabs = props.hideTabs === 'true' ? true : false; // converts to boolean saving default to false

  return (
    <Viz
      vizObj={props.vizObj ? props.vizObj : vizObj}
      interactive={props.interactive ? props.interactive : localInteractive}
      setInteractive={props.setInteractive ? props.setInteractive : setLocalInteractive}
      vizUrl={props.vizUrl}
      height={props.height}
      width={props.width}
      hideTabs={hideTabs}
      device={props.device}
      toolbar={props.toolbar}
    />
  );
}

export default Tableau;
