
import React, { Component } from 'react';
import './App.css';
import InfoPage from './Components/Infopage'
import MyReduxForm from './Components/MyReduxForm';

class App extends Component {
  render() {
    return (
      <div id="App">
        {/* <h1>`wireframe Url https://wireframe.cc/fUwMzh</h1> */}

        <div id = 'App-1'>
             <h1>PAWTASTIC</h1>

        </div>
        <div id = 'App-2'>
            
            <InfoPage />
        </div>
        
      </div>
    );
  }
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
