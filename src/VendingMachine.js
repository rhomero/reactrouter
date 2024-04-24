import './App.css';
import { Link } from "react-router-dom";
import Chips from './Chips'
import Soda from './soda'
import Honeybuns from './honeybuns'

function VendingMachine() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/vending machine.jpeg" className="App-logo" alt="logo" />
        <p>
          What would you like to eat today?
        </p>
        <Link to="/Chips">
        Chips
        </Link> 
        <Link to="/Soda">
        Soda
        </Link> 
        <Link to="/Honeybuns">
        Honeybuns
        </Link> 
      

      </header>
    </div>
  );
}

export default VendingMachine;
