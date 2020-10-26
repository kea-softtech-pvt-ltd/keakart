import React, {Component} from 'react';
import {View, Text,StyleSheet,Image,TouchableHighlight,TextInput, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors'

class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state={
          Value: ''
        }
    }

    Validation_field=() =>{
        const {Value}= this.state;
        if (Value=="" ){
          this.setState ({OtpNumber: 'Pleas Enter OTP Numbers'});
        }
         this.props.navigation.navigate('Home')

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
                <View ><Text style={styles.TextHed}>Login</Text></View>
                <Text style={styles.Text}>Email or Mobile Phon Number</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder=""
                        maxLength={6}  
                        keyboardType={'phone-pad'}
                        underlineColorAndroid='transparent'
                        onChangeText={(value) => this.setState({Value: value})}
                    />
                </View>
                <Text style={{color: 'red',fontSize: 15,paddingLeft: 30}}>{this.state.Value}</Text>
                <View style={{margin: 30,}} >
                    <Button 
                        title= 'Continue'
                        style={styles.inputContainerButton}
                        color = {Colors.primaryColor}
                        onPress={() => this.Validation_field()}
                    /> 
                </View>
                <View ><Text style={styles.Text}>By creating, your agree to E-commers Condition of use and Privacy Police</Text></View>
                
            </View>
        )
    }
}

export default LoginScreen ;

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
