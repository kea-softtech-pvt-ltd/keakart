import React, {Component} from 'react';
import {View, Text,StyleSheet,Image,TouchableHighlight,TextInput, Button,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 4;

class AddNewCard extends Component {
    constructor(props){
        super(props);
        this.state={
          CardNumber: '',
          MMYY: '',
          Cvv: ''
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
                <View style={styles.HederContener}>
                    <View style= {styles.HederIcon}>
                        <Icon
                            name="angle-left"
                            size={35}
                            color={'white'}
                            onPress={()=>this.props.navigation.navigate('MyAccount')}    
                        />
                        <Text style={styles.Texthed}>Add Card</Text>
                        <Icon
                            name="search"
                            size={25}
                            style={{paddingLeft: 200}}
                            color={'white'}
                            //onPress={this.retrieveData}   
                        /> 
                        <Icon
                            name="shopping-cart"
                            size={25}
                            color={'white'}
                            //onPress={this.retrieveData}   
                        />
                    </View>
                </View>
                <View style={{justifyContent:'center',alignItems: 'center'}}>
                    <Image 
                        style={styles.Image}
                        source={require('../assets/card.png')}
                    />
                </View>
                <View style={{padding: 10}}>
                    <Text>Card Number</Text>
                    <TextInput style={styles.TextInput}
                        placeholder= 'Card Number'
                        keyboardType = 'number-pad'
                        maxLength = {20}
                        underlineColorAndroid='gray'
                        onChangeText={(value) => this.setState({CardNumber: value})}
                    />
               
                <TextInput style={styles.TextInput}
                    placeholder= 'MM/YY'
                    keyboardType = 'number-pad'
                    maxLength = {2}
                    underlineColorAndroid='gray'
                    onChangeText={(value) => this.setState({MMYY: value})}
                />
                <TextInput style={styles.TextInput}
                    placeholder= 'Cvv'
                    keyboardType = 'number-pad'
                    maxLength = {3}
                    underlineColorAndroid='gray'
                    onChangeText={(value) => this.setState({Cvv: value})}
                />
                 </View>
                <View style={{justifyContent: 'center',alignItems: 'center'}}>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('')}>
                        <Text style={styles.TextButton}>SUBMIT</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default AddNewCard ;

const styles = StyleSheet.create({
    HederContener: {
        backgroundColor: Colors.primaryColor,
        height: 85,
    },
    Image:{
        width: width - 200,
        height: height,
        resizeMode: 'cover',
        marginTop: 20,
        borderRadius: 15
    },
    HederIcon: {
        flexDirection:'row',
        justifyContent: 'space-between',
        margin: 20,
        marginTop: 35,
        
    },
    Texthed:{
        fontSize: 20,
        color: 'white',
        paddingTop: 5,
    },
    Contener : {
        flex: 1,
    
    },
    TextInput: {
        height:55,
        marginLeft:10,
        marginBottom: 30
    },
    TextButton: {
        alignItems: 'center',
        fontSize: 20,
        color: Colors.primaryColor,
        padding: 10
    },
  
});
