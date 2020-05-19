import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableHighlight,Image,AsyncStorage} from 'react-native'; 
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


class NotificationScreen extends Component{
  static navigationOptions = {
    title: 'Details',
  }
  constructor(props) {
    super(props)
    this.state={
       Array: []
    } 
  }

  retrieveData = () =>{
   // componentDidMount () {
      const SampleArray = this.props.navigation.getParam('userArray')
    
      // AsyncStorage.setItem('user', JSON.stringify(SampleArray))
      // .then(()=>{
        this.state.Array.push( SampleArray );
        console.log(this.state.Array);

      // console.log('data saved');
      // })
      // .catch((error)=>{
      // console.log(error);
      // })
      
  }

  render(){
  
    return(
      <View style={{flex: 1, flexDirection: 'column', }}>
          <View style={{flexDirection: 'row',paddingBottom:10 }}>
            <Icon
              name="angle-left"
              size={30}
              onPress={()=>this.props.navigation.navigate('Home')}
              style={{marginTop: 50,marginLeft: 40}}
              >
            </Icon> 
            <TouchableHighlight onPress={this.retrieveData}>
            <Text style={styles.texthed}>Notification</Text>
            </TouchableHighlight>
            </View>
          <ScrollView>   
            {
              this.state.Array.map((item,id) =>(
                <View style={{flexDirection: 'column',padding: 10}}  key={id} >
                  <View style={{flexDirection: 'row',paddingTop: 10,paddingLeft: 20}}>
                <Image
                    style={{ width: 40, height: 40 }}
                    source={require('../assets/user.png')}
                />
              <Text style={styles.text}>{item.name}</Text>
            </View> 
              <View style={{paddingLeft:20, paddingRight: 80}}>
                  <Text style={styles.text}> {item.name} i have {item.product} with qientity {item.quentity} my address is {item.address}  {item.mobile_number} </Text>
              </View>
              <View style={styles.horline}></View>
                </View>
              ))
            }
          </ScrollView>
      </View>
    )
  }
}

export default NotificationScreen;

const styles = StyleSheet.create({
  text : {
    fontSize: 17,
    paddingTop: 10,
    paddingLeft: 20,
    
  },
  horline:{
      backgroundColor: '#A2A2A2',
      height: 1,
      width: 500,
      margin: 10
  },
  texthed : {
    fontSize: 20,
    paddingTop: 50,
    paddingLeft: 100
  },
  textsub : {
    fontSize: 17,
    paddingLeft: 50,
    
  },
});

