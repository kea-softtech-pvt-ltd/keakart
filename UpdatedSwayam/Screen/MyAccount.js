import React,{Component} from 'react';
import {View, Text,StyleSheet,TouchableHighlight,Image,Dimensions,ScrollView} from 'react-native';
import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 10;

class MyAccountDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            FirstName: '',
            LastName: '',
            Email: '',
            MobileNumber: '+919878345950',
            name: 'Pawar Snehal',
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
                                onPress={()=>this.props.navigation.navigate('Dashboard')}    
                            />
                            <Text style={styles.Texthed}>My Account</Text>
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
                        <View style={{justifyContent: 'center',alignItems: 'center'}}>
                        <TouchableHighlight >
                            <Image
                                style={styles.Image}
                                source={require('../assets/images.jpg')}
                            />
                        </TouchableHighlight> 
                            <Text style={styles.Texthed}>{this.state.name}</Text>
                            <Text style={styles.Textsuba}>{this.state.MobileNumber}</Text>
                        </View>
                        <View style={{flexDirection: 'row-reverse',paddingLeft: 30}}>
                            <Icon
                                name="pencil"
                                size={25}
                                color={'white'}
                                onPress={()=>this.props.navigation.navigate('AccountDetails')}   
                            />
                        </View>
                    </View>
                    <View style={{backgroundColor: '#dcdcdc',marginBottom: 20}}>
                        <View  style={styles.MainContenar}>
                            <Text style={styles.Text}>My Order</Text>
                            <Text  style={{paddingTop: 10,paddingBottom: 10,fontSize: 15}}>Show Your ALL Order Hear </Text>
                            <View style={styles.HorizontalLine}></View>
                            <View style={{flexDirection: 'row-reverse',}}>
                                <TouchableHighlight onPress={()=> this.props.navigation.navigate('MyOrder')}>
                                <Text style={styles.TextColor}>VIEW ALL ORDER</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View  style={styles.MainContenar}>
                            <Text style={styles.Text}>My Cards & Wallet</Text>
                            <View style={styles.HorizontalLine}></View>
                            <View style={{flexDirection: 'row-reverse',}}>
                                <TouchableHighlight onPress={()=>this.props.navigation.navigate('MyCardWallet')}>
                                <Text style={styles.TextColor}>VIEW Details</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View  style={styles.MainContenar}>
                            <Text style={styles.Text}>My Questions & Answers</Text>
                            <View style={styles.HorizontalLine}></View>
                            <View style={{flexDirection: 'row-reverse',}}>
                                <TouchableHighlight>
                                <Text style={styles.TextColor}>VIEW Your Q&A</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View  style={styles.MainContenar}>
                            <Text style={styles.Text}>My Addresses</Text>
                            <Text style={{paddingTop: 10,paddingBottom: 10,fontSize: 15}}>{this.state.adderss}</Text>
                            <View style={styles.HorizontalLine}></View>
                            <View style={{flexDirection: 'row-reverse',}}>
                                <TouchableHighlight onPress={()=>this.props.navigation.navigate('NewAddress')}>
                                <Text style={styles.TextColor}>VIEW More</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </View>
        )
    }
}

export default MyAccountDetails;

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
        width: width - 400,
        height: height,
        resizeMode: 'cover',
        borderRadius: 100,
        // marginTop:50 
    },
    HederIcon: {
        flexDirection:'row',
        justifyContent: 'space-between',
        margin: 30,
        marginTop: 40
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
        paddingTop: 5
    },
    Textsuba:{
        fontSize: 15,
        color: 'white',
        paddingTop: 20
    },
    MainContenar: {
        // backgroundColor: 'white',
        marginTop: 10,
        marginLeft:10,
        marginRight: 10,
        marginBottom: 5,
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