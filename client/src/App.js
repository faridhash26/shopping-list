
import { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from "./component/AppNavbar";
class App extends Component {
  render(){
    return (
      <div classNam="App">
        <AppNavbar/>
      </div>
    );
  }
}

export default App;
