// import React from 'react';
// import {View,Text,StyleSheet, Image,ScrollView,ImageBackground} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import  Colors from '../Constants/Colors';
// import imagesPath from '../config/Image';
// import { color } from 'react-native-reanimated';

// class SelectedProduct extends React.Component{

//     constructor(props){
//         super(props);
//         this.state={
//             icon: "hert",
//             iconName:"heart-o",  
//           } 
//         }
      
//       onIconPress =() =>{
//           let iconName = (this.state.icon) ? "heart" : "heart-o";
//           this.setState({
//           icon : (!this.state.icon),
//           iconName: iconName
//           })
//           this.props.navigation.navigate('WishList')
//       }
//     render(){
//         const { route } = this.props;
//         console.log(this.props)
//         const item = route.params
//         console.log(item);
        
//         return(
//             <View style={styles.SelectContener}>
//                 <ScrollView >
//                     <View style={styles.Selectmain}>
//                         <ImageBackground source={imagesPath.ProductList + item.image} style={styles.SelectImage}>
//                             <View style={{flexDirection: 'row-reverse'}}>
//                             <View style={styles.IconButton}>
//                                 <Icon
//                                     name={this.state.iconName}
//                                     size={25}
//                                     style={{paddingTop: 8,color: 'gray'}}
//                                     onPress={this.onIconPress}   
//                                 />
//                             </View> 
//                             </View>
//                             <View style={{flexDirection: 'row-reverse'}}>
//                             <View style={styles.IconButton}>
//                                 <Icon
//                                     name="share"
//                                     size={25}
//                                     style={{paddingTop: 8,color: 'gray'}}
//                                     onPress={this.onIconPress}   
//                                 />
//                             </View>
//                             </View>   
//                         </ImageBackground>
//                     </View>
//                     <View style={styles.ViewMainContener}>
//                         <Text style={styles.ViewText}>{item.name}</Text>
//                         <View style={{flexDirection: 'row',}}>
//                             <Text style= {styles.buttomnumber}>{'\u20B9'}{item.price}</Text>
//                             {/* <View style={styles.horline}></View>
//                             <Text style= {styles.buttomnumbere}>{'\u20B9'}{item.special}</Text>    */}
//                         </View>
//                         <View style={styles.DetailsShow}>
//                             <Text style={styles.ViewText}>Product Details</Text>
//                             <View style={{flexDirection: 'row'}}>
//                             <View style={{marginRight:40}}>
//                                 <Text style={styles.ViewTextGray}>Model </Text>
//                                 <Text style={styles.ViewTextGray}>Product </Text>
//                                 <Text style={styles.ViewTextGray}>height </Text>
//                                 <Text style={styles.ViewTextGray}>Width </Text>
//                                 <Text style={styles.ViewTextGray}>Weight </Text>
//                             </View>
//                             <View>
//                                 <Text style={styles.ViewText}> {item.model}</Text>
//                                 <Text style={styles.ViewText}> {item.name}</Text>
//                                 <Text style={styles.ViewText}> {item.height}</Text>
//                                 <Text style={styles.ViewText}> {item.width}</Text>
//                                 <Text style={styles.ViewText}> {item.weight}</Text>
//                             </View>
//                             </View>
//                         </View>
//                     </View>
//                 </ScrollView>  
//             </View>
//         )
//     }
// }

// export default  SelectedProduct ;

// const styles = StyleSheet.create({
//     SelectContener: {
//         flex: 1,
//         backgroundColor: 'white'
//     },
//     Selectmain: {
//     flexDirection: 'row-reverse',
//        height: 500
//     },
//     SelectImage: {
//         width: 400,
//         height: 400,
//         margin: 5
//     },
//     IconButton: {
//         borderRadius: 40,
//         borderColor: '#fffaf0',
//         backgroundColor: '#fffaf0',
//         height:40,width:40,
//        shadowColor: 'black',
//         shadowOffset: { width: 0, height: 2 },
//         shadowRadius: 6,
//         shadowOpacity: 0.26,
//         elevation: 8,
//         alignItems:'center',
//         margin: 10,
//     },
//     ViewMainContener: {
//         flex: 1,
//         padding: 10,
//     },
//     ViewTextGray: {
//         fontSize:17,
//         color: 'gray',
//         paddingTop:10,
//         paddingBottom:10
//     },
//     ViewText : {
//         fontSize:17,
//         paddingTop:10,
//         paddingBottom:10
//     },
//     buttomnumber: {
//         fontSize: 17,
//         //color: 'gray',
//         paddingRight: 7    
//     },
//     buttomnumbere: {
//         fontSize: 17,
//         color: 'gray',
//         marginLeft:-65
//     },
//     horline:{
//         backgroundColor: '#A2A2A2',
//         height: 2,
//         width: 70,
//         marginTop: 12,
//     },
//     DetailsShow:{
//         paddingTop:20
//     }
// })