import React,{Component} from 'react';
import {View, Text,StyleSheet,TouchableHighlight,Image,Dimensions,ScrollView} from 'react-native';
import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 8;

class PasswordChange extends Component {
    static navigationOptions = ({screenProps}) =>({
       
        headerLeft: ( 
            <TouchableHighlight style={{ marginLeft: 10 }} onPress={()=> screenProps.openDraw()}>
            <Image
                style={{ width: 32, height: 35,}}
                source={require('../assets/drawer.png')}
            />
            </TouchableHighlight> 
              
        ),
        headerTitle: "KeaKart",
        headerTitleStyle:{flex: 1,fontSize: 20, textAlign: 'center', color: 'white'},

    })
    constructor(props){
        super(props)
        this.state={
            NewPassword: '',
            RetypePassword: '',
            Otp: '',
            MobileNumber: '+9198783459'
        }
    }
    render(){
        return(
            <View style={styles.Contener}>
                <ScrollView>
                <View style={styles.HederContener}>
                        <View style= {styles.HederIcon}>
                            <Icon
                                name="angle-left"
                                size={35}
                                color={'white'}
                                onPress={()=>this.props.navigation.navigate('AccountDetails')}    
                            />
                            <Text style={styles.Texthed}>Change Password</Text>
                            <Icon
                                name="search"
                                size={25}
                                style={{paddingLeft: 100}}
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
                    <View style={styles.MainContener}>
                        
                        <Text style={{paddingLeft: 10}}>Mobile Number</Text>
                        <Text style={{fontSize:17,paddingLeft: 10,paddingBottom: 40}}>{this.state.MobileNumber}</Text>
                        <TextInput style={styles.TextInput}
                            placeholder= 'New Password'
                            underlineColorAndroid='gray'
                            onChangeText={(value) => this.setState({NewPassword: value})}
                        />
                        <TextInput style={styles.TextInput}
                            placeholder= 'Retype Password'
                            underlineColorAndroid='gray'
                            onChangeText={(value) => this.setState({RetypePassword: value})}
                        />
                        <Text style={{fontSize:17,paddingLeft: 10}}>Enter OTP send to{this.state.MobileNumber}</Text>
                        <View style={styles.inputContainer} >
                            <TextInput style={styles.inputs}
                                placeholder="OTP"
                                underlineColorAndroid='gray'
                                onChangeText={(value) => this.setState({Otp: value})}
                            />
                                <TouchableHighlight>
                                    <Text style={styles.Update}>Resend</Text> 
                                </TouchableHighlight> 
                        </View>
                        <View style={styles.Button}>
                            <TouchableHighlight>
                                <Text style={styles.Text}>CANCLE</Text>
                            </TouchableHighlight>
                            <TouchableHighlight>
                                <Text style={styles.Text}>SAVE</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default PasswordChange;

const styles = StyleSheet.create({
    Contener: {
        flex: 1,
    },
    HederContener: {
        backgroundColor: Colors.primaryColor,
        height: 85,
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
    MainContener : {
        flex: 1,
        padding:20
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
    inputContainer: {
        flexDirection: 'row',
        paddingTop:20
    },
    inputs:{
        height:55,
        marginLeft:10,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    Update: {
        color: Colors.primaryColor,
        fontSize: 17,
        paddingTop:20,
        paddingRight: 20
    },
    HorizontalLine: {
        backgroundColor: '#A2A2A2',
        height: 1,
        marginTop: 10,
        marginBottom:10
    },
    Text:{
        fontSize: 17
    },
    Button:{
        flexDirection:'row',
        justifyContent: 'space-around',
        padding: 30
    }
})