import React,{} from 'react'
import {themes} from '../context/data'

export const CartContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});