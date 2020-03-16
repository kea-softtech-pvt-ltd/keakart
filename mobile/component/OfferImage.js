import React, { Component } from 'react';
import { View, Text,StyleSheet,} from 'react-native'; 
import { SliderBox } from "react-native-image-slider-box";

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
        <View>
        <View style={{padding: 20, }}>
          <Text style={styles.textstyle}>New Arrivals</Text>
        </View>
        <SliderBox   
          images={this.state.images}   
          sliderBoxHeight={300}  
          onCurrentImagePressed={
            index => console.warn(`image ${index} pressed`)
          }   
          dotColor="#FFEE58"   
          inactiveDotColor="#90A4AE"    
          autoplay   
          circleLoop 
        />
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
});