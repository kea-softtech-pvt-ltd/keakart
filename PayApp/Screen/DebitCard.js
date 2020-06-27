import React,{Component} from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native'
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';


export default class DebitCard extends Component{
    constructor(props){
        super(props);
    
        this.state = {
         isChecked: '',
         card:'',
         mounth:'',
         year: '',
         cvv: ''
        }
    }
    render() {
        return(
            <View style={{flex: 1}}>
            <View  style={{flexDirection: 'row',paddingTop: 20,margin:10}}>
                <Icon name={"credit-card"}  size={25} />
                    <Text style={{fontSize: 17,paddingLeft: 10}}>Use Debit Card</Text>
                        
                    <View style={{flex:1,flexDirection: 'row-reverse'}}>
                    <CheckBox
                        onPress={()=>{
                        this.setState({
                            isChecked:!this.state.isChecked
                        })
                        }}
                        checked={this.state.isChecked}    
                    />
                </View>
            </View>
            <View style={pickerSelectStyles.inputIOS}>
                <View style={styles.inputContainer} >
                <TextInput style={styles.inputs}
                    placeholder="Enter Your Card Number"
                    maxLength={20}  
                    keyboardType={'phone-pad'}
                    underlineColorAndroid='transparent'
                    onChangeText={(value) => this.setState({card: value})}
                />
                </View>
                <View style={{flex: 1,flexDirection: 'row'}}>
                    <View style={styles.inputContainer} >
                    <TextInput style={styles.inputs}
                        placeholder="MM"
                        maxLength={2}  
                        keyboardType={'phone-pad'}
                        underlineColorAndroid='transparent'
                        onChangeText={(value) => this.setState({mounth: value})}
                    />
                    </View>
                    <View style={styles.inputContainer} >
                    <TextInput style={styles.inputs}
                        placeholder="YY"
                        maxLength={2}  
                        keyboardType={'phone-pad'}
                        underlineColorAndroid='transparent'
                        onChangeText={(value) => this.setState({year: value})}
                    />
                    </View>
                    <View style={styles.inputContainer} >
                    <TextInput style={styles.inputs}
                        placeholder="CVV"
                        maxLength={3}  
                        keyboardType={'phone-pad'}
                        underlineColorAndroid='transparent'
                        onChangeText={(value) => this.setState({cvv: value})}
                    />
                    </View>
                </View>
            </View>
            </View>
        )
    }
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingTop: 12,
      paddingHorizontal: 10,
      paddingBottom: 12,
      borderRadius: 4,
      backgroundColor: '#d3d3d3',
      color: 'white',
      margin: 10,

      },
  });
  const styles= StyleSheet.create({
    inputContainer: {
        backgroundColor: 'white',
        borderRadius:4,
        flexDirection: 'row',
        margin: 10,
        borderColor: '#a9a9a9',
        borderWidth: 2,
    },
    inputs:{
        height:55,
        marginLeft:20,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
  })
  