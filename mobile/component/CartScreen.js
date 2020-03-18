import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableHighlight,Image,Button,Dimensions} from 'react-native'; 
import { ScrollView } from 'react-native-gesture-handler';
import {connect} from 'react-redux'
import AddToKart from './AddToKart';
import Products from '../component/Product'

class CartScreen extends Component{
    render(){
        console.log(this.props.cartItems)
        return(
            <View>
                <ScrollView>
                {this.props.cartItems.length > 0 ?
            <AddToKart 
                    onPress={this.props.removeItems}
                    Products={this.props.cartItems}
            />
            :<Text>No Items In Your Cart</Text>    
            }
            </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        removeItems: (Product) =>dispatch({ type:
        'REMOVE_FROM_CART', payload: Product
    })
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (CartScreen);
