import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableHighlight,Image,Button,Dimensions,TextInput} from 'react-native'; 
import Data from '../component/Data';

class AddToKart extends Component{
  static navigationOptions = {
    title: 'My Cart',
  }
  constructor(props) {
    super(props)
    this.state = {
      Products : Data,
    };
  }

  
  render(){
    
    return(
      <View>
        <Text>HELOO</Text>
      <View style={{padding: 50}}>
            {
              this.state.Products.map((item,index)=>{
                <View key={index} style={{padding: 20}}
                title={item.name + "- " + item.cost}>
                  
                  
                </View>
              })
            }
          </View>
          </View>
    )
  }
}

export default AddToKart;

