import React, { Component } from 'react';
import Nav from './navigation/navigator';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore()

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store = { store }>
         <Nav />  
      </Provider>
    )
  }
}