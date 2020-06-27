import React, { Component } from 'react';  
import {  createSwitchNavigator,  createAppContainer,} from 'react-navigation'; 
import{  createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from 'react-native-vector-icons'

import HomeStackNavigator from './HomeStackNavigator';
import CreateAccountScreen from '../Screen/CreatAccount';
import LoginScreen from '../Screen/Login';
import RechargeStackNavigator from './RechargeStackNavigatior';
import SearchScreen from '../Screen/Search';
import RechargeDetailsStackNavigator from './RechargeDetailsStackNavigator';
import PlansStackNavigator from './PlanStackNavigator';
import RechargeSuccessfulStackNavigator from './RechargeSuccessfulStackNavigator';

export default class Nav extends Component {  
   
  render() {  
    return <MenuContainer/>;  
  }  
}  

const AppDrawerNavigator = createDrawerNavigator({  
  Dashbord:  HomeStackNavigator,
 
});
    
const AppSwitchNavigator = createSwitchNavigator({  
    CreateAccount: CreateAccountScreen,
    Login: LoginScreen,
    Dashbord: { screen: AppDrawerNavigator },
    Recharge: RechargeStackNavigator,
    Search: SearchScreen,
    RechargeDetails: RechargeDetailsStackNavigator,
    Plans: PlansStackNavigator,
    RechargeSuccessful: RechargeSuccessfulStackNavigator,
});
 
  
const MenuContainer = createAppContainer(AppSwitchNavigator);  
 
// const MenuContainer = createAppContainer(createBottomTabNavigator(
//   {
//     Dashbord: { screen: AppSwitchNavigator },
//     Login: { screen: LoginScreen },
//     CreateAccount: { screen: CreateAccountScreen },
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'Dashbord') {
//           iconName = `ios-home`;
//         } else if (routeName === 'Login') {
//           //iconName = `ios-options${focused ? '' : '-outline'}`;
//           iconName = `ios-cart`;
//         }
//         else if (routeName === 'CreateAccount') {
//           iconName = `ios-notifications-outline`;
//         }
        
//         return <Ionicons name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: '#ba55d3',
//       inactiveTintColor: 'black',
//     },
//   }
// ));
 