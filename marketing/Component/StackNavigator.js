import React,{ Component } from 'react';
import {  createAppContainer,} from 'react-navigation';
import {  DrawerActions} from 'react-navigation-drawer'; 
import{  createStackNavigator } from 'react-navigation-stack';

import Home from '../Screen/Home';
import DetailsScreen from '../Screen/Details';
import ProductDetails from '../Screen/ProductDetails';
import TrackerScreen from '../Screen/Tracker';

const AppStackNavigator = createStackNavigator({
    Home: Home,
    Details: DetailsScreen,
    ProductDetails: ProductDetails,
    Tracker:  TrackerScreen
},
{
    initialRouteName: "Home",
    defaultNavigationOptions: {
        headerStyle: {height: 55, backgroundColor: 'white'},
        //headerTitleStyle: {fontWeight: 'bold', color: 'white'},
    }
}
);

const AppContainer   = createAppContainer(AppStackNavigator);  

export default class StackNavigator extends Component{
    render(){
        return <AppContainer screenProps={{openDraw: ()=>this.props.navigation.dispatch(DrawerActions.openDrawer()) }} />;
    }
}