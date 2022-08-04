//import logo from './logo.svg';
import './App.css';
import Aldrion from './Aldrion';
import Eodin from './Eodin';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        <Nav/>
        <div className='flex-container'>
          <Aldrion/>
          <Eodin/>
        </div>
     
    </div>
    </Router>
  );
}

export default App;
