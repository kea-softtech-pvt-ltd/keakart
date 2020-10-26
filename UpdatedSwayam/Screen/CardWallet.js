import React,{Component} from 'react';
import {View, Text,StyleSheet,TouchableHighlight,Image,Dimensions,ScrollView,} from 'react-native';
import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 6;

class MyCardWallet extends Component {
    constructor(props){
        super(props)
        this.state={
        
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
                            <Text style={styles.Text}>Gift Cards</Text>
                            <Text  style={{paddingTop: 10,paddingBottom: 10,fontSize: 15}}>Have you received a gidt cards? </Text>
                            <View style={styles.HorizontalLine}></View>
                            <View style={{flexDirection: 'row-reverse',}}>
                                <TouchableHighlight>
                                <Text style={styles.TextColor}>ADD GIFT CARDS</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View  style={styles.MainContenar}>
                            <Text style={styles.Text}>Saved Cards</Text>
                                <Image 
                                    style={styles.Image}
                                    source={require('../assets/card.png')}
                                />
                            <View style={styles.HorizontalLine}></View>
                            <View style={{flexDirection: 'row-reverse',}}>
                                <TouchableHighlight onPress={()=>this.props.navigation.navigate('AddNewCard')}>
                                <Text style={styles.TextColor}>ADD NEW CARD</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        
                    </View>

                </ScrollView>
            </View>
        )
    }
}

export default MyCardWallet;

const styles = StyleSheet.create({
    Contener: {
        flex: 1,
    },
    HederContener: {
        backgroundColor: Colors.primaryColor,
        height: 85,
    },
    Image:{
        width: width - 250,
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
    Textsuba:{
        fontSize: 15,
        color: 'white',
        paddingTop: 20
    },
    MainContenar: {
        // backgroundColor: 'white',
        marginTop: 20,
        marginLeft:20,
        marginRight: 20,
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