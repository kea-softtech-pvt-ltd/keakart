import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableHighlight,Image,Button,Dimensions,TextInput} from 'react-native'; 
import { ScrollView } from 'react-native-gesture-handler';
import CartSacreen from './Cart'
import SubTotal from './SubTotal';


class AddToKart extends Component{
  static navigationOptions = {
    title: 'My Cart',
  }
  constructor(props) {
    super(props)
    this.state = {
      
    };
  }  
  render(){
   
    return(
      <View style={{flex: 1, flexDirection: 'column',padding: 10, }}>
        <ScrollView>
          <Text style={styles.textstyle}>My Cart( 1 )</Text>
          <CartSacreen />
          <CartSacreen />
          <SubTotal />
        </ScrollView>
      </View>
    )
  }
}

export default AddToKart;

const styles = StyleSheet.create({
textstyle: {
    fontSize: 20,
    padding: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    },
});

  