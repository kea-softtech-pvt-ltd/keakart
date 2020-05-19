import React,{ Component } from 'react';
import {   createAppContainer,} from 'react-navigation'; 
import{  createDrawerNavigator } from 'react-navigation-drawer';

import StackNavigator from '../Component/StackNavigator';
import OrderProduct from '../Screen/OrderProduct';
import TrackerScreen from '../Screen/Tracker';
import NotificationScreen from '../Screen/Notification';
import IconScreen from '../Screen/Icon';


const AppDrawerNavigator = createDrawerNavigator({
    Home: StackNavigator,
    OrderProduct: OrderProduct,
    Notification: NotificationScreen,
    Tracker: TrackerScreen,
    Icon: IconScreen
},
{
    initialRouteName: "Home",
    drawerWidth: 300,
    defaultNavigationOptions: {
        headerStyle: {height: 55, backgroundColor: 'white'},
        //headerTitleStyle: {fontWeight: 'bold', color: 'white'},
    }
}
);

const AppContainer   = createAppContainer(AppDrawerNavigator);  

export default class DrawerNavigator extends Component{
    render(){
        return <AppContainer />;
    }
}