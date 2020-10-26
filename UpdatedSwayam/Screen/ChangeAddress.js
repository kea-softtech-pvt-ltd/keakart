import React,{Component} from 'react';
import {View, Text,StyleSheet,TouchableHighlight,Image,Dimensions,ScrollView,} from 'react-native';
import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 6;

class ChangeAddress extends Component {
    constructor(props){
        super(props)
        this.state={
            MobileNumber: '+919878345950',
            name: 'Snehal Pawar',
            adderss: 'Kaleshwar Nager, Near aplogist Hospital, Wakdevadi Rode, Nanded pin-342606'
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
                                onPress={()=>this.props.navigation.navigate('MyAccount')}    
                            />
                            <Text style={styles.Texthed}>My Cards & Wallets</Text>
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
                    <View style={{backgroundColor: '#dcdcdc',marginBottom: 20}}>
                        <View  style={styles.MainContenar}>
                            <TouchableHighlight>
                                <Text style={styles.TextColor}>+ Add a new address</Text>
                            </TouchableHighlight>
                        </View>
                        <Text style={{paddingTop: 20,padding:10}}>1 SAVED ADDEESS</Text>
                        <View  style={styles.MainContenar}>
                            <Text style={styles.Text}>{this.state.name}</Text>
                            <Text  style={{paddingTop: 10,paddingBottom: 10,fontSize: 15,}}>{this.state.adderss} </Text>
                            <Text  style={{paddingTop: 10,paddingBottom: 10,fontSize: 15}}>{this.state.MobileNumber} </Text>
                            <View style={styles.HorizontalLine}></View>
                            
                        </View> 
                    </View>

                </ScrollView>
            </View>
        )
    }
}

export default ChangeAddress;

const styles = StyleSheet.create({
    Contener: {
        flex: 1,
        backgroundColor: '#dcdcdc',
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
    HorizontalLine: {
        backgroundColor: '#A2A2A2',
        height: 1,
        marginTop: 10,
        marginBottom:10
    },
    Text:{
        fontSize: 17
    },
    TextColor:{
        fontSize: 17,
        color: Colors.primaryColor
    },
    Texthed:{
        fontSize: 20,
        color: 'white',
        paddingTop: 5,
    },
    
    MainContenar: {
        marginTop: 20,
        marginBottom: 10,
        shadowColor: '#dcdcdc',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 20,    
    }
})