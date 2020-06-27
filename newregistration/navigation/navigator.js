import React, { Component } from 'react';  
import {  createSwitchNavigator,  createAppContainer,} from 'react-navigation'; 
import{  createDrawerNavigator } from 'react-navigation-drawer';

import HomeStackNavigator from './HomeStackNavigator';
import OrganizationStackNavigatior from './OrganizationStackNavigatior';

export default class Nav extends Component {  
   
  render() {  
    return <MenuContainer/>;  
  }  
}  

const AppDrawerNavigator = createDrawerNavigator({  
  Home:  HomeStackNavigator,
 
});
    
const AppSwitchNavigator = createSwitchNavigator({  
    Home: { screen: AppDrawerNavigator },
    Organization: OrganizationStackNavigatior
});
 
  
const MenuContainer = createAppContainer(AppSwitchNavigator);  
  
 