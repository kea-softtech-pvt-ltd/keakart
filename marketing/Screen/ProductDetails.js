import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableHighlight,Image,Button,Dimensions,TextInput} from 'react-native'; 
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


class ProductDetails extends Component{
  static navigationOptions = {
    title: 'Details',
  }
  constructor(props) {
    super(props)
    this.state={
       
    }
   
  }
  
  render(){

    const product =  this.props.navigation.getParam('product')
    const ammount =  this.props.navigation.getParam('ammount')
    const quentity =  this.props.navigation.getParam('quentity')
    const image = this.props.navigation.getParam('image')
    const sell = this.props.navigation.getParam('sell')


    return(
      <View style={{flex: 1, flexDirection: 'column',padding: 20, }}>
        <ScrollView>
        <View style={{flexDirection: 'row',paddingBottom: 20}}>
        <View style={{flexDirection: 'column',justifyContent: 'space-between',paddingRight: 13, }}>
          
            <Image
              style={{ height: 200, width: 200}}
              source={image}
            />
          
        </View>
        <View style={{flexDirection: 'column',}}>
          <Text style={styles.text}>{product}</Text>
            <Text style={styles.textammount}>{'\u20B9'} {ammount}</Text>
            <Text style={styles.tabletextcolor}>Stock Avelebal</Text>

        </View> 
        </View>
    
        <View style={{padding: 10}}>
          <Text style={styles.text}>PRODUCT DETAILS</Text>
          <View style={styles.horlinefull}></View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between',padding: 10}}>
            <Text style={styles.tabletext}>Total Product</Text>
            <Text style={styles.tabletext}>{quentity} </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between',padding: 10}}>
            <Text style={styles.tabletext}>Sell</Text>
                <Text style={styles.tabletext}>{sell}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between',padding: 10}}>
            <Text style={styles.tabletext}>Remening Product</Text>
            <Text style={styles.tabletext}>{quentity}-{sell}</Text>
          </View>
          <View style={styles.horlinefull}></View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between',padding: 10}}>
            <Text style={styles.tabletext}>Stock</Text>           
            <Text style={styles.tabletextcolor}>{quentity}-{sell}</Text>
          </View>
        </View>
        
          </ScrollView>
      </View>
    )
  }
}

export default ProductDetails;

const styles = StyleSheet.create({
textstyle: {
    fontSize: 20,
    padding: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    },
    myButton:{
      height: 45,
      width: 45,  
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
    offer: {
      fontSize: 20,
      padding: 6,
      marginLeft: 10,
      color: 'green'
    },
    horlinefull:{
      backgroundColor: '#A2A2A2',
      height: 2,
      width: 100* 5,
      marginTop: 10,
      marginBottom: 10
    },
    tabletext:{
      fontSize: 17, 
    },
    tabletextcolor:{
      fontSize: 20,
      color: 'green' 
    },
    textbutton:{
      fontSize: 18,
      margin: 10,
      paddingLeft: 10,
    }
});

