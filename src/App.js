import React, { Component } from 'react';

import IssuesGrid from './components/IssuesGrid';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Github Issue Lister</h1>
        </header>
        <section className="app-body">
          <IssuesGrid />
        </section>
      </div>
    );
  }
}

export default App;
