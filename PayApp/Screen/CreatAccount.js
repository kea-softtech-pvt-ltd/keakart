import React, { Component } from 'react';
import {StyleSheet,Text,View,TextInput,Button,TouchableHighlight,Image,ImageBackground} from 'react-native';
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CreateAccountScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      MobileNumber: '',
      Password: true,
      isChecked: '',
      iconName: "eye-slash"
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
    const {Name,MobileNumber,Password,check}= this.state;
    if (MobileNumber=="" ){
      this.setState ({EMobileNumber: 'Pleas Enter Mobile number'});
      return false
    }
    else if (Name==""){
      this.setState ({EName: 'Pleas Enter Name'});
      return false
    }
    else if (Password==""){
      this.setState ({EPassword: 'Pleas Enter Correct Password'});
      return false
    }
    // else if (check==""){
    //   this.setState ({ECheck: 'Plese fill this check box'});
    //   return false
    // }
    return true
  }


  onClickListener = () => {
  //  if (this.Validation_field()){
  //     this.props.navigation.navigate('Login') 
  //  }
   this.props.navigation.navigate('Login')
    
  }

  render() {
    return (
      <View style={styles.container}>
         <ImageBackground source={require('../assets/backimage.png')} style={styles.image}>
      
        <View style={{margin:40,padding: 10}}>
        <View style={{padding: 20}}><Text style={styles.Text}>Create PayApp Account</Text></View>
        {/* <Text style={styles.Textsub}>10 digite Mobile No</Text> */}
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="MobileNumber"
              maxLength={10}  
              keyboardType={'phone-pad'}
              underlineColorAndroid='transparent'
              onChangeText={(value) => this.setState({MobileNumber: value})}/>
              
        </View>
        <Text style={{color: 'red',fontSize: 15}}>{this.state.EMobileNumber}</Text>

        {/* <Text style={styles.Textsub}>Full Name</Text> */}
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Full Name"
              underlineColorAndroid='transparent'
              onChangeText={(value) => this.setState({Name: value})}/>
              
        </View>
        <Text style={{color: 'red',fontSize: 15}}>{this.state.EName}</Text>

        {/* <Text style={styles.Textsub}>Set Password</Text> */}
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
        <View style={{flexDirection: 'row',paddingTop: 10}}>
        <CheckBox
          style={{padding: 10}}
          onPress={()=>{
            this.setState({
              isChecked:!this.state.isChecked
            })
          }}
          checked={this.state.isChecked}
          
        />
      
          <Text style={styles.Textsub}>I agree to</Text>
            <TouchableHighlight onPress= {() => {this.props.navigation.navigate('Next')}}>  
              <Text style= {{marginTop: 10,color: 'orange'}}>Terms and Conditions.</Text>
            </TouchableHighlight>
        </View>
        </View>
        <Text style={{color: 'red',fontSize: 15}}>{this.state.EPassword}</Text>

        <Text style={{color: 'red',fontSize: 15}}>{this.state.ECheck}</Text>

        <View style={{justifyContent: 'center',alignItems: 'center'}}>
        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener()}>
          <Text style={styles.signUpText}>Confirm</Text>
        </TouchableHighlight>
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
    resizeMode: "cover",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    
  },
  inputContainer: {
      backgroundColor: '#FFFFFF',
      borderRadius:10,
      //borderBottomWidth: 1,
      //marginBottom:10,
      flexDirection: 'row',
  },
  inputs:{
      height:55,
      marginLeft:30,
      borderBottomColor: '#FFFFFF',
      flex:1,

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
    //margin: 40
  },
  signUpText: {
    color: 'white',
    fontSize: 17
  },
  Text: {
      textAlign: 'center',
      fontSize: 20,
      padding: 10,
      color: 'white',
  },
  Textsub: {
    fontSize: 17,
    padding: 10,
    color: 'white',
},
Texts: {
  fontSize: 17,
  padding: 10,
  color: 'blue'
},
  TextLink: {
    textAlign: 'center',
    fontSize: 20,
    padding: 30,
    color: 'green'
  }
});
 