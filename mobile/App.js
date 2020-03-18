import React, { Component } from 'react';
import Nav from './navigation/navigator';
import { Provider } from 'react-redux'
import store from './store/index'

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