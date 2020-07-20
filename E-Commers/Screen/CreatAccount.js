import React, {Component} from 'react';
import {View, Text,StyleSheet,Image,TouchableHighlight,TextInput, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors'

class CreatAccount extends Component {
    constructor(props){
        super(props);
        this.state={
          name : '',
          MobileNumber: '',
          email : '',
          password: '',
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
                <View ><Text style={styles.TextHed}>Creat Account</Text></View>
                <View ><Text style={styles.Text}>Name</Text></View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Enter Your Name"
                        underlineColorAndroid='transparent'
                        onChangeText={(value) => this.setState({name: value})}
                    />
                </View>
                <View ><Text style={styles.Text}>MobileNumber</Text></View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="MobileNumber"
                        maxLength={10}  
                        keyboardType={'phone-pad'}
                        underlineColorAndroid='transparent'
                        onChangeText={(value) => this.setState({MobileNumber: value})}
                    />
                </View>
                <View ><Text style={styles.Text}>Email</Text></View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        underlineColorAndroid='transparent'
                        onChangeText={(value) => this.setState({email: value})}
                    />
                </View>
                <View ><Text style={styles.Text}>Password</Text></View>
                <View style={styles.inputContainer} >
                    <TextInput style={styles.inputs}
                        placeholder="At least 6 character"
                        underlineColorAndroid='transparent'
                        secureTextEntry={this.state.Password}
                        onChangeText={(value) => this.setState({Password: value})}
                    />
                        <TouchableHighlight onPress={this.onIconPress}>
                            <Icon name={this.state.iconName}  size={25} style={{padding:15}} /> 
                        </TouchableHighlight> 
                </View>
                <View style ={{marginTop: 10}} ><Text style={styles.Text}>We will send you a text to verify your phone.
                    Message and Data rates may apply.</Text>
                </View>
                <View style={{margin: 30,}} >
                    <Button 
                        title= ' Continue'
                        style={styles.inputContainerButton}
                        color = {Colors.primaryColor}
                        onPress = {()=> this.props.navigation.navigate('OTP')}
                    /> 
                </View>
            </View>
        )
    }
}

export default CreatAccount ;

const styles = StyleSheet.create({
    Contener : {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        margin:20
    },
    Image : {
        width: 50, 
        height: 50,
        resizeMode: 'cover',
        borderRadius: 30
    },
    TextHed: {
        textAlign: 'center',
        fontSize: 25,
        padding: 10,
    
    },
    Text: {
        fontSize: 17,
        paddingLeft: 30,
        padding: 10
    
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
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30,
        
    },
    inputs:{
        height:55,
        marginLeft:10,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
});
