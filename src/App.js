import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynavbar from './components/Navbar';
import Presentation from './components/Presentation';
import MyFooter from './components/Footer';
import GateauAnnive from './components/GateauAnniv';
import Sales from './components/Sales';

class App extends Component {
  render() {
    return (
      <div>
        <Mynavbar />
        <Presentation />
        <GateauAnnive />
        <Sales/>
        <MyFooter />
      </div>
    );
  }
}

export default App;
