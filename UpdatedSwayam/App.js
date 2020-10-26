import React from 'react';
import {Button,View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Colors from './Constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

import MyOrder from './Screen/MyOrder';
import MyAccountDetails from './Screen/MyAccount';
import CreatAccount from './Screen/CreatAccount';
import OTPScreen from './Screen/OTPScreen';
import AccountDetails from './Screen/AccountDetails';
import PasswordChange from './Screen/PasswordChange';
import LoginScreen from './Screen/LoginScreen';
import MyCardWallet from './Screen/CardWallet';
import AddNewCard from './Screen/AddNewCard';
import ChangeAddress from './Screen/ChangeAddress';
import StackNavigator from './navigator/StackNavigator';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Dashboard" >
      {/* <Drawer.Screen name="Feed" component={Feed} /> */}
      <Drawer.Screen name="Dashboard" 
        component={StackNavigator} 
        defaltNavigationOptions ={{
          drawerIcon: ({ focused, size }) => (
            <Icon
                name="bars"
                size={20}
                color={focused ? '#7cc' : '#ccc'}
                style={{paddingRight: 10}}
                onPress={() => navigation.openDrawer()}
            /> 
          )      
        }}
      />
      <Drawer.Screen name="MyOrder" component={MyOrder} />
      <Drawer.Screen name="MyAccount" component={MyAccountDetails} />
      <Drawer.Screen name="CreateAccount" component={CreatAccount} />
      <Drawer.Screen name='OTP' component={OTPScreen} />
      <Drawer.Screen name="AccountDetails" component={AccountDetails} />
      <Drawer.Screen name="Password" component={PasswordChange} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="MyCardWallet" component={MyCardWallet} />
      <Drawer.Screen name="AddNewCard" component={AddNewCard} />
      <Drawer.Screen name="ChangeAddress" component={ChangeAddress} />
    </Drawer.Navigator>
  );
}

export default function App(){
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

