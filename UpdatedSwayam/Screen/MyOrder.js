import React,{Component} from 'react';
import {View, Text,StyleSheet,TouchableHighlight,Image,Dimensions,ScrollView,} from 'react-native';
import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 8;

class MyOrder extends Component {
    constructor(props){
        super(props)
        this.state={
            productname: 'Hikvision cctv camera with gladd 2d9a side free',
            Delivery: 'Delivered on Sep 23, 2020'
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
                            <Text style={styles.Texthed}>My Order</Text>
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
                    <View style={{backgroundColor: '#dcdcdc',marginBottom: 20}}>
                        <View  style={styles.MainContenar}>
                            <TouchableHighlight>
                                <Text style={styles.Text}>Select the item You Want to track, return or need help with</Text>
                            </TouchableHighlight>
                        </View>
                        <View  style={styles.MainContenar}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 2}}>
                                    <Text style={styles.Text}>{this.state.productname}</Text>
                                    <Text style={{padding: 10}}>{this.state.Delivery}</Text>
                                </View>
                                <View style={{flex: 1}}>
                                <Image
                                    style={ styles.Image}    
                                    source={require('../assets/cctv1.png')}
                                />
                                </View>
                            </View>
                            <View style={styles.HorizontalLine}></View>
                            <View style={{flexDirection: 'row-reverse',}}>
                                <TouchableHighlight onPress={()=> this.state.navigation.navigate('MyOrder')}>
                                <Text style={styles.TextColor}>Write a Review</Text>
                                </TouchableHighlight>
                            </View>
                        </View> 
                        <View  style={styles.MainContenar}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 2}}>
                                    <Text style={styles.Text}>{this.state.productname}</Text>
                                    <Text style={{padding: 10}}>{this.state.Delivery}</Text>
                                </View>
                                <View style={{flex: 1}}>
                                <Image
                                    style={ styles.Image}    
                                    source={require('../assets/cctv2.png')}
                                />
                                </View>
                            </View>
                            <View style={styles.HorizontalLine}></View>
                            <View style={{flexDirection: 'row-reverse',}}>
                                <TouchableHighlight onPress={()=> this.state.navigation.navigate('MyOrder')}>
                                <Text style={styles.TextColor}>Write a Review</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View  style={styles.MainContenar}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 2}}>
                                    <Text style={styles.Text}>{this.state.productname}</Text>
                                    <Text style={{padding: 10}}>{this.state.Delivery}</Text>
                                </View>
                                <View style={{flex: 1}}>
                                <Image
                                    style={ styles.Image}    
                                    source={require('../assets/cctv3.png')}
                                />
                                </View>
                            </View>
                            <View style={styles.HorizontalLine}></View>
                            <View style={{flexDirection: 'row-reverse',}}>
                                <TouchableHighlight onPress={()=> this.state.navigation.navigate('MyOrder')}>
                                <Text style={styles.TextColor}>Write a Review</Text>
                                </TouchableHighlight>
                            </View>
                        </View>  
                    </View>

                </ScrollView>
            </View>
        )
    }
}

export default MyOrder;

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
        color: Colors.primaryColor,
    },
    Texthed:{
        fontSize: 20,
        color: 'white',
        paddingTop: 5,
    },
    
    MainContenar: {
        marginTop: 10,
        marginBottom: 5,
        shadowColor: '#dcdcdc',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 20,    
    },
    Image:{
        width: width - 350,
        height: height,
      }
})