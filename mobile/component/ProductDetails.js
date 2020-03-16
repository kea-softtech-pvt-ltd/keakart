import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableHighlight,Image,Button,Dimensions} from 'react-native'; 
import { ScrollView } from 'react-native-gesture-handler';

class ProductDetailsScreen extends Component{
  static navigationOptions = {
    title: 'ProductDetails',
  }
  constructor(props) {
    super(props)
  }
  render(){
    const win = Dimensions.get('window');
    const ratio = win.width/541; 
    return(
      <View style={{flex: 1, flexDirection: 'column',padding: 20, }}>
        <ScrollView>
        <Text style={styles.textstyle}>Hikvision Cctv Camera</Text>
        <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'column',justifyContent: 'space-between',padding: 10, }}>
          <TouchableHighlight>
            <Image
              style={{ height: 362 * ratio,  width: win.width}}
              source={require('../assets/cctv1.png')}
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
            onPress={() => this.props.navigation.navigate('AddToKart')}
          />
          <Button
            title= 'Wishlist'
            color= 'orange'
            onPress={() => this.saveData()}
          />
          </View>
          </ScrollView>
      </View>
    )
  }
}

export default ProductDetailsScreen;

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