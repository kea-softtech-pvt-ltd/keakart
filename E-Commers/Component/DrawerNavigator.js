import React,{ Component } from 'react';
import {   createAppContainer,} from 'react-navigation'; 
import{  createDrawerNavigator } from 'react-navigation-drawer';

import StackNavigator from '../Component/StackNavigator';
import AccountDetails from '../Screen/AccountDetails';
import CreatAccount from '../Screen/CreatAccount';
import OTPScreen from '../Screen/OTPScreen';
import PasswordChange from '../Screen/PasswordChange';
import MyAccountDetails from '../Screen/MyAccount';
import LoginScreen from '../Screen/LoginScreen';
import MyCardWallet from '../Screen/CardWallet';
import AddNewCard from '../Screen/AddNewCard';
import ChangeAddress from '../Screen/ChangeAddress';
import MyOrder from '../Screen/MyOrder';

const AppDrawerNavigator = createDrawerNavigator({
    Home: StackNavigator,
    CreatAccount : CreatAccount,
    OTP : OTPScreen,
    AccountDetails: AccountDetails,
    Password: PasswordChange,
    MyAccount: MyAccountDetails,
    Login: LoginScreen,
    MyCardWallet: MyCardWallet,
    AddNewCard: AddNewCard,
    NewAddress: ChangeAddress,
    MyOrder: MyOrder,
},
{
    initialRouteName: "CreatAccount",
    drawerWidth: 300,
    defaultNavigationOptions: {
        headerStyle: {height: 55, backgroundColor: 'white'},
        headerTitleStyle: { color: 'white'},
    }
}
);

const AppContainer   = createAppContainer(AppDrawerNavigator);  

export default class DrawerNavigator extends Component{
    render(){
        return <AppContainer />;
    }
}