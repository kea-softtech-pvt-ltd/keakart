import React, { Component } from 'react';
import { View, Text,StyleSheet,} from 'react-native'; 
import { SliderBox } from "react-native-image-slider-box";

class SliderImage extends Component{
  constructor(props){
    super(props);
    this.state ={
      images: [
        require('../assets/image1.png'),
        require('../assets/image2.png'),
        require('../assets/image3.png'),
        require('../assets/image1.png'),
        require('../assets/image3.png'),
      ]
    };
  }
  render(){
    return(
        <View style={{paddingTop:10}}>
        <SliderBox   
          images={this.state.images}   
          sliderBoxHeight={100}  
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

export default SliderImage;

const styles = StyleSheet.create({
textstyle: {
    textAlign: 'center',
    fontSize: 20,
    
    },
});