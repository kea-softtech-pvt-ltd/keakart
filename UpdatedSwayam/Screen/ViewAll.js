import React from 'react';
import {View,Text,StyleSheet, Image,ScrollView,TouchableHighlight} from 'react-native';
import Colors from '../Constants/Colors'
import axios from 'axios';
import api from '../config/api';
import imagesPath from '../config/Image';

class ViewAll extends React.Component{

    constructor(props){
        super();
        this.state = {
            product: [],
        }
    }
  
    async componentDidMount(){
        const response = await axios.get(api.ProductList)
        const json = await response;
        console.log(json.data)
        this.setState ({  product : json.data.data});
        
    }

    render(){
        console.log(this.state.product );
    
        return(
            <View style={styles.ViewContener}>
                <ScrollView >
                    <View style={{backgroundColor: 'white'}}>
                        <Text style={styles.ViewText}>Best Camera Deals For you</Text>
                    </View>
                    <View style={styles.ContenerView}>
                        {
                            this.state.product.map((item,id) =>(
                                <View style={styles.boxStyle} key={id}>
                                    <View style={{alignItems: 'center'}}>
                                        <TouchableHighlight onPress={()=>this.props.navigation.navigate('ProductDetailsRoot', {screen: 'ProductDetails',params: { screen: 'A',params: { item},}})}>
                                            <Image
                                                style={ styles.Image}
                                                source={imagesPath.ProductList + item.image}
                                            />
                                        </TouchableHighlight>
                                    </View>
                                        <Text style= {styles.TextName}>{item.name}</Text>
                                        <Text style= {styles.buttomtitle}>{item.minimum}</Text>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style= {styles.buttomnumber}>{'\u20B9'}{item.price}</Text>
                                            {/* <View style={styles.horline}></View>
                                            <Text style= {styles.buttomnumbere}>{'\u20B9'}{item.special}</Text>    */}
                                        </View> 
                                        <Text style= {styles.buttomtitle}>Ex.Tax: {'\u20B9'}{item.price}</Text>  
                                </View>   
                            ))
                        }
                    </View>
                </ScrollView>  
            </View>
        )     
       
    }
}

export default ViewAll ;

const styles = StyleSheet.create({
    ViewContener: {
        // flex: 1,  
        backgroundColor: Colors.background
    },
    ViewText: {
        fontSize: 17,
        //fontFamily: 'Roboto',
        padding: 20,
        fontWeight: 'bold'
    },
    ContenerView:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        //width: 410,
       },
       boxStyle: {
        backgroundColor: 'white',
        marginTop: 1,
        marginRight: 1,
        width: 204.5,
        height: 240,
        padding: 20,
       },
       Image:{
        width: 100,
         height: 100,
         margin: 5,
       },
       TextName: {
        fontSize: 17,
        paddingTop: 5,
        color: Colors.primaryColor,   
      },
       buttomtitle: {
         fontSize: 17,
         paddingTop: 5,
         color: 'gray',   
       },
       buttomnumber: {
        fontSize: 15,
        color: 'gray',
        paddingRight: 7    
      },
      buttomnumbere: {
        fontSize: 17,
        color: 'gray',
        marginLeft:-65
      },
      horline:{
        backgroundColor: '#A2A2A2',
        height: 2,
        width: 70,
        marginTop: 12,
      },
})