import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableHighlight,Dimensions,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';
import ProductList from '../Data/ProductList'
import { ScrollView } from 'react-native-gesture-handler';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 4;

class WishListDetails extends Component{
    constructor(props){
        super(props);
        this.state={
          product: ProductList,
        }
      }
     
    render() {
        return(
            <View style={styles.Contener}>
                <View style={{padding: 20,paddingBottom: 80}}>
                    <Text style={styles.Text}>My Wishlist</Text>
                        <View style ={{flexDirection: 'row'}}>
                            <Icon
                                name="shopping-bag"
                                size={15}
                                color={'gray'}
                                style={{padding:6}}
                                onPress={this.retrieveData}  
                            />
                            <Text style={{fontSize: 17,color: 'gray'}}>private . 9 items</Text>
                        </View>
                </View>
                <ScrollView>
                    <View style={styles.Contenerstyle}>
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
                                        <Text style={{color: 'green',fontSize: 17,paddingLeft: 15}}>40 % off</Text>  
                                    </View>
                                </View>  
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
        )  
    }
}

export default WishListDetails ;

const styles = StyleSheet.create({
    Contener: {
        flex: 1,
        
    },
    Text: {
        fontSize: 20,
    },
    Contenerstyle: {
        backgroundColor: '#d3d3d3',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap' ,
    },
    boxStyle: {
        height: 300, 
        width: 235, 
        marginTop: 3,
        marginRight:3,
        backgroundColor: 'white',
        padding: 10  
    },
    Image:{
        width: width - 300,
        height: height,
        margin:5
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
        marginLeft:-60
      },
      horline:{
        backgroundColor: '#A2A2A2',
        height: 2,
        width: 70,
        marginTop: 12,
      },
})
