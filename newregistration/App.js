import React, { Component } from 'react';
import Nav from './navigation/navigator';

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
         <Nav />  
    )
  }
}