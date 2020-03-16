import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableHighlight,Image,Button,Dimensions,TextInput, ImageBackground} from 'react-native'; 
import { ScrollView } from 'react-native-gesture-handler';
import OtpInputs from "react-native-otp-inputs";

class EnterOtpScreen extends Component{
  static navigationOptions = {
    title: 'OTP',

  }
   
  render(){
    const win = Dimensions.get('window');
    const ratio = win.width/541; 
      return(
      <View style={{flex: 1, flexDirection: 'column',}}>
        <View style={{margin: 70,justifyContent: 'center',}}>
            <ScrollView>
                <Text style={styles.textstyle}>Enter your Verification Code</Text>
                <OtpInputs
                  handleChange={code => console.log(code)}
                  numberOfInputs={4}
                  //style={styles.abc} 
                  underlineColorAndroid= 'blue'
                />
                <View style={{marginTop: 30}}>
                  <Button
                    title= 'Verify'
                    color= 'orange'
                  />
                </View>
            </ScrollView>
        </View>
      </View>
    )
  }
}

export default EnterOtpScreen;

const styles = StyleSheet.create({
textstyle: {
    fontSize: 25,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 80,
},
abc :{
  textAlign: 'center',
  fontSize: 30
  
}
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 5,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
    marginBottom: 30,
    textAlign: 'center'
    },
});


  