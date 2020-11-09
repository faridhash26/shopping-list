
import { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from "./component/AppNavbar";

import ShoppingList from './component/Shoppinglist';




class App extends Component {
  render(){
    return (
      <div classNam="App">
        <AppNavbar/>
        <ShoppingList/>
      </div>
    );
  }
}

export default App;
