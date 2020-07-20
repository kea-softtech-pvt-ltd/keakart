import React, { Component } from 'react';
import { View,ScrollView,Text,TouchableHighlight,Image,StyleSheet,Dimensions} from 'react-native'; 
import Colors from '../constants/Colors'

import ScrollImage from './ScrollImage';
import OfferImage from './OfferImage';
import IconScreen from './Icon';
import ProductList from '../Data/ProductList';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 4;


class HomeScreen extends Component{
    static navigationOptions = ({screenProps}) =>({
       
        headerLeft: ( 
            <TouchableHighlight style={{ marginLeft: 10 }} onPress={()=> screenProps.openDraw()}>
            <Image
                style={{ width: 32, height: 35,}}
                source={require('../assets/drawer.png')}
            />
            </TouchableHighlight> 
              
        ),
        headerTitle: "KeaKart",
        headerTitleStyle:{flex: 1,fontSize: 20, textAlign: 'center', color: 'white'},

        headerRight: (           
           <IconScreen / >
        )
    })
  constructor(props){
    super(props);
    this.state={
      product: ProductList
    }
  }
 
  render(){
    return(
      <View style={{ flex: 1,}}>
        <ScrollView>
          <ScrollImage />
          <OfferImage />
          <View style={{flex: 1,padding: 20}}>
            <Text style={styles.textstyle}>Best Sellers</Text>
            <View style={styles.Contener}  >
            {
              this.state.product.map((item,id) =>(
                  <View style={styles.boxStyle} key={id} >
                    <TouchableHighlight 
                     onPress={()=>{
                        this.props.navigation.navigate('ProductDetails', item )
                    }}>
                      <Image
                         style={ styles.Image}
                        source={item.image}
                      />
                    </TouchableHighlight>
                  <Text style= {styles.buttomtitle}>{item.heding}</Text>
                    <View style={{flexDirection: 'row',}}>
                      <Text style= {styles.buttomnumber}>{'\u20B9'}{item.offerammount}</Text>
                      <View style={styles.horline}></View>
                      <Text style= {styles.buttomnumbere}>{'\u20B9'}{item.ammount}</Text>   
                    </View>
                  </View>  
              ))
            }
            </View>  
          </View> 
        </ScrollView>
      </View>
    )
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 20,
  },
  Contener:{
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    flexWrap: 'wrap' ,
  },
  boxStyle: {
    height: 270, 
    width: 208, 
    margin: 5
  },
  buttomtitle: {
    fontSize: 17,
    paddingLeft:10,
    paddingTop: 10,
    color: 'gray',   
  },
  buttomnumber: {
    fontSize: 17,
    paddingBottom: 10,
    paddingLeft:10,
    color: Colors.primaryColor,
    paddingRight: 7    
  },
  buttomnumbere: {
    fontSize: 17,
    paddingBottom: 10,
    color: 'gray',
    marginLeft:-65
  },
  horline:{
    backgroundColor: '#A2A2A2',
    height: 2,
    width: 70,
    marginTop: 12,
  },
  Image:{
    width: width - 300,
    height: height,
    margin: 3
  }
});