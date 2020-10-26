import React from 'react';
import {Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../Constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProductDetails from '../Screen/ProductDetails';
import Offer from '../Screen/Offer';
import OfferImage from '../Screen/OfferImage';
import ProductTab from '../TabHeader/ProductTab';
import AddToKart from '../Screen/AddToCart';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function getTabBarVisible(route) {
  const routeName = route.state
    ?  route.state.routes[route.state.index].name
    : route.params?.screen || 'ProductDetails';

  if (routeName === 'AddToCart') {
    return true;
  }
  return false;
}

function ProductStackNavigator(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="A" component={ProductDetails} />
    </Stack.Navigator>
  );
}

function AddStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddToCart" component={AddToKart} 
      // initialParams={{ item:43 }}
      />
    </Stack.Navigator>
  );
}

export default function TabStackNavigator(){
  return (
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'white',
            activeBackgroundColor: Colors.primaryColor,
            inactiveTintColor: 'gray',
            labelStyle: {
              fontSize: 17,
              paddingBottom:15,
              alignItems:'center',
              fontFamily: 'Piazzolla',  
            }, 
            visible: false
          }}
          
        >
        <Tab.Screen 
          name="ProductDetails" 
          component={ProductStackNavigator} 
          options={{
           //tabBarLabel: props => <ProductTab {...props} />,
           tabBarVisibilityAnimationConfig: false
          }}
          />
        <Tab.Screen 
          name="AddToCart" 
          component={AddToKart} 
          options={({ route }) => ({
            tabBarLabel: 'Add To Cart',
            tabBarVisible: getTabBarVisible(route) })} 
        />
      </Tab.Navigator>   
    );
}

