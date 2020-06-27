import React, { Component } from 'react';
import {View,TouchableOpacity,Image,ScrollView,StyleSheet,Dimensions, Text, Button,TextInput,FlatList} from 'react-native';

const width = Dimensions.get("window").width;

export default class PlansScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
      status:true,
      secondstatus:'',
    }
}

ShowHideTextComponentView = () =>{
 
  if(this.state.status == true)
  {
    this.setState({status: false})
  }
  if(this.state.secondstatus == false)
  {
    this.setState({secondstatus: true})
  }
  
}

  render() { 

    return (
      <View style={{flex:1,}}>
            <ScrollView >
                <View>
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{flex:1,flexDirection: 'row',padding: 10}}>
                            <TouchableOpacity onPress={this.ShowHideTextComponentView}>
                            <Text style={styles.TextHed}>Popular</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.ShowHideTextComponentView}>
                            <Text style={styles.TextHed}>AllPlans</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.ShowHideTextComponentView}>
                            <Text style={styles.TextHed}>Top Up</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.ShowHideTextComponentView}>
                            <Text style={styles.TextHed}>Jio Plans</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.ShowHideTextComponentView}>
                            <Text style={styles.TextHed}>Data Plans</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.ShowHideTextComponentView}>
                            <Text style={styles.TextHed}>Top Up</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    <View style={styles.horline}></View>
                    
                </View>
                {
                  this.state.status ? 
                  <View style={{backgroundColor: '#fffff0'}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('RechargeDetails')}>
                    <View style={{flex: 1,flexDirection: 'row',padding: 10,}}>
                      <View style={{flex: 1,padding: 10}}>
                        <Text style={{fontSize:15}}>Talktime:</Text>
                        <Text  style={{fontSize:15}}>{'\u20B9'}  0</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                        <Text  style={{fontSize:15}}>Dta:</Text>
                        <Text  style={{fontSize:15}}>3GB/day+6GB</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                        <Text  style={{fontSize:15}}>Validity:</Text>
                        <Text  style={{fontSize:15}}>28 daya</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                      <Text  style={pickerSelectStyles.inputIOS} >{'\u20B9'} 255</Text>
                      </View>
                     </View>
                    <View style={{flex: 1,padding: 10}}>
                      <Text  style={{fontSize:15}}>Data: 3GB/day+6GB </Text>
                      <Text style={{fontSize:15}}>Voice: Unlimited Calls (Jio to joi FUP) </Text>
                      <Text style={{fontSize:15}}>Disney+Hostar Annual Subsctiption </Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('RechargeDetails')}>
                    <View style={{backgroundColor: '#d3d3d3',padding: 5}}></View>
                    <View style={{flex: 1,flexDirection: 'row',padding: 10,}}>
                      <View style={{flex: 1,padding: 10}}>
                        <Text style={{fontSize:15}}>Talktime:</Text>
                        <Text style={{fontSize:15}}>{'\u20B9'}  0</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                        <Text style={{fontSize:15}}>Dta:</Text>
                        <Text style={{fontSize:15}}>3GB/day+6GB</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                        <Text style={{fontSize:15}}>Validity:</Text>
                        <Text style={{fontSize:15}}>28 daya</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                      <Text  style={pickerSelectStyles.inputIOS}>{'\u20B9'} 469</Text>
                      </View>
                    </View>
                    <View style={{flex: 1,padding: 10}}>
                      <Text style={{fontSize:15}}>Data: 3GB/day+6GB </Text>
                      <Text style={{fontSize:15}}>Voice: Unlimited Calls (Jio to joi FUP) </Text>
                      <Text style={{fontSize:15}}>Disney+Hostar Annual Subsctiption </Text>
                    </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#d3d3d3',padding: 5}}></View>
                    <View style={{flex: 1,flexDirection: 'row',padding: 10,}}>
                      <View style={{flex: 1,padding: 10}}>
                        <Text style={{fontSize:15}}>Talktime:</Text>
                        <Text style={{fontSize:15}}>{'\u20B9'}  0</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                        <Text style={{fontSize:15}}>Dta:</Text>
                        <Text style={{fontSize:15}}>3GB/day+6GB</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                        <Text style={{fontSize:15}}>Validity:</Text>
                        <Text style={{fontSize:15}}>28 daya</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                      <Text  style={pickerSelectStyles.inputIOS}>{'\u20B9'} 149</Text>
                      </View>
                    </View>
                    <View style={{flex: 1,padding: 10}}>
                      <Text style={{fontSize:15}}>Data: 3GB/day+6GB </Text>
                      <Text style={{fontSize:15}}>Voice: Unlimited Calls (Jio to joi FUP) </Text>
                      <Text style={{fontSize:15}}>Disney+Hostar Annual Subsctiption </Text>
                    </View>
                    <View style={{backgroundColor: '#d3d3d3',padding: 5}}></View>
                    <View style={{flex: 1,flexDirection: 'row',padding: 10,}}>
                      <View style={{flex: 1,padding: 10}}>
                        <Text style={{fontSize:15}}>Talktime:</Text>
                        <Text style={{fontSize:15}}>{'\u20B9'}  0</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                        <Text style={{fontSize:15}}>Dta:</Text>
                        <Text style={{fontSize:15}}>3GB/day+6GB</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                        <Text style={{fontSize:15}}>Validity:</Text>
                        <Text style={{fontSize:15}}>28 daya</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                      <Text  style={pickerSelectStyles.inputIOS}>{'\u20B9'} 2245</Text>
                      </View>
                    </View>
                    <View style={{flex: 1,padding: 10}}>
                      <Text style={{fontSize:15}}>Data: 3GB/day+6GB </Text>
                      <Text style={{fontSize:15}}>Voice: Unlimited Calls (Jio to joi FUP) </Text>
                      <Text style={{fontSize:15}}>Disney+Hostar Annual Subsctiption </Text>
                    </View>
                    <View style={{backgroundColor: '#d3d3d3',padding: 5}}></View>
                    <View style={{flex: 1,flexDirection: 'row',padding: 10,}}>
                      <View style={{flex: 1,padding: 10}}>
                        <Text style={{fontSize:15}}>Talktime:</Text>
                        <Text style={{fontSize:15}}>{'\u20B9'}  0</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                        <Text style={{fontSize:15}}>Dta:</Text>
                        <Text style={{fontSize:15}}>3GB/day+6GB</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                        <Text style={{fontSize:15}}>Validity:</Text>
                        <Text style={{fontSize:15}}>28 daya</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                      <Text  style={pickerSelectStyles.inputIOS}>{'\u20B9'} 469</Text>
                      </View>
                    </View>
                    <View style={{flex: 1,padding: 10}}>
                      <Text style={{fontSize:15}}>Data: 3GB/day+6GB </Text>
                      <Text style={{fontSize:15}}>Voice: Unlimited Calls (Jio to joi FUP) </Text>
                      <Text style={{fontSize:15}}>Disney+Hostar Annual Subsctiption </Text>
                    </View>
                  </View> : null
                }
                 {
                  this.state.secondstatus ? 
                  <View style={{backgroundColor: '#fffff0'}}>
                     <TouchableOpacity onPress={()=>this.props.navigation.navigate('RechargeDetails')}>
                    <View style={{flex: 1,flexDirection: 'row',padding: 10,}}>
                      <View style={{flex: 1,padding: 10}}>
                        <Text>Talktime:</Text>
                        <Text>{'\u20B9'}  0</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                        <Text>Dta:</Text>
                        <Text>3GB/day+6GB</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                        <Text>Validity:</Text>
                        <Text>28 daya</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                      <Text  style={pickerSelectStyles.inputIOS}>{'\u20B9'} 49</Text>
                      </View>
                    </View>
                    <View style={{flex: 1,padding: 10}}>
                      <Text>Data: 3GB/day+6GB </Text>
                      <Text>Voice: Unlimited Calls (Jio to joi FUP) </Text>
                      <Text>Disney+Hostar Annual Subsctiption </Text>
                    </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#d3d3d3',padding: 5}}></View>
                    <View style={{flex: 1,flexDirection: 'row',padding: 10,}}>
                      <View style={{flex: 1,padding: 10}}>
                        <Text>Talktime:</Text>
                        <Text>{'\u20B9'}  0</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                        <Text>Dta:</Text>
                        <Text>3GB/day+6GB</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                        <Text>Validity:</Text>
                        <Text>28 daya</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                      <Text  style={pickerSelectStyles.inputIOS}>{'\u20B9'} 149</Text>
                      </View>
                    </View>
                    <View style={{flex: 1,padding: 10}}>
                      <Text>Data: 3GB/day+6GB </Text>
                      <Text>Voice: Unlimited Calls (Jio to joi FUP) </Text>
                      <Text>Disney+Hostar Annual Subsctiption </Text>
                    </View>
                    <View style={{backgroundColor: '#d3d3d3',padding: 5}}></View>
                    <View style={{flex: 1,flexDirection: 'row',padding: 10,}}>
                      <View style={{flex: 1,padding: 10}}>
                        <Text>Talktime:</Text>
                        <Text>{'\u20B9'}  0</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                        <Text>Dta:</Text>
                        <Text>3GB/day+6GB</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                        <Text>Validity:</Text>
                        <Text>28 daya</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                      <Text  style={pickerSelectStyles.inputIOS}>{'\u20B9'} 10</Text>
                      </View>
                    </View>
                    <View style={{flex: 1,padding: 10}}>
                      <Text>Data: 3GB/day+6GB </Text>
                      <Text>Voice: Unlimited Calls (Jio to joi FUP) </Text>
                      <Text>Disney+Hostar Annual Subsctiption </Text>
                    </View>
                    <View style={{backgroundColor: '#d3d3d3',padding: 5}}></View>
                    <View style={{flex: 1,flexDirection: 'row',padding: 10,}}>
                      <View style={{flex: 1,padding: 10}}>
                        <Text>Talktime:</Text>
                        <Text>{'\u20B9'}  0</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                        <Text>Dta:</Text>
                        <Text>3GB/day+6GB</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                        <Text>Validity:</Text>
                        <Text>28 daya</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                      <Text  style={pickerSelectStyles.inputIOS}>{'\u20B9'} 2245</Text>
                      </View>
                    </View>
                    <View style={{flex: 1,padding: 10}}>
                      <Text>Data: 3GB/day+6GB </Text>
                      <Text>Voice: Unlimited Calls (Jio to joi FUP) </Text>
                      <Text>Disney+Hostar Annual Subsctiption </Text>
                    </View>
                    <View style={{backgroundColor: '#d3d3d3',padding: 5}}></View>
                    <View style={{flex: 1,flexDirection: 'row',padding: 10,}}>
                      <View style={{flex: 1,padding: 10}}>
                        <Text>Talktime:</Text>
                        <Text>{'\u20B9'}  0</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                        <Text>Dta:</Text>
                        <Text>3GB/day+6GB</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                        <Text>Validity:</Text>
                        <Text>28 daya</Text>
                      </View>
                      <View  style={{flex: 1,padding: 10}}>
                      <Text  style={pickerSelectStyles.inputIOS}>{'\u20B9'} 469</Text>
                      </View>
                    </View>
                    <View style={{flex: 1,padding: 10}}>
                      <Text>Data: 3GB/day+6GB </Text>
                      <Text>Voice: Unlimited Calls (Jio to joi FUP) </Text>
                      <Text>Disney+Hostar Annual Subsctiption </Text>
                    </View>
                  </View> : null
                }
            </ScrollView>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  TextHed: {
    fontSize: 20,
    padding: 10,
},
horline:{
    backgroundColor: '#A2A2A2',
    width: width - 10,
    height: 2,
  },

})
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 12,
    paddingHorizontal: 8,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: '#20b2aa',
    borderRadius: 4,
    color: '#20b2aa',
    },
  
});
