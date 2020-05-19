import React, { Component } from 'react';
import { View, Text,StyleSheet,} from 'react-native'; 
import { SliderBox } from "react-native-image-slider-box";

class OfferImage extends Component{
  constructor(props){
    super(props);
    this.state ={
      images: [
        require('../assets/first.jpg'),
        require('../assets/second.jpg'),
        require('../assets/medicin2.jpg'),
        require('../assets/third.jpg'),
        require('../assets/colgatebrush.jpg'), 
        require('../assets/fourth.jpg'),
        require('../assets/fifth.jpg'),     
      ]
    };
  }
  render(){
    return(
        <View >
        <View style={{padding: 10, }}>
          <Text style={styles.textstyle}>Products</Text>
        </View>
          <View style={{paddingBottom: 20}}>
            <SliderBox   
              images={this.state.images}   
              sliderBoxHeight={250}  
              // onCurrentImagePressed={
              //   index => console.warn(`image ${index} pressed`)
              // }   
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
});


