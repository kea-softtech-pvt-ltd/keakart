import React, { Component } from 'react';
import {View,Text} from 'react-native';  
import{  createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import RechargeSuccessful from '../Screen/RechargeSuccessful';

const RechargeSuccessfulStackNavigator = createStackNavigator(  
    {  
        HomeNavigator: RechargeSuccessful 
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
                  onPress={() => navigation.navigate("Dashbord")}
                />
            </View>      
          ),
          headerStyle: {backgroundColor: '#32cd32',height: 70,},
          headerTitle:"Recharge Successful",
          headerTitleStyle:{flex: 1,fontSize: 20,color: 'white'},

          
        };  
      }  
    }  
);  

export default RechargeSuccessfulStackNavigator;