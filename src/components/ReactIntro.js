import React, { Component } from 'react';
import logo from '../img/logo.svg';
import './react-intro.css';

class ReactIntro extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to iFullStack Book Database</h2>
        </div>
        <p className="App-intro">
          This application is built using ReactJS.
        </p>
      </div>
    );
  }
}

export default ReactIntro;
