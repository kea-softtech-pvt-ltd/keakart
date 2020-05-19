import React, { Component } from 'react';
import { View,ScrollView,Text,TouchableOpacity,Image,StyleSheet, Button,TouchableHighlight,AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar,  } from 'react-native-elements';
import withBadge from '../Component/WithBudge'

import OfferImages from './OfferImages';
import Data from '../Data/Data';
import PList from '../Data/Product';
import IconScreen from './Icon';

const BadgedIcon = withBadge(1)(Icon);

class Home extends Component{
    static navigationOptions = ({screenProps}) =>({
       
        headerLeft: ( 
            <TouchableHighlight style={{ marginLeft: 10 }} onPress={()=> screenProps.openDraw()}>
            <Image
                style={{ width: 32, height: 35 }}
                source={require('../assets/drawer.png')}
            />
            </TouchableHighlight> 
              
        ),
        headerTitle: "Marketing",
        headerTitleStyle:{flex: 1,fontSize: 20, textAlign: 'center'},

        headerRight: (
            
           <IconScreen / >
        )
    })

    constructor(props){
        super(props);

        this.state = {
            data : Data,
            product: PList,
            search: '' 
            
        }
    }

    SearchFilterFunction(text) {
        //passing the inserted text in textinput
        const newData = this.state.product.filter(function(item) {
        //applying filter for the inserted text in search bar
        const itemData = item.product ? item.product.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
        });
        this.setState({
        product: newData,
        search:text,
        });
    }
    

    render(){
        
        let el =this
        return(
            <View style={{flex: 1}}>
                 <ScrollView >
                    <OfferImages />
                    <View style={{flexDirection: 'column'}}>   
                        {
                            this.state.data.map((item,id) =>(
                            
                                <View style={{flexDirection: 'row'}}  key={id} >
                                    <TouchableOpacity 
                            
                                        onPress={()=>{
                                             el.props.navigation.navigate('Details',{"name": item.name, "address":item.address, 
                                             "quentity": item.quentity, "product": item.product, "image": item.image })
                                        }}>
                                        <View style={{flexDirection: 'row'}}>
                                            <Image
                                                style={{width: 80,height: 80}} 
                                                source={require('../assets/avtar.jpg')}
                                            />
                                            <Text style={styles.text}> {item.name} </Text>
                                        </View>
                                        <View style={styles.horline}></View>
                                    </TouchableOpacity>
                                </View>
                            ))
                        }                
                    </View>
                    
                    <View style={{flexDirection: 'column',paddingTop: 20 ,paddingBottom: 160}}>
                        <View style={styles.line}></View>
                            
                                <Text style={styles.textstyle}>product List</Text>
                           
                            <SearchBar
                                round
                                searchIcon={{ size: 24 }}
                                onChangeText={text => this.SearchFilterFunction(text)}
                                onClear={text => this.SearchFilterFunction('')}
                                placeholder="Type Here..."
                                value={this.state.search}
                            />

                        <View style={styles.line}></View>

                        <View style={{flexDirection: 'column'}}>   
                            {
                                this.state.product.map((item,id) =>(
                                
                                    <View style={{flexDirection: 'row',}}  key={id} >
                                        <TouchableOpacity 
                                
                                            onPress={()=>{
                                                    el.props.navigation.navigate('ProductDetails',{"sell": item.sell,"ammount":item.ammount, 
                                                    "quentity": item.quentity, "product": item.product, "image": item.image })
                                            }}>
                                            
                                                <Text style={styles.textstyle}> {item.product} </Text>
                                                
                                                <View style={styles.line}></View>
                                            
                                        </TouchableOpacity>
                                    </View>
                                ))
                            }                
                        </View>
                    </View>
                 </ScrollView>
            </View>  
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        paddingTop: 25    
    },
    horline:{
        backgroundColor: '#A2A2A2',
        height: 1,
        width: 400,
        marginLeft: 80

    },
    textstyle: {
        fontSize: 20,
        padding: 10
    },
    line:{
        backgroundColor: '#A2A2A2',
        height: 2,
        width: 500,
      
    },
    });