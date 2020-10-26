import React, { Component } from 'react';
import { View, Text,StyleSheet,Dimensions,SafeAreaView,TouchableHighlight,Image} from 'react-native'; 
import ImageSlider from 'react-native-image-slider';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 3;

class OfferImage extends React.Component{

  render(){
    const images = [
      require('../assets/cctv5.png'),
        require('../assets/cctv2.png'),
        require('../assets/cctv3.png'),
        require('../assets/cctv6.png'),
        require('../assets/cctv7.png'),   
    ];
    return(
      <SafeAreaView style={styles.container}>
        <ImageSlider
          loopBothSides
          autoPlayWithInterval={3000}
          images={images}
          customSlide={({ index, item, style, width }) => (
            // It's important to put style here because it's got offset inside
            <View key={index} style={[style, styles.customSlide]}>
              <Image source={{ uri: item }} style={styles.customImage} />
            </View>
          )}
          // customButtons={(position, move) => (
          //   <View style={styles.buttons}>
          //     {images.map((image, index) => {
          //       return (
          //         <TouchableHighlight
          //           key={index}
          //           underlayColor="#ccc"
          //           onPress={() => move(index)}
          //           style={styles.button}
          //         >
          //           <Text style={position === index && styles.buttonSelected}>
          //             {index + 1}
          //           </Text>
          //         </TouchableHighlight>
          //       );
          //     })}
          //   </View>
          // )}
          
        />
      </SafeAreaView>
    );
  }
}
export default OfferImage;

const styles = StyleSheet.create({
textstyle: {
    textAlign: 'center',
    fontSize: 20,
    
    },
    customImage:{
      width: width - 0,
      height: height
    },
    container: {
      marginTop: 10,
      marginBottom: 10
    },
   
});