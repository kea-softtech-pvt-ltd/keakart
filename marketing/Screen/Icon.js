import React, { Component } from 'react';
import { View, Text,StyleSheet,AsyncStorage,Alert} from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';


class IconScreen extends Component{
  static navigationOptions = {
    title: 'Details',
  }
  constructor(props) {
    super(props)
    this.state={
      count: 1
    } 
  }

  retrieveData = () =>{
    const SampleArray = this.props.navigation.getParam('SampleArray')
    this.setState({
      count: this.state.count+ 1
    })
    this.props.navigation.navigate('Notification',{"userArray": SampleArray})
}

  render(){
    
    return(  
    <View style={{padding: 55}}>
    <View style={{
        position: 'relative',height: 20, width: 20,borderRadius: 15,backgroundColor: '#20b2aa',
        botton: 15,alignItems:'center',justifyContent:'center',zIndex: 2000,
        }}>
            <Text style={{color: 'white',fontWeight:'bold'}}>{this.state.count}</Text>
    </View>
    
    <Icon
        name="bell-o"
        size={30}
        containerStyle={styles.padRight}
        onPress={this.retrieveData}
        
    />
</View>
    )
  }
}

export default IconScreen;

const styles = StyleSheet.create({
  text : {
    fontSize: 17,
    paddingTop: 17,
    paddingLeft: 20,
    
  },
  horline:{
      backgroundColor: '#A2A2A2',
      height: 1,
      width: 500,
      margin: 10
  },
})