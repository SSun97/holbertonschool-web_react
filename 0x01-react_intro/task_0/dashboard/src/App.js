import "./App.css";
import logo from "./logo.jpeg";

function App() {
  return (
    <html>
      <div className="App-header">
        <img alt="logo" src={ logo } />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </div>
    </html>
  );
}

export default App;