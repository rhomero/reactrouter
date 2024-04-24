import { Link } from "react-router-dom";

function Honeybuns() {
    return (
        <div className="App">
          <header className="App-header">
            <img src="/honeybun.webp" className="App-logo" alt="logo" />
            <p>
              Honeybun Great Choice!!!!
            </p>
          </header>
          <Link to="/">
            Go Back
            </Link> 
        </div>
      );
}

export default Honeybuns;