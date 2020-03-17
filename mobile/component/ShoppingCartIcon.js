import React, { Component } from 'react';
import {TouchableHighlight, Image,View,Text } from 'react-native';  
import Icon from 'react-native-vector-icons/FontAwesome';
 
const ShoppingCartIcon =(props)=>(
    <View style={{padding: 5}}>
        <View style={{
            position: 'absolute',height: 30, width: 30,borderRadius: 15,backgroundColor: 'green',
            right:15,botton: 15,alignItems:'center',justifyContent:'center',zIndex: 2000,
            }}>
                <Text style={{color: 'white',fontWeight:'bold'}}>0</Text>
        </View>
        <Icon
            name="shopping-cart"
            size={30}
            //onPress={()=>navigation.navigate('AddToKart')}
            >
        </Icon>

    </View>
)

export default ShoppingCartIcon;