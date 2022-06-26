import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Mynavbar from './components/Navbar';
import Presentation from './components/Presentation';

class App extends Component {
  render() {
    return (
      <div>
        <Mynavbar />
        
        <Presentation />

      </div>
    );
  }
}

export default App;
