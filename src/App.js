import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './config/AppRouter';
import {Provider} from 'react-redux';
import reducers from './reducers';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
class App extends Component {
  
  constructor(props){
    super(props);
  }
  
  
  render() {
    return (
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
        <AppRouter/>
      </Provider>
    );
  }
}

export default App;
