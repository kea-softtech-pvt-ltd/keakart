import React, { Component } from 'react';
import { View, Text,StyleSheet,ScrollView,TextInput,Button } from 'react-native';  
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';

class OrderProduct extends Component {  
    
  constructor(props) {
    super(props);

    this.state = {
        name: '',
        mobile_number: '',
        address: '',
        quentity: '',
        
        favModel:'',
        items2: [
          {
            label: 'Sunsilk Shampoo',
            value: 'sunsilk shampoo',
          },
          {
            label: 'Colgate',
            value: 'colgate',
         },
          {
            label: 'Dove Shampoo',
            value: 'dove shampoo',
          },
          {
            label: 'Lux Sope',
            value: 'lux sope',
          },
          {
            label: 'Tressmee Shampoo',
            value: 'tressmee shampoo',
          },
          {
            label: 'Clenic Pluse',
            value: 'clenic pluse',
          },
        ]
    };
}

  render() { 
    let SampleArray = this.state;
      return (  
        <View style={{ flex: 1,backgroundColor: 'aliceblue'}}> 
        <Icon
              name="angle-left"
              size={30}
              onPress={()=>this.props.navigation.navigate('Home')}
              style={{marginTop: 50,marginLeft: 40}}
              >
          </Icon>
        
        <ScrollView style={styles.scrollView}>
          
            <View style={{marginLeft: 30, paddingTop: 60}}> 
            
              <Text  style={{fontSize: 20}}>Product</Text>
              <View style={{backgroundColor: 'white',margin: 10 }}>
              <RNPickerSelect
                  placeholder={{
                      label: 'Select Product',
                      value: null,
                  }}
                  items={this.state.items2}
                  onValueChange={(value) => {
                      this.setState({
                          favModel: value,
                      });
                  }}
                  style={pickerSelectStyles.inputIOS}
                  value={this.state.favModel}
                />
              </View> 
              <Text  style={{fontSize: 20,marginTop: 10}}>Product Quentity</Text>
              <TextInput  
                  placeholder="Enter Product Quentity"  
                  underlineColorAndroid='transparent'  
                  style={pickerSelectStyles.inputIOS}
                  maxLength={5}  
                  keyboardType={'phone-pad'}
                  onChangeText={quentity => this.setState({quentity})}
              />     
            
            <Text style={{fontSize: 20,marginTop: 10}}>Full Name</Text>
              <TextInput
                  style={pickerSelectStyles.inputIOS} 
                  onChangeText={name => this.setState({name})}
              />
            <Text  style={{fontSize: 20,marginTop: 10}}>Mobile Number</Text>
            <TextInput  
                  placeholder="+91 Enter Your Mobile Number"  
                  underlineColorAndroid='transparent'  
                  style={pickerSelectStyles.inputIOS}
                  maxLength={10}  
                  keyboardType={'phone-pad'}
                  onChangeText={mobile_number => this.setState({mobile_number})}
              />  
              <Text  style={{fontSize: 20,marginTop: 10}}>Address</Text>
              <TextInput
                  style={pickerSelectStyles.inputIOS}
                  multiline
                  numberOfLines={4}
                onChangeText={address => this.setState({address})}
              />
            </View>
            <View style={{margin: 50}}>
            <Button
              title= 'Send'
              color= '#20b2aa'
              onPress={() => this.props.navigation.navigate('Icon',{"SampleArray":SampleArray,})}
            />
            </View>
          </ScrollView>
  
          </View> 
      );  
    }  
  } 
  
export default OrderProduct ;

const styles = StyleSheet.create({
  scrollView: {
    paddingVertical: 10,
    
    }, 
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
    marginRight: 16,
    margin: 10
    },
});