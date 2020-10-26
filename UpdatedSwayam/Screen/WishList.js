import React, {Component} from 'react';
import {View,Text, StyleSheet,Image,Dimensions,Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ProductList from '../Data/ProductList';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 10;

class WishListScreen extends Component {
    static navigationOptions = {
        title: 'Wish List',
    }
    constructor(props) {
        super(props);
        this.state={
            product: ProductList
        }
       
    }

    render(){
        return(
            <View style = {styles.Contener}>
                <ScrollView>
                    {
                        this.state.product.map((item,id) =>(
                            <View style={{backgroundColor : '#d3d3d3'}}>
                                <View style = {styles.RowContener} key={id}>
                                    <Image
                                        style={styles.Image}
                                        source={item.image}
                                    /> 
                                    <Text style={styles.Text}>{item.heding}</Text> 
                                    <View>
                                        <Text style={styles.Text}>{'\u20B9'}{item.ammount}</Text>
                                        <View>
                                            <Text style={styles.Text}>{'\u20B9'}{item.offerammount}</Text>
                                            <View style ={styles.HorizontalLine}></View>
                                        </View>
                                    </View>
                                    <View>
                                        <Button
                                            title= 'Wishlist'
                                            color= 'orange'
                                            onPress={() => this.props.navigation.navigate('WishList')}  
                                        />
                                    </View>
                                </View>
                                    {/* <View style={styles.horlinefull}></View> */}
                            </View>
                        ))
                    }
                    
                </ScrollView>
            </View>
        )
    }
}

export default WishListScreen ; 

const styles = StyleSheet.create({
    Contener : {
        flex: 1,
    },
    RowContener: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'white'
    },
    Image:{
        width: width - 400,
        height: height
    },
    Text : {
        fontSize: 17
    },
    HorizontalLine : {
        backgroundColor: '#A2A2A2',
        height: 3,
        width: 50,
        marginTop: -13
    },
    horlinefull:{
        backgroundColor: '#A2A2A2',
        height: 2,
        
    },
})