import React, { Component } from 'react';
import './App.css';
import Image from './Image';
import logo from './logo.svg';

const DenisImage = 'https://ca.slack-edge.com/TBZTJA33J-UC0ED1H36-0be4534405e0-48';

class App extends Component {
  render() {
    const isDenis = Math.random() > 0.3;
    return (
      <div className="App">
        <header className="App-header">
          <Image denisImage={isDenis ? DenisImage : logo} />
          <p>
            Hello telran school
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
      </div>
    );
  }
}

export default App;
