import './App.css';
import Routers from './routers';

function App(props) {
  return (
    <div className="App">
      <Routers state={props.state} dispach={props.dispach}/>
    </div>
  );
}

export default App;
