
import './App.css';
import liquid from "./resources/liquid.gif";
import liquid2 from "./resources/liquid2.gif";
import React from 'react';
import {
  StyleSheet,
  Button,
  View,
} from 'react-native';

function App() {
  return (
    <div className="App">
     <header className="Header">
        <h1> Calming Quotes</h1>
     </header>
        <img class="liquid2" src={liquid2} alt={"liquid2"}/>
        <p>
          Welcome to Calming Quotes!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <img class="liquid" src={liquid} alt={"liquid"}/> */}

    </div>
  );
}

export default App;
