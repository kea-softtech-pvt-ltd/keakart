import React, { Component } from 'react';
import {View,Text} from 'react-native';  
import{  createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import RechargeDetailsScreen from '../Screen/RechargeDetails';

const RechargeDetailsStackNavigator = createStackNavigator(  
    {  
        HomeNavigator: RechargeDetailsScreen 
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
                  onPress={() => navigation.navigate("Recharge")}
                />
            </View>      
          ),
          headerStyle: {backgroundColor: '#20b2aa',height: 70,},
          headerTitle:"Mobile Recharge",
          headerTitleStyle:{flex: 1,fontSize: 20,color: 'white'},
              
        };  
      }  
    }  
);  

export default RechargeDetailsStackNavigator;