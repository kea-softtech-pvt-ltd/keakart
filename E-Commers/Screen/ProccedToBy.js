import React,{component, Component } from 'react';
import {View, StyleSheet,Text,TouchableHighlight,Image,Dimensions,Button, Alert} from 'react-native';
import Colors from '../constants/Colors';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 10;

class ProccedToBy extends Component{
    static navigationOptions = {
        title: 'Order Placed',
    }
    constructor(props){
        super(props)
        this.state={
            AccountNumber:  '180004835678922038',
            BankName: "State Bank OF India",
            Ammount: 2261,
        }
    }

    Validation_field=() =>{
        
        Alert.alert("Congratulation Your Order have Place Succesfully")
         this.props.navigation.navigate('Home')

    }

    render(){
        return(
            <View style={styles.Contener}>
                <View style={styles.RowContener}>
                    <View style={{flexDirection: 'column',flex:1 }}>
                        <Image
                            style={ styles.Image}    
                            source={require('../assets/cctv1.png')}
                        />
                    </View>
                    <View style={{flexDirection: 'column',flex: 2,justifyContent: 'center'}}>
                        <Text style={styles.Text}>Hikvision Cctv Camera</Text>
                    </View> 
                </View>
                <View style={{paddingTop: 30,paddingBottom: 30}}>
                    <Text style={styles.Text}>Debited From</Text>
                        <View style={{paddingTop: 20,paddingBottom: 20}}>
                            <Text style={styles.Text}>Account Number:  {this.state.AccountNumber}</Text>
                            <Text style={styles.Text}>Bank Name:  {this.state.BankName}</Text>
                        </View>
                </View>
                <View style={{flexDirection: 'row',justifyContent: 'space-between',padding: 20}}>
                    <Text style={styles.Text}>Total</Text>
                    <Text style={styles.Text}>{'\u20B9'} {this.state.Ammount}</Text>
                </View>
                <View style={{margin: 30,}} >
                    <Button 
                        title= 'Place Order'
                        style={styles.inputContainerButton}
                        color = {Colors.primaryColor}
                        onPress={() => this.Validation_field()}
                    /> 
                </View>
            </View>
        )
    }

}
export default ProccedToBy;

const styles = StyleSheet.create({
    Contener:{
        flex: 1,
        padding: 20
    },
    RowContener: {
        flexDirection: 'row',

    },
    Text:{
        fontSize: 17
    },
    Image:{
        width: width - 400,
        height: height
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
})