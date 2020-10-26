import React, {Component} from 'react'
import {View, ImageBackground,StyleSheet,Text,Image,TouchableHighlight} from 'react-native';
import Colors from '../constants/Colors';

class FirstScreen extends Component{
    render() {
        return(
            <View style={styles.container}>
                {/* <ImageBackground source={require('../assets/background.jpg')} style={styles.image} > */}
                    <View style={{padding: 60}}>
                       <Text style={styles.TextTitle}>Swayam</Text>
                        <Text style={styles.Text}>Create Youe Account and start your shopping easy way</Text>
                        </View>
                    <View style={{padding: 10}}>
                        <View style={styles.Button}>
                        <TouchableHighlight onPress={()=> this.props.navigation.navigate('Login')} >          
                            <View style={styles.ButtonContener}>
                                 <Text style={{fontSize: 17,textAlign: 'center' ,color:Colors.primaryColor,fontWeight:'bold'}}>LOGIN</Text>
                            </View>
                        </TouchableHighlight>
      
                        <TouchableHighlight onPress={()=>this.props.navigation.navigate('CreatAccount')}>
                            <View style={styles.ButtonContener}>
                            <Text style={{fontSize: 17,textAlign: 'center',color:Colors.primaryColor,fontWeight:'bold'}}>REGISTER</Text>
                            </View>
                        </TouchableHighlight>
                        </View>   
                    </View>
                    <View style={styles.ButtonContenera}>
                        <Text style={{fontSize: 17,textAlign: 'center' ,color:Colors.primaryColor,fontWeight:'bold'}}>CONTINUE WITH GOOGLE</Text>
                    </View> 
                    <View style={styles.SearchContener}>
                        <Text style={{fontSize: 17,textAlign: 'center' ,color:'#ffffff',fontWeight:'bold'}}>SEARCH</Text>
                    </View>   
                {/* </ImageBackground> */}
            </View>
        )
    }
}

export default FirstScreen ;

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fafafa'
      },
    image: {
        flex: 1,
        justifyContent: "center",
        opacity: 0.8
    },
    TextTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        color: Colors.primaryColor,
        paddingBottom: 30
    },
    Text: {
        textAlign: 'center',
        fontSize: 20,
       // fontWeight: 'bold',
        //color: 'white'
    },
    Button:{
        flexDirection:"row",
         padding: 20,
         height: 80,
        
    },
    ButtonContener: {
        borderWidth: 2,
        padding: 25,
        justifyContent: 'center',
        marginRight: 30,
        width: 200,
        backgroundColor: '#ffffff',
        borderColor: '#d3d3d3'
    },
    ButtonContenera: {
        borderWidth: 2,
        padding: 20,
        justifyContent: 'center',
        marginRight: 30,
        width: 430,
        backgroundColor: '#ffffff',
        borderColor: '#d3d3d3',
        margin: 30
    },
    SearchContener: {
        borderWidth: 2,
        padding: 20,
        justifyContent: 'center',
        marginRight: 30,
        width: 430,
        backgroundColor: '#a9a9a9',
        borderColor: '#a9a9a9',
        marginLeft: 30
    }
})