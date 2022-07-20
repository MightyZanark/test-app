import logo from './logo.svg';
import './App.css';
import React from 'react';

// class testButton extends React.Component {
//   render() {
//     return (
//       <div className='TestingFunc'>
//         <button className='butt' onClick={console.log('Button Clicked!')}>Test Button</button>
//       </div>
//     );
//   }
// }

// function testFunction() {
//     return (
//       <div className='TestingFunc'>
//         <button className='butt' onClick={console.log('Button Clicked!')}>Test Button</button>
//       </div>
//     )
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <button onClick={() => {console.log("Button Clicked!");}}>Click</button>
    </div>
  );
}

export default App;
