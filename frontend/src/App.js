import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am the frontend! I will be talking to the server!
        </p>
        <p>
          P.S. You can find the server on localhost:4000
        </p>
      </header>
    </div>
  );
}

export default App;
