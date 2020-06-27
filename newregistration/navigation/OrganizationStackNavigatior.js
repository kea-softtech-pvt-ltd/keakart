import React, { Component } from 'react';
import {View,} from 'react-native';  
import{  createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import OrganizationScreen from '../Screen/OrganizationPage'

const OrganizationStackNavigator = createStackNavigator(  
    {  
        HomeNavigator: OrganizationScreen 
    },  
    {  
      defaultNavigationOptions: ({ navigation }) => { 
         
        return {  
          headerLeft: ( 
            <View style={{flexDirection: 'row',}}>
                <Icon
                  name="angle-left"
                  size={30}
                  onPress={()=>this.props.navigation.navigate('Home')}
                  style={{marginLeft: 20}}
                  onPress={() => navigation.navigate('Home')}
                />
            </View>      
          ),
              
        };  
      }  
    }  
);  

export default OrganizationStackNavigator;