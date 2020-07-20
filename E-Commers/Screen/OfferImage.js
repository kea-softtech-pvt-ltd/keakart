import React, { Component } from 'react';
import { View, Text,StyleSheet,Dimensions} from 'react-native'; 
import { SliderBox } from "react-native-image-slider-box";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 3;

class OfferImage extends Component{
  constructor(props){
    super(props);
    this.state ={
      images: [
        require('../assets/cctv5.png'),
        require('../assets/cctv2.png'),
        require('../assets/cctv3.png'),
        require('../assets/cctv6.png'),
        require('../assets/cctv7.png'),   
      ]
    };
  }
  render(){
    return(
        <View style={{flex: 1}}>
        <View style={{ flexDirection: 'column',justifyContent: 'space-between',paddingTop: 15,paddingLeft: 10 }}>  
        <SliderBox   
          images={this.state.images}
          style={ styles.Image}   
          //sliderBoxHeight={100}  
          onCurrentImagePressed={
            index => console.warn(`image ${index} pressed`)
          }   
          dotColor="#FFEE58"   
          inactiveDotColor="#90A4AE"    
          autoplay   
          circleLoop 
        />
        </View>
        </View>
    )
  }
}

export default OfferImage;

const styles = StyleSheet.create({
textstyle: {
    textAlign: 'center',
    fontSize: 20,
    
    },
    Image:{
      width: width - 20,
      height: height
    }
});