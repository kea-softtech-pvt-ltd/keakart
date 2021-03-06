import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableHighlight,Image,Button,Dimensions} from 'react-native'; 
import { ScrollView } from 'react-native-gesture-handler';
import {connect} from 'react-redux'
import AddToKart from './AddToKart';


class ProductDetailsScreen extends Component{
  static navigationOptions = {
    title: 'ProductDetails',
  }
  constructor(props) {
    super(props);
    this.state={
      image: require('../assets/cctv1.png'),
      name: 'Hikvision Cctv Camera' ,
      cost: 2261
    }
    
  }
  render(){
    const data = this.state

    const win = Dimensions.get('window');
    const ratio = win.width/541; 
    return(
      <View style={{flex: 1, flexDirection: 'column',padding: 20, }}>
        <ScrollView>
    <Text style={styles.textstyle}>{this.state.name}</Text>
        <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'column',justifyContent: 'space-between',padding: 10, }}>
          <TouchableHighlight>
            <Image
              style={{ height: 362 * ratio,  width: win.width}}
              source={this.state.image}
            />
          </TouchableHighlight>
        </View>
        <View style={{flexDirection: 'column',padding: 10, }}>
          <Text style={styles.subtext}>Hikvision Cctv Camera</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize:17, fontWeight: 'bold',}}>Display: </Text>
              <Text style={styles.subtext}> 15.9cm (6.26) HD+</Text>
            </View>
              <Text style={styles.subtext}> Dot not Display</Text>
            <View style={{flexDirection: 'row',paddingTop: 10}}>
              <Text style={{fontSize:17, fontWeight: 'bold',}}>Camera: </Text>
              <Text style={styles.subtext}> 12mp+2mp AI Dual </Text>
            </View>
              <Text style={styles.subtext}> Real Camera</Text>
            <View style={{flexDirection: 'row',paddingTop: 10}}>
              <Text style={{fontSize:17, fontWeight: 'bold',}}>Battery: </Text>
              <Text style={styles.subtext}> 4000 MAH Battery </Text>
            </View>
            <View style={{flexDirection: 'row',paddingTop: 10}}>
              <Text style={{fontSize:17, fontWeight: 'bold',}}>RAM: </Text>
              <Text style={styles.subtext}> 64GB </Text>
            </View>
            <View style={{flexDirection: 'row',paddingTop: 10}}>
              <Text style={{fontSize:17, fontWeight: 'bold',}}>ROM: </Text>
              <Text style={styles.subtext}> 8GB </Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-between',margin: 30,}}>
          <Button
            title= 'Add To Cart'
            color= 'orange'
            onPress={this.props.addItemToCart}
            
          />
          <Button
            title= 'Wishlist'
            color= 'orange'
            onPress={() => this.props.navigation.navigate('WishList',data)}
            
            
          />
          </View>

          </ScrollView>
      </View>

    )
  }
}

const mapDispatchToProps =(dispatch) => {
  return{
    addItemToCart : (Product) => dispatch ({ type:
      'ADD_TO_CART', paylode: Product 
    })
  }
}

export default connect(null, mapDispatchToProps)(ProductDetailsScreen) ;

const styles = StyleSheet.create({
textstyle: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    },
    subtext: {
      fontSize: 17,
     
    
    }
});