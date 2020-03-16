import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableHighlight,Image,Button,Dimensions,TextInput, ImageBackground} from 'react-native'; 
import { ScrollView } from 'react-native-gesture-handler';
//import firebase from 'react-native-firebase'

class LoginScreen extends Component{
//   static navigationOptions = {
//     title: 'Login',

//   }
   
  render(){
    const win = Dimensions.get('window');
    const ratio = win.width/541; 
      return(
      <View style={{flex: 1, flexDirection: 'column',}}>
        <ImageBackground source={require ('../assets/cctv5.png')} 
            style={{height: win.height, width: win.width}}>
                <View style={{margin: 70,}}>
                    <ScrollView>
                        <Text style={styles.textstyle}>Login</Text>
                        <TextInput  
                          placeholder="Enter Mobile Number"
                          maxLength= {10}
                          keyboardType= {'number-pad'}  
                          underlineColorAndroid='transparent'  
                          style={pickerSelectStyles.inputIOS}    
                        /> 
                        <View style={{marginTop: 30}}>
                          <Button
                            title= 'Send OTP'
                            color= 'orange'
                            onPress={() => this.props.navigation.navigate('EnterOtp')}
                          />
                        </View>
                    </ScrollView>
                </View>
        </ImageBackground>
      </View>
    )
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
textstyle: {
    fontSize: 25,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 80,
},
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
  
    },
});


  