import React from 'react';
import {Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../Constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

import DashboardScreen from '../Screen/Dashboard';
import HeaderScreen from '../Header/Header';
import ViewAll from '../Screen/ViewAll';
import ViewHeaderScreen from '../Header/ViewHeader';
import TabStackNavigator from '../navigator/TabNavigator';

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator
           screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primaryColor,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              //fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={({ navigation, route }) => ({
              headerTitle: props => <HeaderScreen {...props} onPress={() => navigation.toggleDrawer()}/>,
              headerLeft: () => (
                <Icon
                  name="bars"
                  size={20}
                  color={'white'}
                  style={{paddingLeft: 10}}
                  onPress={() =>navigation.toggleDrawer()}
                />
              ),
            })}
          />
           <Stack.Screen 
            name="Offer"
            component={ViewAll}
            options={{
              headerRight: (props) => (
                <ViewHeaderScreen
                  {...props}
                  onPress={() => {
                  }}
                />
              ),
            }}
          />
           <Stack.Screen 
            name="ProductDetailsRoot"
            component={TabStackNavigator}
            options={{
              headerRight: (props) => (
                <ViewHeaderScreen
                  {...props}
                  onPress={() => {
                    // Do something
                  }}
                />
              ),
            }}
          />
        </Stack.Navigator>  
  );
}

export default function StackNavigator(){
  return (
      <StackScreen />
  );
}

