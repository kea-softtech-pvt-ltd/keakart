import React from 'react';
import { View,ScrollView,Text,TouchableHighlight,Image,StyleSheet,Dimensions} from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font';
//import styles from '../Component/Styles';
import Colors from '../Constants/Colors';

import ScrollImage from './ScrollImage';
import ProductList from '../Data/ProductList';
import Offer from './Offer';
import SumProduct from '../Data/SumProduct';
import OfferImage from './OfferImage';


class DashboardScreen extends React.Component{
   
    constructor(props){
        super(props);

        this.state = {
          product: SumProduct,
        }
    }

    componentDidMount() {
        Font.loadAsync({
            'Roboto': require('../assets/fonts/Roboto-Thin.ttf'),
        })  
      }

    render(){
         
        return(
          <View style={{ flex: 1,backgroundColor: 'white'}}>
            <ScrollView>
              <ScrollImage />
              <OfferImage />
              <View style={styles.Contener}>
                <View style={styles.SubContener}>
                  <Text style={styles.HeadingText}>Greate Disscount of Camera</Text>
                  <View style={styles.TextContener}>
                  <TouchableHighlight onPress={()=>this.props.navigation.navigate('Offer')}>
                    <Text  style={styles.TextButton} >View All</Text>
                    </TouchableHighlight>
                  </View>
                </View>
                
              </View> 
              <View style={{backgroundColor: '#7fffd4',height: 410 }}></View>
              <View style={{backgroundColor: '#f2f2f2',margin:15,marginTop: -410}}>
                <View style={styles.ContenerView}  >
                {
                  this.state.product.map((item,id) =>(
                      <View style={styles.boxStyle} key={id} >
                          <Image
                            style={ styles.Image}
                            source={item.image}
                          />
                      <Text style= {styles.buttomtitle}>{item.heding}</Text>
                        <View style={{flexDirection: 'row',}}>
                          <Text style= {styles.buttomnumber}>Under</Text>
                          <Text style= {styles.buttomnumber}>{'\u20B9'}{item.offerammount}</Text>
                        </View>
                      </View>  
                  ))
                }
                </View>  
                </View>
                <View style={{marginBottom: 10}}>
                  <Image 
                    source={require('../assets/add.jpg')}
                    style={{height:200,width:420}}
                  />
                </View>
                <View style={{backgroundColor: '#008b8b'}}>
                <View style={styles.SubContener}>
                  <Text style={styles.HeadingText}>Check Best Camera</Text>
                  <View style={styles.TextContener}>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('Offer')}>
                    <Text  style={styles.TextButton} >View All</Text>
                    </TouchableHighlight>
                  </View>
                </View>  
              </View> 
              <View style={{backgroundColor: '#008b8b',height: 410 }}></View>
              <View style={{backgroundColor: '#f2f2f2',margin:15,marginTop: -410}}>
                <View style={styles.ContenerView}  >
                {
                  this.state.product.map((item,id) =>(
                      <View style={styles.boxStyle} key={id} >
                          <Image
                            style={ styles.Image}
                            source={item.image}
                          />
                      <Text style= {styles.buttomtitle}>{item.heding}</Text>
                        <View style={{flexDirection: 'row',}}>
                        <Text style= {styles.buttomnumber}>Under</Text>
                          <Text style= {styles.buttomnumber}>{'\u20B9'}{item.offerammount}</Text> 
                        </View>
                      </View>  
                  ))
                }
                </View>  
                </View>
                <Offer />
            </ScrollView>
        </View>
        )
    }
}

export default DashboardScreen;

const styles = StyleSheet.create({
  Contener: {
    flex: 1,
    backgroundColor: '#7fffd4',
  },
  SubContener: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 40,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-between'   ,
    alignItems: 'center',
  },
  HeadingText: {
    //fontFamily: 'Roboto',
    fontSize: 17,
    fontWeight: 'bold',
  },
  TextButton: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    margin: 10  
  },
  TextContener: {
    backgroundColor: '#6495ed',
    borderColor: '#6495ed',
    
  },
  ContenerView:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 400,
   },
   boxStyle: {
     alignItems: 'center',
     backgroundColor: 'white',
     marginRight:2,
     marginBottom: 2,
     width: 190,
     height: 210,
     padding: 20
   },
   Image:{
     width: 80,
     height: 100,
     margin: 5,
   },
   buttomtitle: {
     fontSize: 15,
     paddingTop: 10,
     color: 'gray',   
   },
   buttomnumber: {
     fontSize: 15,
     paddingBottom: 10,
     color: Colors.primaryColor,
     paddingRight: 7    
   },
   buttomnumbere: {
     fontSize: 15,
     color: 'gray',
     marginLeft:-65
   },
  
})