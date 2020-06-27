import React, { Component } from 'react';
import {StyleSheet,Text,View,TextInput,Button,TouchableHighlight,Image,Alert,tuch} from 'react-native';

import FilePickerManager from 'react-native-file-picker';
//import DocumentPicker from 'react-native-document-picker';

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      MobileNumber: '',
      email   : '',
      file: undefined
    }
  }

  // selectFileTapped() {
    
  //   try {
  //     const res = await DocumentPicker.pick({
  //       type: [DocumentPicker.types.pdf],
  //     });
  //     console.log(
  //       res.uri,
  //       res.type, // mime type
  //       res.name,
  //       res.size
  //     );
  //   } catch (err) {
  //     if (DocumentPicker.isCancel(err)) {
  //       // User cancelled the picker, exit any dialogs or menus and move on
  //     } else {
  //       throw err;
  //     }
  //   }
  // }


  selectFileTapped() {
    
    FilePickerManager.showFilePicker(null, (response) => {
      console.log('Response = ', response);
     
      if (response.didCancel) {
        console.log('User cancelled file picker');
      }
      else if (response.error) {
        console.log('FilePickerManager Error: ', response.error);
      }
      else {
        this.setState({ 
          file: response
        });
      }
    });
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Text}>Registration</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(Name) => this.setState({Name})}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="MobileNumber"
              maxLength={10}  
              keyboardType={'phone-pad'}
              underlineColorAndroid='transparent'
              onChangeText={(MobileNumber) => this.setState({MobileNumber})}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}
            />
        </View>
        
        <View style={styles.inputContainer}>
        <Text style={styles.inputs}>
        {JSON.stringify(this.state.file)}
        </Text>

          <Button
            title= 'Couse File'
            style={styles.inputs}
            onPress={this.selectFileTapped.bind(this)}
          />
            
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener('sign_up')}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>
        <TouchableHighlight  onPress={()=> this.props.navigation.navigate('Organization')}>
          <Text style={styles.TextLink}>If You Are Organization Visite Hear</Text>
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
 