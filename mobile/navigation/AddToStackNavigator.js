import React, { Component } from 'react';
import {TouchableHighlight, Image,View,Text } from 'react-native';  
import{  createStackNavigator } from 'react-navigation-stack';
import AddToKart from '../component/AddToKart';
import ShoppingCartIcon from '../component/ShoppingCartIcon';

const AddToStackNavigator = createStackNavigator(  
    {  
        HomeNavigator: AddToKart 
    },  
    {  
      defaultNavigationOptions: ({ navigation }) => {  
        return {  
          headerLeft: ( 
            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                <TouchableHighlight style={{ marginLeft: 15, marginTop: 10 }} onPress={() => navigation.navigate('Home')}>
                <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../assets/images1.png')}
                />
                </TouchableHighlight>            
            </View>      
          ) ,
          headerRight: (
            <ShoppingCartIcon />
          ) 
        };  
      }  
    }  
);  

export default AddToStackNavigator;