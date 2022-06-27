import React, { Component }  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynavbar from './components/Navbar';
import Presentation from './components/Presentation';
import MyFooter from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Mynavbar />
        <Presentation />
        <MyFooter/>

      </div>
    );
  }
}

export default App;
