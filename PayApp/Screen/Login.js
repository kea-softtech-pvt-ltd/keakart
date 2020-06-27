import React, { Component } from 'react';
import {StyleSheet,Text,View,TextInput,Button,TouchableHighlight,Image, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      MobileNumber: '',
      Password: true,
      iconName:"eye-slash",
    }
  }

   onIconPress =() =>{
    let iconName = (this.state.Password) ? "eye" : "eye-slash";
    this.setState({
      Password : !this.state.Password,
      iconName: iconName
    })
  }

  Validation_field=() =>{
    const {MobileNumber,Password}= this.state;
    if (MobileNumber=="" ){
      this.setState ({EMobileNumber: 'Pleas Enter Mobile number'});
      return false
    }
    else if (Password==""){
      this.setState ({EPassword: 'Pleas Enter Correct Password'});
      return false
    }

    return true
  }


  onClickListener = () => {
  //  if (this.Validation_field()){
  //     this.props.navigation.navigate('Dashbord')
  //  }
   this.props.navigation.navigate('Dashbord')
  }

  render() {
    return (
      <View style={styles.container}>
         <ImageBackground source={require('../assets/backimage.png')} style={styles.image}>
        <View style={{alignItems: "center",padding: 10,paddingTop:100}}>
         <Image
              style={{ width: 65, height: 65, }}
              source={require('../assets/user.png')}
            />
          </View>
        <View style={{padding: 2}}><Text style={styles.Text}>Welcome back!</Text></View>
        <View ><Text style={styles.Text}>Login</Text></View>

        <View style={{margin:30, padding: 10}}>
        {/* <Text style={styles.Textsub}>10 digite Mobile No</Text> */}
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="MobileNumber"
              maxLength={10}  
              keyboardType={'phone-pad'}
              underlineColorAndroid='transparent'
              onChangeText={(value) => this.setState({MobileNumber: value})}
          />
        </View>
          <Text style={{color: 'red',fontSize: 15}}>{this.state.EMobileNumber}</Text>
        <View style={styles.inputContainer} >
          <TextInput style={styles.inputs}
            placeholder="Password"
            underlineColorAndroid='transparent'
            secureTextEntry={this.state.Password}
          //onChangeText={(value) => this.setState({Password: value})}
          />
            <TouchableHighlight onPress={this.onIconPress}>
                <Icon name={this.state.iconName}  size={25} style={{padding:15}} /> 
            </TouchableHighlight> 
        </View>
        <Text style={{color: 'red',fontSize: 15}}>{this.state.EPassword}</Text>
        <View style={{justifyContent: 'center',alignItems: 'center'}}>
        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener()}>
          <Text style={styles.signUpText}>Login</Text>
        </TouchableHighlight>
        </View>
        <View style={{marginBottom: 30}}><Text style={styles.Textcolor}>Forgot Password ?</Text></View>
        </View>
        
        </ImageBackground>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  inputContainer: {
      backgroundColor: '#FFFFFF',
      borderRadius:10,
      flexDirection: 'row',
      
  },
  inputs:{
      height:55,
      marginLeft:30,
      borderBottomColor: '#FFFFFF',
      flex:1,
      //color: 'white'
  },
  
  buttonContainer: {
    height:55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:350,
    borderRadius:10,
    
  },
  signupButton: {
    backgroundColor: "#20b2aa",
    margin: 30,
  },
  signUpText: {
    color: 'white',
    fontSize: 17
  },
  Text: {
      textAlign: 'center',
      fontSize: 20,
      padding: 10,
      color: 'white'
  },
  Textsub: {
    fontSize: 17,
    padding: 10,
    color: 'white'
},
Textcolor: {
  textAlign: 'center',
  fontSize: 17,
  padding: 10,
  //color: '#00BFFF'
  color: 'white'
},
  TextLink: {
    textAlign: 'center',
    fontSize: 20,
    padding: 30,
    color: 'green'
  }
});
 