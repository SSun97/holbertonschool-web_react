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
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(1)}</p>
      </div>
    </>
  );
}

export default App;