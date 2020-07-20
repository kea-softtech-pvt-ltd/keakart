import React,{ Component } from 'react';
import {  createAppContainer,} from 'react-navigation';
import {  DrawerActions} from 'react-navigation-drawer'; 
import{  createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from 'react-native-vector-icons'

import HomeScreen from '../Screen/Home';
import ProductDetails from '../Screen/ProductDetails';
import AddToKartScreen from '../Screen/AddToCart';
import WishListScreen from '../Screen/WishList';
import Colors from '../constants/Colors'
import PasswordChange from '../Screen/PasswordChange';
import ProccedToBy from '../Screen/ProccedToBy';

const AppStackNavigator = createStackNavigator({
    Home: HomeScreen,
    ProductDetails: ProductDetails,
    AddToCart: AddToKartScreen,
    WishList: WishListScreen,
    Password: PasswordChange,
    ProccedToBy: ProccedToBy,
    
},
{
    initialRouteName: "Home",
    defaultNavigationOptions: {
        headerStyle: {height: 55, backgroundColor:  Colors.primaryColor,},
        headerTitleStyle: { color: 'white'},
    }
}
);

// const Nav = createAppContainer(createBottomTabNavigator(
//     {
//       Home: { screen: AppStackNavigator },
//       AddToCart: AddToKartScreen,
//     },
//     {
//       defaultNavigationOptions: ({ navigation }) => ({
//         tabBarIcon: ({ focused, tintColor }) => {
//           const { routeName } = navigation.state;
//           let iconName;
//           if (routeName === 'Home') {
//             iconName = `ios-home`;
//           } else if (routeName === ' AddToCart') {
//             iconName = `ios-options${focused ? '' : '-outline'}`;
//           }
//           return <Ionicons name={iconName} size={35} color={tintColor} />;
//         },
//       }),
//       tabBarOptions: {
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//       },
//     }
//   ));

const AppContainer   = createAppContainer(AppStackNavigator);  

export default class StackNavigator extends Component{
    render(){
        return <AppContainer screenProps={{openDraw: ()=>this.props.navigation.dispatch(DrawerActions.openDrawer()) }} />;
    }
}