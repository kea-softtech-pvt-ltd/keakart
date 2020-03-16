import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from 'react-native-vector-icons'
import AddToKart from '../component/AddToKart';

const ProductDetailsTabNavigator  = createAppContainer(createBottomTabNavigator(
        {
          AddToKart: { screen: AddToKart },
          Wishlist: { screen: AddToKart },
        },
        {
          defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
              const { routeName } = navigation.state;
              let iconName;
              if (routeName === 'AddToKart') {
                iconName = `ios-home`;
              } else if (routeName === 'AddToKart') {
                iconName = `ios-options${focused ? '' : '-outline'}`;
              }
              return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
          }),
          tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          },
        }
      ));
      
export default ProductDetailsTabNavigator;