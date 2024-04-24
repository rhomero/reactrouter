import { Link } from "react-router-dom";



function Chips() {
    return (
        <div className="App">
          <header className="App-header">
            <img src="/lays.jpeg" className="App-logo" alt="logo" />
            <p>
              Chips Great Choice!!!!
            </p>
          </header>
          <Link to="/">
            Go Back
            </Link> 
        </div>
      );
}

export default Chips;