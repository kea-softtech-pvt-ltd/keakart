import React, { Component } from 'react';
import { View, Text,StyleSheet,ScrollView,TouchableHighlight,Image, ImageBackground,} from 'react-native'; 

class ScrollImage extends Component{
  render(){
    return(
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row',justifyContent: 'space-between',padding: 10, }}>  
          <TouchableHighlight onPress={()=> this.props.navigation.navigate('')}>
            <ImageBackground
              source={require('../assets/cctv1.png')}
              style={styles.container}>
                <View style={styles.overlay}></View>
                <Text style = {[styles.textStyle, {padding: 10}]} >Clip Art</Text>
            </ImageBackground>
          </TouchableHighlight>
          </View>
          <View style={{ flexDirection: 'row',justifyContent: 'space-between',padding: 10, }}>  
          <TouchableHighlight>
            <ImageBackground
              source={require('../assets/cctv2.png')}
              style={styles.container}>
                <View style={styles.overlay}></View>
                <Text style = {[styles.textStyle, {padding: 10}]} >Hicvision Ip</Text>
            </ImageBackground>
          </TouchableHighlight>
          </View>
          <View style={{ flexDirection: 'row',justifyContent: 'space-between',padding: 10, }}>  
          <TouchableHighlight>
            <ImageBackground
              source={require('../assets/cctv3.png')}
              style={styles.container}>
                <View style={styles.overlay}></View>
                <Text style = {[styles.textStyle, {padding: 10}]} >MORX Cctv</Text>
            </ImageBackground>
          </TouchableHighlight>
          </View>
          <View style={{ flexDirection: 'row',justifyContent: 'space-between',padding: 10, }}>  
          <TouchableHighlight >
            <ImageBackground
              source={require('../assets/cctv9.png')}
              style={styles.container}>
                <View style={styles.overlay}></View>
                <Text style = {[styles.textStyle, {padding: 10}]} >vivo</Text>
            </ImageBackground>
          </TouchableHighlight>
          </View>
        </ScrollView>
       
    )
  }
}
export default ScrollImage;

  const styles = StyleSheet.create({
    container: {
        backgroundColor:'black',
        opacity: 0.5,
        height: 80,
        width: 150,
        borderRadius: 8
    },
    overlay: {
        backgroundColor:'transparent',
        opacity: 0.6
    },
    textStyle: {
        marginTop: 10,
        fontSize: 18,
        color: "#FFFFFF",
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    balanceContainer:{
        padding:10,
    }
  });