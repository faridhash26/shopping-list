
import { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from "./component/AppNavbar";

import ShoppingList from './component/Shoppinglist';

import {Provider} from 'react-redux';
import store from './store/store';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
         <div className="App">
          <AppNavbar/>
          <ShoppingList/>
         </div>
      </Provider>
     
    );
  }
}

export default App;
