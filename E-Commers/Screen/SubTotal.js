import React, { Component } from 'react';
import {View,StyleSheet,Text, Button} from 'react-native';

class SubTotal extends Component{
    render() {
        return(
            <View style={styles.Contener}>
                <Text style={styles.Text}>SubTotal ( 2 Items ): {'\u20B9'}18088</Text>
                <View style={styles.Button}>
                    <Button
                        title='Procced To By'
                        color= 'orange'
                        onPress={()=>this.props.navigation.navigate('ProccedToBy')}
                    />
                </View>
            </View>
        )
    }

}

export default SubTotal ;

const styles = StyleSheet.create({
    Contener : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#f0ffff'
    },
    Text: {
        flex: 1,  
        fontSize: 20 
    },
    Button : {
        padding : 20,
       
    }
})