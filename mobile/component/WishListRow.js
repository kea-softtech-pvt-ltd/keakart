import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableHighlight,Image,Button,Dimensions} from 'react-native'; 
import { ScrollView } from 'react-native-gesture-handler';

class WishListScreen extends Component{
    static navigationOptions = {
        title: 'WishList',
      }
    constructor(props){
    super(props);
   
}
    render(){
        //const {image,name} =  this.props.navigation.getParam('image','name')
    
    return(
        <View style={{padding: 20}}>
            <ScrollView>
            
            <View style={{ flexDirection: 'row',paddingBottom: 20}}>
                <View style={{flexDirection: 'column',}}>
                    <Text style={styles.text}>Image</Text>
                </View>
                <View style={{flexDirection: 'column', marginLeft: 20,marginRight: 20}}>
                    <Text style={styles.text}>Product Name</Text>
                </View>
                <View style={{flexDirection: 'column',paddingRight: 20}}>
                    <Text style={styles.text}>Prise</Text>
                </View>
              <Text style={styles.text}>Offer</Text>  
            </View>
           
            <View style={styles.horlinebase}></View>

            <View style={{ flexDirection: 'row',marginTop: 10}}>
                <View style={{flexDirection: 'column',}}>
                <Image
                    style={{height: 50, width: 50}}
                    source={require('../assets/cctv1.png')} 
                />
                </View>
                <View style={{flexDirection: 'column',flex:1, marginLeft: 20}}>
                    <Text style={styles.subtext}> Cctv Camera</Text>
                </View>
                <View style={{flexDirection: 'row',marginRight: 20}}>
              <Text style= {styles.buttomnumber}>{'\u20B9'}2261</Text>
              <View style={styles.horline}></View>
              <Text style= {styles.buttomnumbere}>{'\u20B9'}3,769</Text>  
            </View>
            <View style={{marginLeft:5}}>
                <Button
                    title= 'Add To Cart'
                    color= 'orange'
  
                />
            </View>
            </View> 
            <View style={styles.horlinebase}></View>

            <View style={{ flexDirection: 'row',marginTop: 10}}>
                <Image
                    style={{height: 50, width: 50}}
                    source={require('../assets/cctv2.png')} 
                />
                <View style={{flexDirection: 'column',flex:1,marginLeft: 20}}>
                    <Text style={styles.subtext}>Hikvision Cctv Camera</Text>
                </View>
                <View style={{flexDirection: 'row',marginRight: 20}}>
              <Text style= {styles.buttomnumber}>{'\u20B9'}1199</Text>
              <View style={styles.horline}></View>
              <Text style= {styles.buttomnumbere}>{'\u20B9'}3,769</Text>  
            </View>
            <View style={{marginLeft:5}}>
                <Button
                    title= 'Add To Cart'
                    color= 'orange'
  
                />
            </View>
            </View> 
            <View style={styles.horlinebase}></View>

            <View style={{ flexDirection: 'row',marginTop: 10}}>
                <Image
                    style={{height: 50, width: 50}}
                    source={require('../assets/cctv4.png')} 
                />
                <View style={{flexDirection: 'column',flex:1,marginLeft: 20}}>
                    <Text style={styles.subtext}>Hikvision Cctv Camera</Text>
                </View>
                <View style={{flexDirection: 'row',marginRight: 20}}>
              <Text style= {styles.buttomnumber}>{'\u20B9'}2999</Text>
              <View style={styles.horline}></View>
              <Text style= {styles.buttomnumbere}>{'\u20B9'}3,769</Text>  
            </View>
            <View style={{marginLeft:5}}>
                <Button
                    title= 'Add To Cart'
                    color= 'orange'
  
                />
            </View>
            </View>

            <View style={styles.horlinebase}></View>

            <View style={{ flexDirection: 'row',marginTop: 10}}>
                <Image
                    style={{height: 50, width: 50}}
                    source={require('../assets/cctv5.png')} 
                />
                <View style={{flexDirection: 'column',flex: 1,marginLeft: 20}}>
                    <Text style={styles.subtext}> Cctv Camera</Text>
                </View>
                <View style={{flexDirection: 'row',marginRight: 20}}>
              <Text style= {styles.buttomnumber}>{'\u20B9'}2999</Text>
              <View style={styles.horline}></View>
              <Text style= {styles.buttomnumbere}>{'\u20B9'}3,769</Text>  
            </View>
            <View style={{marginLeft:5}}>
                <Button
                    title= 'Add To Cart'
                    color= 'orange'
  
                />
            </View>
            </View>

            <View style={styles.horlinebase}></View>   
            </ScrollView>
        </View>
    )
}
}

export default WishListScreen;

const styles = StyleSheet.create({
    subtext: {
        fontSize: 17,
    },
    text: {
        fontSize: 17,
        color: 'green'
    },
    buttomnumber: {
        fontSize: 17,
        paddingBottom: 10,
        paddingLeft:10,
        color: 'orange',
        paddingRight: 5
        
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
      horlinebase:{
        backgroundColor: '#A2A2A2',
        height: 2,
        width: 500,
        marginTop: 10,
        marginBottom: 10,

      }
});