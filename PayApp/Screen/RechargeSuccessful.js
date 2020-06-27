import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

export default class RechargeSuccessful extends Component{
    constructor(props){
        super(props);
    
        this.state = {
         
        }
    }
    render() {
        return(
            <View>
                <View style={{flexDirection: 'row',margin: 20,justifyContent: 'space-between'}}>
                        <View style={{flex: 1}}>
                            <Text style={styles.textstyle}> Transaction ID</Text>
                            <Text style={styles.textstyle}> P20008879654893 </Text>
                        </View>
                        <View style={{justifyContent: 'center',alignItems: 'center',}}>
                        <Text style={{fontSize: 17,color:'#20b2aa'}}>COPY</Text>
                        </View>
                </View> 
                <Text style={styles.Text}> Paid To </Text>
                <View style={{flexDirection: 'row',margin: 20,justifyContent: 'space-between'}}>
                    <View style={styles.circal}><Text style={{fontSize: 20,color: 'white',}}>A</Text></View>
                        <View style={{flex: 1}}>
                            <Text style={styles.textstyle}> Amol Katte </Text>
                            <Text style={styles.textstyle}> 8879654893 </Text>
                        </View>
                        <View style={{justifyContent: 'center',alignItems: 'center',}}>
                        <Text style={{fontSize: 17,color:'#20b2aa'}}>{'\u20B9'} 250</Text>
                        </View>
                    </View> 
                    <View style={{flexDirection: 'row',margin: 20,justifyContent: 'flex-end'}}>
                        <TouchableOpacity>
                        <Text style={{fontSize: 17,color:'#32cd32',}}>PAY AGAIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Text style={{fontSize: 17,color:'#32cd32',paddingLeft: 20}}>SHAIR</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.Text}>Debit From</Text>
                    <View  style={{flexDirection: 'row',margin:20}}>
                        <View style={styles.iconcircal}></View>
                            <View style={{flex: 1}}>
                            <Text style={{fontSize: 17,paddingLeft: 10}}>1900002789346 </Text>
                            <Text style={{fontSize: 17,paddingLeft: 10}}>State Bank Of India </Text>
                            </View>
                            <View style={{justifyContent: 'center',alignItems: 'center',}}>
                                <Text style={{fontSize: 20,color:'#20b2aa'}}>{'\u20B9'} 250</Text>
                            </View>
                    </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
   
  textstyle: {
    fontSize: 17,  
  },
  Text:{
    fontSize: 20,
    padding: 10
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
  }
})