import React from 'react';
import {View,Text,StyleSheet,ScrollView,ImageBackground,Image, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import  Colors from '../Constants/Colors';
import imagesPath from '../config/Image';
import * as Font from 'expo-font';

class ProductDetails extends React.Component{

    constructor(props){
        super(props);
        this.state={
            icon: "hert",
            iconName:"heart-o",  
          } 
        }

        componentDidMount() {
            Font.loadAsync({
                'Piazzolla': require('../assets/fonts/Piazzolla-VariableFont_opsz,wght.ttf'),
            })  
        }
      
    onIconPress =() =>{
        let iconName = (this.state.icon) ? "heart" : "heart-o";
        this.setState({
        icon : (!this.state.icon),
        iconName: iconName
        })
        this.props.navigation.navigate('WishList')
    }
    render(){
        const { route } = this.props;
        console.log(this.props)
        const item = route.params.item
        console.log(item);
        
        return(
            <View style={styles.SelectContener}>
                <ScrollView >
                    <View style={styles.Selectmain}>
                        <ImageBackground source={imagesPath.ProductList + item.image} style={styles.SelectImage}>
                            <View style={{flexDirection: 'row-reverse'}}>
                            <View style={styles.IconButton}>
                                <Icon
                                    name={this.state.iconName}
                                    size={25}
                                    style={{paddingTop: 8,color: 'gray'}}
                                    onPress={this.onIconPress}   
                                />
                            </View> 
                            </View>
                            <View style={{flexDirection: 'row-reverse'}}>
                            <View style={styles.IconButton}>
                                <Icon
                                    name="share"
                                    size={25}
                                    style={{paddingTop: 8,color: 'gray'}}
                                    onPress={this.onIconPress}   
                                />
                            </View>
                            </View>   
                        </ImageBackground>
                    </View>
                    <View style={styles.ViewMainContener}>
                        <Text style={styles.ViewTextNmae}>{item.name}</Text>
                        {/* <Text style={styles.ViewText}>{item.description}</Text> */}
                        <Text style= {styles.buttomnumber}>{'\u20B9'}{item.price}</Text>
                        <Text style= {styles.buttomtitle}>Ex.Tax: {'\u20B9'}{item.price}</Text>  
                        <View style={{flexDirection: 'row',marginTop:10}}>
                            <View style={styles.RetingContener}>
                                <Text style= {styles.RetingNumber}>4.4*</Text>
                            </View>
                            <Text style={styles.ViewTextGray}>148 ratings </Text>
                            <Image 
                                source={require('../assets/flipLogo.png')}
                                style={{width: 80,height: 50,paddingLeft: 20}}
                            />
                        </View>
                    </View>
                    <View style={styles.DetailsShow}>
                        <View style={styles.WhiteBack}>
                            <Text style={styles.ViewText}>Availbales Offers</Text>
                            <View style={{flexDirection: 'row',justifyContent: 'space-between',marginBottom:10}}>
                                <Icon 
                                    name="tag"
                                    size={15}
                                    color={'green'}
                                    style={{paddingRight: 10}}
                                />
                                <Text style={styles.ViewOfferText}>Bank Offers 5% unlimited cash back offers Axis bank Credit Card</Text>
                                <Icon 
                                    name="chevron-right"
                                    size={15}
                                    color={'gray'}
                                    style={{paddingLeft:5}}
                                />
                            </View>
                            <View style={{flexDirection: 'row',justifyContent: 'space-between',marginBottom:10}}>
                                <Icon 
                                    name="tag"
                                    size={15}
                                    color={'green'}
                                    style={{paddingRight: 10}}
                                />
                                <Text style={styles.ViewOfferText}>Bank Offers 5% unlimited cash back offers Axis bank Credit Card</Text>
                                <Icon 
                                    name="chevron-right"
                                    size={15}
                                    color={'gray'}
                                    style={{paddingLeft:5}}
                                />
                            </View>
                            <View style={{flexDirection: 'row',justifyContent: 'space-between',marginBottom:10}}>
                                <Icon 
                                    name="tag"
                                    size={15}
                                    color={'green'}
                                    style={{paddingRight: 10}}
                                />
                                <Text style={styles.ViewOfferText}>Bank Offers 5% unlimited cash back offers Axis bank Credit Card</Text>
                                <Icon 
                                    name="chevron-right"
                                    size={15}
                                    color={'gray'}
                                    style={{paddingLeft:5}}
                                />
                            </View>
                        </View>
                        <View style={styles.WhiteBack}>
                            <Text style={styles.ViewText}>Product Details</Text>
                            <View style={{flexDirection: 'row'}}>
                            <View style={{marginRight:40}}>
                                <Text style={styles.ViewTextGray}>Brand </Text>
                                <Text style={styles.ViewTextGray}>Product Code </Text>
                                <Text style={styles.ViewTextGray}>Reword Points </Text>
                                <Text style={styles.ViewTextGray}>Availability</Text>
                            </View>
                            <View>
                                <Text style={styles.ViewText}> {item.name}</Text>
                                <Text style={styles.ViewText}> {item.model}</Text>
                                <Text style={styles.ViewText}> {item.points}</Text>
                                <Text style={styles.ViewText}> {item.stock_status}</Text>
                            </View>
                            </View>
                            <View style={{flexDirection: 'row',paddingTop: 20,justifyContent: 'space-between',}}>
                                <Text style={styles.ViewDetailsText}>All Details</Text>
                                <Icon 
                                    name="chevron-right"
                                    size={15}
                                    color={'gray'}
                                />
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex:1}}>
                            <Button 
                                title="AddToCart"
                                onPress={()=>this.props.navigation.navigate('AddToCart', item)}
                            />
                            </View>
                            <View style={{flex:1}}>
                            <Button 
                                title="AddToCart"
                            />
                            </View>
                        </View>
                    </View>
                </ScrollView>  
            </View>
        )
    }
}

