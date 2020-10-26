import React,{} from 'react'
import { Text } from 'react-native';
import {CartContext} from '../context/CartContext';

function Carts() {
    // The Theme Toggler Button receives not only the theme
    // but also a toggleTheme function from the context
    return (
      <CartContext.Consumer>
        {({theme, toggleTheme}) => (
          <button
            onClick={toggleTheme}
            style={{backgroundColor: theme.background}}>
            Toggle Theme
          </button>
        //   <Text>name: {theme.ProductList.name}</Text>
        )}
      </CartContext.Consumer>
    );
  }
  
  export default Carts;