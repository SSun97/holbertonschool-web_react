import "./App.css";
import logo from "./logo.jpeg";
import { getFooterCopy, getFullYear } from "./utils";

function App() {
  return (
    <>
      <div className="App-header">
        <img alt="logo" src={ logo } />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(1)}</p>
      </div>
    </>
  );
}

export default App;