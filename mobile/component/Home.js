import React, { Component } from 'react';
import { View,ScrollView,Text,TouchableHighlight,Image,StyleSheet} from 'react-native'; 

import ScrollImage from './ScrollImage';
import OfferImage from './OfferImage';
import ProductList from './ProductList';

class HomeScreen extends Component{
  
 
  render(){
    return(
      <View style={{ flex: 1,}}>
        <ScrollView >
          <ScrollImage />
          <OfferImage />
          <View style={{padding: 20}}>
        <Text style={styles.textstyle}>Best Sellers</Text>
        <View style={{flexDirection: 'row',paddingBottom: 20}}>
        <View style={{flexDirection: 'column',justifyContent: 'space-between',padding: 10, }}>
          <TouchableHighlight onPress={()=> this.props.navigation.navigate('ProductDetails')}>
            <Image
              style={{ height: 200, width: 200}}
              source={require('../assets/cctv1.png')}
            />
          </TouchableHighlight>
            <Text style= {styles.buttomtitle}>Hikvision Cctv Camera</Text>
            <View style={{flexDirection: 'row',}}>
              <Text style= {styles.buttomnumber}>{'\u20B9'}2,261</Text>
              <View style={styles.horline}></View>
              <Text style= {styles.buttomnumbere}>{'\u20B9'}3,769</Text>  
            </View>
        </View>
        <View style={{flexDirection: 'column',justifyContent: 'space-between',padding: 10, }}>
          <TouchableHighlight onPress={()=> this.props.navigation.navigate('CpProductDetails')}>
            <Image
              style={{ height: 200, width: 200}}
              source={require('../assets/cctv2.png')}
            />
          </TouchableHighlight>
            <Text style= {styles.buttomtitle}>Cp Plues Cctv Camera</Text>
            <View style={{flexDirection: 'row',}}>
              <Text style= {styles.buttomnumber}>{'\u20B9'}1,999</Text>
              <View style={styles.horline}></View>
              <Text style= {styles.buttomnumbere}>{'\u20B9'}2,999</Text>  
            </View>
        </View>
        </View>   
        <View style={{flexDirection: 'row',paddingBottom: 20}}>
        <View style={{flexDirection: 'column',justifyContent: 'space-between',padding: 10, }}>
          <TouchableHighlight onPress={()=> this.props.navigation.navigate('HipProductDetails')}>
            <Image
              style={{ height: 200, width: 200}}
              source={require('../assets/cctv4.png')}
            />
          </TouchableHighlight>
            <Text style= {styles.buttomtitle}>Hikvision Cctv Ip Camera</Text>
            <View style={{flexDirection: 'row',}}>
              <Text style= {styles.buttomnumber}>{'\u20B9'}1,950</Text>
              <View style={styles.horline}></View>
              <Text style= {styles.buttomnumbere}>{'\u20B9'}2,999</Text>  
            </View>
        </View>
        <View style={{flexDirection: 'column',justifyContent: 'space-between',padding: 10, }}>
          <TouchableHighlight onPress={()=> this.props.navigation.navigate('MorxProductDetails')}>
            <Image
              style={{ height: 200, width: 200}}
              source={require('../assets/cctv6.png')}
            />
          </TouchableHighlight>
            <Text style= {styles.buttomtitle}>MORX Cctv Camera</Text>
            <View style={{flexDirection: 'row',}}>
              <Text style= {styles.buttomnumber}>{'\u20B9'}1,999</Text>
              <View style={styles.horline}></View>
              <Text style= {styles.buttomnumbere}>{'\u20B9'}3,769</Text>  
            </View>
        </View>
        </View>
        <View style={{flexDirection: 'row',paddingBottom: 20}}>
        <View style={{flexDirection: 'column',justifyContent: 'space-between',padding: 10, }}>
          <TouchableHighlight onPress={()=>this.props.navigation.navigate('HikvisionProductDetails')}>
            <Image
              style={{ height: 200, width: 200}}
              source={require('../assets/cctv7.png')}
            />
          </TouchableHighlight>
            <Text style= {styles.buttomtitle}>Hikvision Cctv Demo</Text>
            <View style={{flexDirection: 'row',}}>
              <Text style= {styles.buttomnumber}>{'\u20B9'}2,999</Text>
              <View style={styles.horline}></View>
              <Text style= {styles.buttomnumbere}>{'\u20B9'}4,999</Text>  
            </View>
        </View>
        <View style={{flexDirection: 'column',justifyContent: 'space-between',padding: 10, }}>
          <TouchableHighlight onPress={()=>this.props.navigation.navigate('WirelessProductDetails')}>
            <Image
              style={{ height: 200, width: 200}}
              source={require('../assets/cctv8.png')}
            />
          </TouchableHighlight>
            <Text style= {styles.buttomtitle}>Wireless Cctv</Text>
            <View style={{flexDirection: 'row',}}>
              <Text style= {styles.buttomnumber}>{'\u20B9'}5,999</Text>
              <View style={styles.horline}></View>
              <Text style= {styles.buttomnumbere}>{'\u20B9'}7,999</Text>  
            </View>
        </View>
        </View> 
        </View> 
        </ScrollView>
      </View>
    )
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 20,
  },
  buttomtitle: {
    fontSize: 17,
    paddingLeft:10,
    paddingTop: 10,
    color: 'gray',
    
  },
  buttomnumber: {
    fontSize: 17,
    paddingBottom: 10,
    paddingLeft:10,
    color: 'orange',
    paddingRight: 7
    
  },
  buttomnumbere: {
    fontSize: 17,
    paddingBottom: 10,
    color: 'gray',
    marginLeft:-65
  },
  horline:{
    backgroundColor: '#A2A2A2',
    height: 2,
    width: 70,
    marginTop: 12,
  }
  });