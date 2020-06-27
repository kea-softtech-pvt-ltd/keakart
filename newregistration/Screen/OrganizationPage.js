import React, { Component } from 'react';
import {StyleSheet,Text,View,TextInput,Button,TouchableHighlight,Image,Alert} from 'react-native';
//import RNPickerSelect from 'react-native-picker-select';

export default class OrganizationScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      MobileNumber: '',
      ContactPersone   : '',
      Joub: '',
      items2: [
        {
          label: 'Softwear Devloper',
          value: 'Softwear Devloper',
        },
        {
          label: 'Softwear Trenye',
          value: 'Softwear Trenye',
       },
        {
          label: 'Trenear',
          value: 'Trenear',
        },
        {
          label: 'Softwear Devloper',
          value: 'Softwear Devloper',
        },
        {
          label: 'Softwear Devloper',
          value: 'Softwear Devloper',
        },
        {
          label: 'Softwear Devloper',
          value: 'Softwear Devloper',
        },
      ]
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Text}>Organizational</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(fullName) => this.setState({fullName})}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Contact Number"
              maxLength={10}  
              keyboardType={'phone-pad'}
              underlineColorAndroid='transparent'
              onChangeText={(MobileNumber) => this.setState({MobileNumber})}/>
        </View>

        <View style={styles.inputContainer}>
          {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/> */}
          <TextInput style={styles.inputs}
              placeholder="Contact Persone"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(ContactPersone) => this.setState({ContactPersone})}
            />
        </View>
        
        {/* <View style={styles.inputContainer}> */}
          
        {/* <RNPickerSelect style={styles.inputs}
           placeholder={{
            label: 'Select Product',
            value: null,
          }}
            items={this.state.items2}
            onValueChange={(value) => {
            this.setState({
                Joub: value,
            });
          }}
          value={this.state.Joub}
        /> */}
        {/* </View>  */}

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener('sign_up')}>
          <Text style={styles.signUpText}>Submit</Text>
        </TouchableHighlight>

       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b5ec',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:350,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:30,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#F9B7FF",
  },
  signUpText: {
    color: 'white',
  },
  Text: {
      textAlign: 'center',
      fontSize: 30,
      padding: 30,
      color: 'white'
  },
  TextLink: {
    textAlign: 'center',
    fontSize: 20,
    padding: 30,
    color: 'green'
  }
});
 