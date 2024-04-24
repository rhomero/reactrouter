import { Link } from "react-router-dom";


function Soda(){
    return (
        <div className="App">
          <header className="App-header">
            <img src="/coke.jpeg" className="App-logo" alt="logo" />
            <p>
              Soda Great Choice!!!!
            </p>
          </header>
          <Link to="/">
            Go Back
            </Link> 
        </div>
      );
}

export default Soda; 