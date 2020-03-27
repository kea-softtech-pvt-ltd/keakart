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
        const image =  this.props.navigation.getParam('image')
        const name =  this.props.navigation.getParam('name')
    
    return(
        <View style={{flex:1, flexDirection: 'row',padding: 20}}>
            <ScrollView>
                <Image
                    style={{height: 50, width: 50}}
                    source={image} 
                />
                    <Text style={styles.subtext}>{name}</Text>
            </ScrollView>
        </View>
    )
}
}

export default WishListScreen;

const styles = StyleSheet.create({
    subtext: {
        fontSize: 17,
    }
});