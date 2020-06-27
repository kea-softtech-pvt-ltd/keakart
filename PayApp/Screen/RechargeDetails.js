import React, { Component } from 'react';
import {View,TouchableOpacity,Image,ScrollView,StyleSheet,Dimensions, Text, Button,TextInput,FlatList} from 'react-native';
import SliderImage from '../Screen/SliderImage';
import BhimUPI from './BhimUPI';

const width = Dimensions.get("window").width;

export default class RechargeDetailsScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
     Ammount: ''
    }
}

  render() { 
    const name =  this.props.navigation.getParam('name')
    console.log(name)
    const mobileno =  this.props.navigation.getParam('mobileno')
    const letter =  this.props.navigation.getParam('letter')

    return (
      <View style={{flex:1,}}>
            <ScrollView >
                <SliderImage />
                <View style={{flexDirection: 'row',margin: 20,justifyContent: 'space-between'}}>
                    <View style={styles.circal}><Text style={{fontSize: 20,color: 'white',}}>A</Text></View>
                        <View style={{flex: 1}}>
                            <Text style={styles.textstyle}> Amol Katte </Text>
                            <Text style={styles.textstyle}> 8879654893 </Text>
                        </View>
                        <View style={{justifyContent: 'center',alignItems: 'center',}}>
                        <Text style={{fontSize: 17,color:'#20b2aa'}}>CHANGE</Text>
                        </View>
                    </View> 
                    <View style={styles.inputContainer} >
                        <TextInput style={styles.inputs}
                            placeholder="Enter Ammount"
                            underlineColorAndroid='transparent'
                            onChangeText={(value) => this.setState({Ammount: value})}
                        />
                          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Plans')}>
                            <Text  style={pickerSelectStyles.inputIOS}>View Plans</Text>
                          </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.Text}>Debit From</Text>
                        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{flex:1,flexDirection: 'row'}}>
                                <TouchableOpacity>
                                <Text style={pickerSelectStyles.input}>Bhim UPI</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                <Text style={pickerSelectStyles.input}>Debit Card</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                <Text style={pickerSelectStyles.input}>Credit Card</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                   <BhimUPI />
                    <Text style={{fontSize: 17,color: '#20b2aa',paddingTop: 10,padding: 10}}>Add Anather Bank Account</Text>
                    
            </ScrollView>
            <View style={{flex: 1,height: 200}}>
                <Button
                    title= 'Recharge'
                    color= '#20b2aa'
                    onPress={()=>this.props.navigation.navigate('RechargeSuccessful')}
                />
            </View>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  TextHed: {
    fontSize: 20,
    padding: 10,
},
textstyle: {
  fontSize: 20,
  
},
circal: {
  borderWidth:1,
  borderColor:'#01a699',
  alignItems:'center',
  justifyContent:'center',
  width:50,
  height:50,
  backgroundColor:'red',
  borderRadius:50,      
},
iconcircal:{
    borderWidth:1,
    borderColor:'gray',
    alignItems:'center',
    justifyContent:'center',
    width:30,
    height:30,
    backgroundColor:'white',
    borderRadius:50,
   //margin: 10     
},
inputContainer: {
    backgroundColor: 'white',
    borderRadius:4,
    flexDirection: 'row',
    margin: 20,
    borderColor: '#20b2aa',
    borderWidth: 2,
},
inputs:{
    height:55,
    marginLeft:10,
    borderBottomColor: '#FFFFFF',
    fontSize: 17
},
Text:{
    fontSize: 20,
    padding: 10
}
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingTop: 12,
      paddingHorizontal: 10,
      paddingBottom: 12,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      backgroundColor: '#20b2aa',
      color: 'white',
      marginRight: 16,
      margin: 10
      },
      input: {
        fontSize: 16,
        paddingTop: 12,
        paddingHorizontal: 40,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
        
        },
  });