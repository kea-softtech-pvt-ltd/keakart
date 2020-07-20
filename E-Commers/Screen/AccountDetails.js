import React,{Component} from 'react';
import {View, Text,StyleSheet,TouchableHighlight,Image,Dimensions,ScrollView} from 'react-native';
import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 8;

class AccountDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            FirstName: '',
            LastName: '',
            Email: '',
            MobileNumber: '+919878345950'
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
                                onPress={()=>this.props.navigation.navigate('CreatAccount')}    
                            />
                            <Icon
                                name="search"
                                size={25}
                                style={{paddingLeft: 300}}
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
                        <TouchableHighlight style={{justifyContent: 'center',alignItems: 'center'}}>
                            <Image
                                style={styles.Image}
                                source={require('../assets/images.jpg')}
                            />
                        </TouchableHighlight> 
                    </View>
                    <View style={styles.MainContener}>
                        <TextInput style={styles.TextInput}
                            placeholder= 'First Name'
                            underlineColorAndroid='gray'
                            onChangeText={(value) => this.setState({FirstName: value})}
                        />
                        <TextInput style={styles.TextInput}
                            placeholder= 'Last Name'
                            underlineColorAndroid='gray'
                            onChangeText={(value) => this.setState({LastName: value})}
                        />
                        <View style={{justifyContent: 'center',alignItems: 'center'}}>
                            <TouchableHighlight onPress={()=>this.props.navigation.navigate('Login')}>
                                <Text style={styles.TextButton}>SUBMIT</Text>
                            </TouchableHighlight>
                        </View>
                        <Text style={{paddingLeft: 10}}>Mobile Number</Text>
                        <Text style={{fontSize:17,paddingLeft: 10}}>{this.state.MobileNumber}</Text>
                        <View style={styles.inputContainer} >
                            <TextInput style={styles.inputs}
                                placeholder="Email ID"
                                underlineColorAndroid='gray'
                                onChangeText={(value) => this.setState({Email: value})}
                            />
                                <TouchableHighlight>
                                    <Text style={styles.Update}>Update</Text> 
                                </TouchableHighlight> 
                        </View>
                      
                        <View style={{marginTop: 40}}>
                            <View style={styles.HorizontalLine}></View>
                                <TouchableHighlight onPress={()=>this.props.navigation.navigate('Password')}>
                                    <Text style={styles.Text}>Change Password</Text>
                                </TouchableHighlight>
                            <View style={styles.HorizontalLine}></View>
                        </View>
                        
                    </View>

                </ScrollView>
            </View>
        )
    }
}

export default AccountDetails;

const styles = StyleSheet.create({
    Contener: {
        flex: 1,
    },
    HederContener: {
        backgroundColor: Colors.primaryColor,
        height: 100,
        height: 300,
    },
    Image:{
        width: width - 380,
        height: height,
        resizeMode: 'cover',
        borderRadius: 100,
        marginTop:50 
    },
    HederIcon: {
        flexDirection:'row',
        justifyContent: 'space-between',
        margin: 30,
        marginTop: 40
    },
    MainContener : {
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
    }
})