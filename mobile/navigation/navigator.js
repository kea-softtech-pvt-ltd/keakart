import React, { Component } from 'react';  
import {  createSwitchNavigator,  createAppContainer,} from 'react-navigation'; 
import{  createDrawerNavigator } from 'react-navigation-drawer';

import HomeStackNavigator from './HomeStackNavigator';
import ProductStackNavigator from './ProductStackNavigator';
import AddToStackNavigator from './AddToStackNavigator';
import LoginStackNavigator from './LoginStackNavigator';
import EnterOtpStackNavigator from './EnterOtpStackNavigator';
import CpProductDetailsStackNavigator from './CpProductStackNavigator';
import HipProductDetailsStackNavigator from './HipProductStackNavigator';
import MorxProductDetailsStackNavigator from './MorxProductStackNavigator';
import HikvisionProductDetailsStackNavigator from './HikvisionProductStackNavigator';
import WirelessProductDetailsStackNavigator from './WirelessProductStackNavigator';
import ShoppingCartIcon from '../component/ShoppingCartIcon';
import CartScreen from '../component/CartScreen';

export default class Nav extends Component {  
   
  render() {  
    return <MenuContainer/>;  
  }  
}  

const AppDrawerNavigator = createDrawerNavigator({  
  Camera:  HomeStackNavigator,
  Login : LoginStackNavigator,
  AddToKart: AddToStackNavigator,
  CartScreen: CartScreen,

});
    
const AppSwitchNavigator = createSwitchNavigator({  
    Home: { screen: AppDrawerNavigator },
    Camera:  AppDrawerNavigator,
    ProductDetails :{ screen: ProductStackNavigator},
    AddToKart: {screen: AddToStackNavigator}, 
    Login: {screen: LoginStackNavigator},
    EnterOtp: {screen: EnterOtpStackNavigator},
    CpProductDetails: {screen: CpProductDetailsStackNavigator},
    HipProductDetails: {screen : HipProductDetailsStackNavigator},
    MorxProductDetails: {screen : MorxProductDetailsStackNavigator},
    HikvisionProductDetails: {screen : HikvisionProductDetailsStackNavigator},
    WirelessProductDetails: {screen: WirelessProductDetailsStackNavigator},
    ShoppingCartIcon: {screen: ShoppingCartIcon},
    
    
}); 
  
const MenuContainer = createAppContainer(AppSwitchNavigator);  
  
 