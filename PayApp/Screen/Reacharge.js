import React, { Component } from 'react';
import {View,TouchableOpacity,Image,ScrollView,StyleSheet,Dimensions, Text} from 'react-native';
import { SearchBar,  } from 'react-native-elements';
import Contact from '../Contact';

const width = Dimensions.get("window").width;

export default class RechargeScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
      contact : Contact, 
      search: '' 
    }
}
// SearchFilterFunction(text) {
//   //passing the inserted text in textinput
//   const newData = this.state.contact.filter(function(item) {
//   //applying filter for the inserted text in search bar
//   const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
//   const textData = text.toUpperCase();
//   return itemData.indexOf(textData) > -1;
// });
//   this.setState({
//   contact: newData,
//   search:text,
//   });
// }

updateSearch = (search) => {
  this.props.navigation.navigate('Search')
};

  render() {
    let el =this;
    const { search } = this.state;
    return (
      <View style={{flex:1,}}>
          <ScrollView >
            <View style={{paddingBottom: 20}}>
              <Text style={styles.TextHed}>Select or Enter Monile NO.</Text>
              <SearchBar
                searchIcon={{ size: 24 }}
                placeholder="Type Here..."
                value={this.state.search}
                onChangeText={this.updateSearch}
            />
            </View>
            <View>
              <View style={{backgroundColor: '#f0f8ff'}}>
                <View style={styles.horline}></View>
                  <Text style={styles.TextHed}>All Contacts</Text>
                <View style={styles.horline}></View>
              </View>
              <View style={{flexDirection: 'column'}}>   
                {
                  this.state.contact.map((item,id) =>(

                    <View style={{flexDirection: 'row',}}  key={id} >
                      <TouchableOpacity 
                        onPress={()=>{
                          el.props.navigation.navigate('RechargeDetails',{"name": item.name,"mobileno": item.mobileno, "letter": item.letter })
                          console.log(item.name)
                        }}>

                        <View style={{flexDirection: 'row',padding: 10}}>
                        <View style={styles.circal}><Text style={{fontSize: 20,color: 'white',}}>{item.letter}</Text></View>
                              <View>
                                <Text style={styles.textstyle}> {item.name} </Text>
                                <Text style={styles.textstyle}> {item.mobileno} </Text>
                              </View>
                            </View> 
                        </TouchableOpacity>
                      </View>
                    ))
                  }                
            </View>
            </View>
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
textstyle: {
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
})