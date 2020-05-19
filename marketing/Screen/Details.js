import React, { Component } from 'react';
import { View,ScrollView,Text,Image,StyleSheet, Button,Dimensions,TouchableHighlight} from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';

class DetailsScreen extends Component{
    static navigationOptions = {  
        title: 'Details',  
    };
    
    constructor(props){
        super(props)
        
    }

    render(){
    
        const name =  this.props.navigation.getParam('name')
        const product =  this.props.navigation.getParam('product')
        const address =  this.props.navigation.getParam('address')
        const quentity =  this.props.navigation.getParam('quentity')
        const image = this.props.navigation.getParam('image')

        const win = Dimensions.get('window');
        const ratio = win.width/541; 

        return(
            <View style={{flex: 1, flexDirection: 'column',padding: 10, }}>
                <ScrollView >
                    <View style={{flexDirection: 'column'}}>
                                   
                        <Image
                            source={image}
                            style={{ height: 362 * ratio,  width: win.width}}
                        />
                        
                        <Text style={styles.text}>Name :  {name} </Text>
                        <Text style={styles.text}>Product :  {product} </Text>
                        <Text style={styles.text}>Quentity :  {quentity} </Text>
                        <Text style={styles.text}>Address :  {address} </Text>

                         
                    </View>    
                    <View style={{padding: 40}}>
                        <Button
                            title= 'Show Live Location'
                            color= 'orange'
                            onPress={() => this.props.navigation.navigate('Tracker')}
                            
                        />
                    </View>     
                </ScrollView>
            </View>  
        )
    }
}

export default DetailsScreen;

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        padding: 15
        
        },
        
    });