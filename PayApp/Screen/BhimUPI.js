import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { CheckBox } from 'react-native-elements'


export default class BhimUPI extends Component{
    constructor(props){
        super(props);
    
        this.state = {
         isChecked: ''
        }
    }
    render() {
        return(
            <View  style={{flexDirection: 'row',paddingTop: 20,margin:10}}>
                <View style={styles.iconcircal}></View>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{fontSize: 17,paddingLeft: 10}}>1900002789346 </Text>
                        <Text style={{fontSize: 17,paddingLeft: 10}}>State Bank Of India </Text>
                    </View>
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
        )
    }
}

const styles= StyleSheet.create({
   
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
})