export default  ProductDetails ;

const styles = StyleSheet.create({
    SelectContener: {
        flex: 1,
        backgroundColor: 'white'
    },
    Selectmain: {
    flexDirection: 'row-reverse',
    },
    SelectImage: {
        width: 400,
        height: 400,
        margin: 5
    },
    IconButton: {
        borderRadius: 40,
        borderColor: '#fffaf0',
        backgroundColor: '#fffaf0',
        height:40,width:40,
       shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        alignItems:'center',
        margin: 10,
    },
    ViewMainContener: {
        flex: 1,
        padding: 10,
    },
    ViewTextGray: {
        fontSize:17,
        color: 'gray',
        paddingTop:10,
        paddingBottom:10
    },
    ViewTextNmae:{
        fontSize:17,
        paddingBottom:10,
    },
    ViewText : {
        fontSize:17,
        paddingBottom:10,
        fontFamily: 'Paizzolla'
    },
    buttomnumber: {
        fontSize: 20,
        paddingRight: 7,  
        fontFamily: 'Paizzolla'
    },
    buttomnumbere: {
        fontSize: 17,
        color: 'gray',
        marginLeft:-65
    },
    buttomtitle:{
      fontSize:17,
      paddingTop:10
    },
    horline:{
        backgroundColor: '#A2A2A2',
        height: 2,
        width: 70,
        marginTop: 12,
    },
    DetailsShow:{ backgroundColor: '#f2f2f2'},
    WhiteBack: { backgroundColor: 'white',marginTop: 5,marginBottom: 5,padding:10},
    ViewDetailsText: { fontSize: 17,fontFamily: 'Paizzolla'},
    ViewOfferText:{ fontSize: 17,fontFamily: 'Paizzolla',color: 'gray' },
    RetingContener: {backgroundColor: 'green',borderRadius:10,marginRight:10,marginBottom:5,marginTop:5,alignItems: 'center'},
    RetingNumber:{ fontSize:17,color: 'white',padding: 5}
})