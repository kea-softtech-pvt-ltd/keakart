import React, {Component} from 'react';
import {View, Text,StyleSheet,Image,TouchableHighlight,TextInput, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors'

class OTPScreen extends Component {
    constructor(props){
        super(props);
        this.state={
          OTPNumber: ''
        }
    }

    Validation_field=() =>{
        const {OTPNumber}= this.state;
        if (OTPNumber=="" ){
          this.setState ({OtpNumber: 'Pleas Enter OTP Numbers'});
        }
         this.props.navigation.navigate('AccountDetails')

      }
    
     
    render() {
        return(
            <View style={styles.Contener}>
                 <View style={{alignItems: "center",padding: 10,}}>
                    <TouchableHighlight>
                        <Image
                            style={styles.Image}
                            source={require('../assets/cctv1.png')}
                        />
                    </TouchableHighlight> 
                </View>
                <View ><Text style={styles.TextHed}>Verify Mobile Number</Text></View>
                <View ><Text style={styles.Text}>A text with a One Time Password (OTP) has been sent to your
                     mobile number: 9890263668 Change</Text></View>
                <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                    <Text style={styles.Text}>Enter OTP</Text>
                    <TouchableHighlight><Text style={styles.Textresend}>Resend OTP</Text></TouchableHighlight>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder=""
                        maxLength={6}  
                        keyboardType={'phone-pad'}
                        underlineColorAndroid='transparent'
                        onChangeText={(value) => this.setState({OTPNumber: value})}
                    />
                </View>
                <Text style={{color: 'red',fontSize: 15,paddingLeft: 30}}>{this.state.OtpNumber}</Text>
                <View style={{margin: 30,}} >
                    <Button 
                        title= 'Creat Your App Account'
                        style={styles.inputContainerButton}
                        color = {Colors.primaryColor}
                        onPress={() => this.Validation_field()}
                    /> 
                </View>
                <View ><Text style={styles.Text}>By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.</Text></View>
            </View>
        )
    }
}

export default OTPScreen ;

const styles = StyleSheet.create({
    Contener : {
        flex: 1,
        justifyContent: 'center',
        margin: 20,
        borderRadius: 10,
        borderWidth: 1,
        
    },
    Image : {
        width: 50, 
        height: 50,
        resizeMode: 'cover',
        borderRadius: 30
    },
    TextHed: {
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
    
    },
    Text: {
        fontSize: 20,
        paddingLeft: 30,
        padding: 10
    
    },
    Textresend: {
        fontSize: 20,
        paddingRight: 30,
        padding: 10,
        color: Colors.primaryColor
    
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius:10,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 4,
        marginLeft: 30,
        marginRight: 30,
       
    },
    inputContainerButton: {
        backgroundColor: '#FFFFFF',
        borderRadius:10,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'black',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30,
        height:55,
    },
    inputs:{
        height:55,
        marginLeft:10,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
});
