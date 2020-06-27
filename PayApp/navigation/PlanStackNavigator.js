import React, { Component } from 'react';
import {View,Text} from 'react-native';  
import{  createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import PlansScreen from '../Screen/Plans'

const PlansStackNavigator = createStackNavigator(  
    {  
        HomeNavigator: PlansScreen 
    },  
    {  
      defaultNavigationOptions: ({ navigation }) => { 
         
        return {  
          headerLeft: ( 
            <View style={{flexDirection: 'row',}}>
                <Icon
                  name="angle-left"
                  size={30}
                  style={{marginLeft: 20,color: 'white'}}
                  onPress={() => navigation.navigate("RechargeDetails")}
                />
            </View>      
          ),
          headerStyle: {backgroundColor: '#20b2aa',height: 70,},
          headerTitle:"Plans",
          headerTitleStyle:{flex: 1,fontSize: 20,color: 'white'},

          
        };  
      }  
    }  
);  

export default PlansStackNavigator;