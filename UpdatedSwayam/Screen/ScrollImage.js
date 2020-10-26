import React, { Component } from 'react';
import { View, Text,StyleSheet,ScrollView,TouchableHighlight,Image, ImageBackground,} from 'react-native'; 
import ProductList from '../Data/ProductList'
import * as Font from 'expo-font';

class ScrollImage extends Component{

  constructor(props){
    super(props);
    this.state={
      product: ProductList,
    }
  }

  componentDidMount() {
    Font.loadAsync({
        'Roboto': require('../assets/fonts/Roboto-Thin.ttf'),
    })  
  }
  render(){
    return(
      <View>
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            this.state.product.map((item,id) =>(
            <View style={styles.container} key={id}>
              <Image 
                source={item.image}
                style={styles.Image}
              />
              <Text style={styles.textStyle}>{item.name}</Text>
            </View>
          ))
        }
        </ScrollView>   
      </View>
    )
  }
}
export default ScrollImage;

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop:5,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 5
    },
    Image: {
      height: 60,
        width: 60,
    },
    textStyle: {
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
  });