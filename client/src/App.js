
import { Component } from 'react';

import {Provider} from 'react-redux';
import {Container} from 'reactstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from "./component/AppNavbar";
import ShoppingList from './component/Shoppinglist';
import ItemModal from './component/ItemModal';
import store from './store/store';

import {loadUser} from './actions/authActions';


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render(){
    return (
      <Provider store={store}>
         <div className="App">
          <AppNavbar/>
          <Container>
            <ItemModal/>
          <ShoppingList/>
          </Container>
          
         </div>
      </Provider>
     
    );
  }
}

export default App;
