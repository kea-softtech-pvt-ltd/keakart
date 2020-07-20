import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableHighlight,Image,Button,Dimensions,TextInput} from 'react-native'; 
import { ScrollView } from 'react-native-gesture-handler';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 5;

class CartSacreen extends Component{
  static navigationOptions = {
    title: 'My Cart',
  }
  constructor(props) {
    super(props)
    this.state = {
      clicks: 1,
      Ammount: 2261,
      offer: 3769,
      saveAmmount: 1508,
    };
  }

  IncrementItem = () => {
    this.setState({ 
      clicks: this.state.clicks + 1 ,
      Ammount: this.state.Ammount + 2261,
      offer: this.state.offer + 3769,
      //saveAmmount: this.state.offer - this.state.Ammount,
    });
  }
  DecreaseItem = () => {
    if(this.state.clicks -1 ) {
      this.setState({ 
        clicks: this.state.clicks - 1,
        Ammount: this.state.Ammount - 2261,
        offer: this.state.offer - 3769,
        //saveAmmount: this.state.offer - this.state.Ammount,
      
      });
    }  
  }
  
  render(){
   
    return(
      <View style={{flex: 1, flexDirection: 'column',padding: 10, }}>
        <ScrollView>
        <View>
          <View style={{flexDirection: 'row',paddingBottom: 20}}>
          <View style={{flexDirection: 'column',justifyContent: 'space-between',paddingRight: 13, }}>
            <TouchableHighlight>
              <Image
                 style={ styles.Image}    
                source={require('../assets/cctv1.png')}
              />
            </TouchableHighlight>
          </View>
          <View style={{flexDirection: 'column',}}>
            <Text style={styles.text}>Hikvision Cctv Camera</Text>
            <Text style={styles.text}>Delivery By : </Text>
            <Text style={styles.text}>Seller : Aryan Infotech</Text>
            <View style={{flexDirection: 'row', paddingTop: 10,paddingBottom: 10}}>
              <Text style={styles.textammount}>{'\u20B9'} {this.state.Ammount}</Text>
              <View style={styles.horline}></View>
                <Text style= {styles.texttr}>{'\u20B9'}{this.state.offer}</Text>
                <Text style={styles.offer}>60% Off</Text>
            </View>
          </View> 
          </View>
          <View style={{flexDirection: 'row',}}>
              <TouchableHighlight  onPress={ () => this.DecreaseItem() }>
                  <Image
                      style={styles.myButton}
                      source={require('../assets/minus1.jpg')}
                  />
              </TouchableHighlight>
              <TextInput  style={pickerSelectStyles.inputIOS}>
                {this.state.clicks}    
              </TextInput>
              <TouchableHighlight  onPress={ () => this.IncrementItem() }>
                  <Image
                      style={styles.myButton}
                      source={require('../assets/plus1.jpg')}
                  />
              </TouchableHighlight>
                <TouchableHighlight>
                <Text style={styles.textbutton}>SAVE FOR LATER</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                <Text style={styles.textbutton}>REMOVE</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.horlinefull}></View>
          </View>
          </ScrollView>
      </View>
    )
  }
}

export default CartSacreen;

const styles = StyleSheet.create({
textstyle: {
    fontSize: 20,
    padding: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    },
    myButton:{
      height: 35,
      width: 35,  
      marginTop: 5,
      borderRadius:100,   
      backgroundColor:'gray',  
    },
    text : {
      fontSize: 17,
      padding: 5
    },
    textammount : {
      fontSize: 22,
      padding: 5
    },
    texttr: {
      fontSize: 20,
      color: 'gray',
      marginTop: 7,
      marginLeft: -65
      
    },
    horline:{
      backgroundColor: '#A2A2A2',
      height: 2,
      width: 70,
      marginTop: 19,
    },
    horlinefull:{
        backgroundColor: '#A2A2A2',
        height: 2,
        marginTop: 19,
      },
    offer: {
      fontSize: 20,
      padding: 6,
      marginLeft: 10,
      color: 'green'
    },
    textbutton:{
      fontSize: 18,
      margin: 10,
      paddingLeft:20,
    },
    Image:{
      width: width - 310,
      height: height
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      textAlign:"center",
      paddingTop: 5,
      paddingBottom: 5,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      backgroundColor: 'white',
      color: 'black',
      marginLeft: 10,
      marginRight: 10,
      
      },
  });
  