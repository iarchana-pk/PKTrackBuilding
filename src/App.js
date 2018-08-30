import React, { Component } from 'react';
import './App.css';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">          
      <h1 className="App-title">Track Building</h1>
      </header>
      <Navbar>
      <Navbar.Header>
      <Navbar.Brand>
      <a href="#home">Enter Track Details</a>
      <a href="#view">View Track Details</a>
      </Navbar.Brand>
      </Navbar.Header>
      
      </Navbar>;
      </div>
      );
  }
}

export default App;
