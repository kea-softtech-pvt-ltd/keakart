import React,{} from 'react'
import {Text, View,} from 'react-native'
import {CartContext} from '../context/CartContext';
import {themes} from '../context/data'
import Carts from '../context/Carts';
import CartSacreen from './Cart';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
      myArray: []
    };
  }

  render() {
    // The entire state is passed to the provider
    return (
      <CartContext.Provider value={this.state}>
        <Content />
      </CartContext.Provider>
    );
  }
}

function Content() {
  return (
    <View>
      <Carts />
    </View>
  );
}

export default AddToCart ;
