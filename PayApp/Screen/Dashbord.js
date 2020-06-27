import React, { Component } from 'react';
import {StyleSheet,Text,View,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import ScrollImage from './ScrollImage';

export default class DashbordScreen extends Component{
    render(){
        return(
            <View style={{flex: 1,}}>
            <View style={styles.inputContainer}>
                <View style={styles.Container} style={{flex: 1,alignItems: 'center',padding: 10,}}>
                    <View style={styles.circal}>
                        <Icon name={"percent"}  size={25} color="#fff" />  
                    </View>
                        <Text style={styles.Text}>View All Offers</Text>  
                </View>
                <View style={styles.Container} style={{flex: 1,alignItems: 'center',padding: 10,}}>
                    <View style={styles.circalReword}>
                        <Icon name={"gift"}  size={30} color="#fff" />  
                    </View>
                        <Text style={styles.Text}>View All Rewords</Text>  
                </View>
                <View style={styles.Container} style={{flex: 1,alignItems: 'center',padding: 10}}>
                    <View style={styles.circalRefer}>
                        <Icon name={"money"}  size={30} color="#fff" />  
                    </View>
                        <Text style={styles.Text}>Refer & Earn</Text>  
                </View>
             </View>
             <ScrollView>
             <ScrollImage />
             <View style={{flex:1,padding: 10}}>
                <Text style={styles.TextHeading}>Reacharge & Pay Bills</Text>
                <View style={styles.recharge}>
                    <View style={styles.iconstyle}>
                        <Icon name={"mobile"}  size={40} style={styles.Icon}
                            onPress={()=> this.props.navigation.navigate("Recharge")} />
                        <Text style={styles.Textsub}>Recharge</Text> 
                    </View>

                     <View style={styles.iconstyle}>
                        <Icon name={"bolt"}  size={40} style={styles.Icon} />
                        <Text style={styles.Textsub}>Lite Bill</Text> 
                    </View>

                    
                    <View style={styles.iconstyle}>
                        <Icon name={"cutlery"}  size={40} style={styles.Icon} />
                        <Text style={styles.Textsub}>Food</Text> 
                    </View>

                    
                    <View style={styles.iconstyle}>
                        <Icon name={"bus"}  size={40} style={styles.Icon} />
                        <Text style={styles.Textsub}>Book By</Text> 
                    </View>
                </View>
                <View style={styles.recharge}>
                    <View style={styles.iconstyle}>
                        <Icon name={"heartbeat"}  size={40} style={styles.Icon} />
                        <Text style={styles.Textsub}>Health</Text> 
                    </View>

                     <View style={styles.iconstyle}>
                        <Icon name={"subway"}  size={40} style={styles.Icon} />
                        <Text style={styles.Textsub}>Train Ticket</Text> 
                    </View>

                    <View style={styles.iconstyle}>
                        <Icon name={"amazon"}  size={40} style={styles.Icon} />
                        <Text style={styles.Textsub}>amazon</Text> 
                    </View>

                    <View style={styles.iconstyle}>
                        <Icon name={"music"}  size={40} style={styles.Icon} />
                        <Text style={styles.Textsub}>Music</Text> 
                    </View>    
                </View>
                <View style={styles.recharge}>
                    <View style={styles.iconstyle}>
                        <Icon name={"book"}  size={40} style={styles.Icon} />
                        <Text style={styles.Textsub}>Book</Text> 
                    </View>

                     <View style={styles.iconstyle}>
                        <Icon name={"camera"}  size={40} style={styles.Icon} />
                        <Text style={styles.Textsub}>Camera</Text> 
                    </View>

                    <View style={styles.iconstyle}>
                        <Icon name={"calendar"}  size={40} style={styles.Icon} />
                        <Text style={styles.Textsub}>Calendar</Text> 
                    </View>

                    <View style={styles.iconstyle}>
                        <Icon name={"hdd-o"}  size={40} style={styles.Icon} />
                        <Text style={styles.Textsub}>Recharge</Text> 
                    </View>    
                </View>
                <View style={styles.recharge}>
                    <View style={styles.iconstyle}>
                        <Icon name={"truck"}  size={40} style={styles.Icon} />
                        <Text style={styles.Textsub}>Delevary</Text> 
                    </View>

                     <View style={styles.iconstyle}>
                        <Icon name={"pinterest"}  size={40} style={styles.Icon} />
                        <Text style={styles.Textsub}>Pinterest</Text> 
                    </View>

                    <View style={styles.iconstyle}>
                        <Icon name={"fighter-jet"}  size={40} style={styles.Icon} />
                        <Text style={styles.Textsub}>Book</Text> 
                    </View>

                    <View style={styles.iconstyle}>
                        <Icon name={"gamepad"}  size={40} style={styles.Icon} />
                        <Text style={styles.Textsub}>Game</Text> 
                    </View>    
                </View>
             </View>
            
             </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding:20,
        flexDirection: "column",
    },
    circal: {
        borderWidth:1,
        borderColor:'#ba55d3',
        alignItems:'center',
        justifyContent:'center',
        width:50,
        height:50,
        backgroundColor:'#ba55d3',
        borderRadius:50,      
    },
    circalReword: {
        borderWidth:1,
        borderColor:'red',
        alignItems:'center',
        justifyContent:'center',
        width:50,
        height:50,
        backgroundColor:'red',
        borderRadius:50,      
    },
    circalRefer: {
        borderWidth:1,
        borderColor:'darkorange',
        alignItems:'center',
        justifyContent:'center',
        width:50,
        height:50,
        backgroundColor:'darkorange',
        borderRadius:50,      
    }, 
    Text: {
        fontSize: 15,
        paddingTop: 10,
    },
    Textsub:{
        fontSize: 15,
    },
    inputContainer: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 130,
        flexDirection: 'row',
        padding: 10,    
    },
    TextHeading:{
        fontSize: 20
    },
    recharge:{
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10
    },
    Icon: {
        padding: 10,
        
    },
    iconstyle: {
        flex: 1,
        flexDirection: 'column',justifyContent: 'center',alignItems: 'center',
    }
})