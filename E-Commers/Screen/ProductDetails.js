import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableHighlight,Image,Button,Dimensions,FlatList} from 'react-native'; 
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 2;

class ProductDetailsScreen extends Component{
  static navigationOptions = () =>({
       
    headerTitle: "ProductDetails",
    headerTitleStyle:{flex: 1,fontSize: 20, color: 'white'},

    headerRight: (           
       <View style={{padding: 10,paddingRight: 20}}>
        <Icon
            name="shopping-cart"
            size={25}
            color={'white'}
            onPress={()=>this.props.navigation.navigate('AddToCart')}   
        />
       </View>
    ),
})
  
  constructor(props) {
    super(props);
    this.params = this.props.navigation.state.params;
    this.state={
      icon: "hert",
      iconName:"heart-o",  
    } 
  }

onIconPress =() =>{
    let iconName = (this.state.icon) ? "heart" : "heart-o";
    this.setState({
    icon : (!this.state.icon),
    iconName: iconName
    })
    this.props.navigation.navigate('WishList')
}

renderFooter = () => {
  return (
    <View style={{ flex: 1,flexDirection:"row", padding: 20,height: 80,marginBottom: 20}}>
      
      <TouchableHighlight onPress={()=> this.props.navigation.navigate('AddToCart',{"heding":Item.heding,
                "image":Item.image,"ammount":Item.ammount,"offerammount":Item.offerammount,})} >          
        <View style={{borderWidth: 2,padding: 20,justifyContent: 'center',marginRight: 30,width: 200,borderColor: 'orange'}}>
          <Text style={{fontSize: 17,textAlign: 'center' ,color:'orange'}}>ADD TO CARD</Text>
        </View>
      </TouchableHighlight>
      
      <TouchableHighlight onPress={()=>this.props.navigation.navigate('ProccedToBy')}>
        <View style={{borderWidth: 2,padding: 20,justifyContent: 'center',width: 200,borderColor: 'orange'}}>
          <Text style={{fontSize: 17,textAlign: 'center',color:'orange'}}>BY NOW</Text>
        </View>
      </TouchableHighlight>
    </View>
    
  );
};

  render(){
   const Item = this.params 
    return(
      <View style={{flex: 1, flexDirection: 'column', }}>
        <ScrollView>
          <View style={{flexDirection: 'column',padding:20}}>
           
          <View style={{flexDirection: 'row',justifyContent: 'space-between',padding: 10, }}>
            <View style={{flex:3,}}>
            <TouchableHighlight>
              <Image
                style={styles.Image}
                source={this.params.image}
              />
            </TouchableHighlight>
          </View>
          <View style={{flex: 1,flexDirection: 'row-reverse',padding: 20}}>
              <Icon
                  name={this.state.iconName}
                  size={30}
                  onPress={this.onIconPress}   
              />
            </View>
          </View>
          <View style={{flexDirection: 'column',padding: 10, }}>
            <Text style={styles.heding}>{this.params.heding}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize:17, fontWeight: 'bold',}}>Display :  </Text>
                <Text style={styles.subtext}> {this.params.display}</Text>
              </View>
              <View style={{flexDirection: 'row',paddingTop: 10}}>
                <Text style={{fontSize:17, fontWeight: 'bold',}}>Camera : </Text>
                <Text style={styles.subtext}> {this.params.camera} </Text>
              </View>
              <View style={{flexDirection: 'row',paddingTop: 10}}>
                <Text style={{fontSize:17, fontWeight: 'bold',}}>Battery :</Text>
                <Text style={styles.subtext}>  {this.params.battery} </Text>
              </View>
              <View style={{flexDirection: 'row',paddingTop: 10}}>
                <Text style={{fontSize:17, fontWeight: 'bold',}}>RAM :  </Text>
                <Text style={styles.subtext}>{this.params.RAM}</Text>
              </View>
              <View style={{flexDirection: 'row',paddingTop: 10}}>
                <Text style={{fontSize:17, fontWeight: 'bold',}}>ROM : </Text>
                <Text style={styles.subtext}> {this.params.ROM}</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row',justifyContent: 'space-between',margin: 30,}}>
            <Button
              title= 'Add To Cart'
              color= 'orange'
              onPress={()=> this.props.navigation.navigate('AddToCart',{"heding":Item.heding,
                "image":Item.image,"ammount":Item.ammount,"offerammount":Item.offerammount,})}
            />
            <Button
              title= 'Buy Now'
              color= 'orange'
              onPress={() => this.props.navigation.navigate('ProccedToBy')}  
            />
          </View>
        </ScrollView>
        <FlatList
            ListFooterComponent={this.renderFooter}
        />
      </View>

    )
  }
}

export default ProductDetailsScreen ;

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
  },
  heding: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingBottom: 5
  },
  subtext: {
    fontSize: 17,
  },
  Image:{
    width: width - 60,
    height: height,
  }
});