import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './config/AppRouter';
import {Provider} from 'react-redux';
import {store,persistor} from './config/Store';
import { PersistGate } from 'redux-persist/integration/react'
import {createStore,applyMiddleware} from 'redux';

class App extends Component {
  
  constructor(props){
    super(props);
  }
  
  
  render() {
    return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter/>
      </PersistGate>
      </Provider>
    );
  }
}

export default App;
