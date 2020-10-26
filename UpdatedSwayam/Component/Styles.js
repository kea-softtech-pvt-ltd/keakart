import { StyleSheet,Dimensions } from 'react-native';
import Colors from '../Constants/Colors';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 4;


export default StyleSheet.create({
    textstyle: {
        fontSize: 20,
      },
      ContenerView:{
       flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
        flexWrap: 'wrap' ,
      },
      boxStyle: {
        height: 270, 
        width: 170, 
        margin: 10,
        // borderColor: 'black',
        // borderWidth: 1
      },
      Image:{
        width: 150,
        height: 200,
        margin: 5,
      },
      buttomtitle: {
        fontSize: 17,
       //paddingLeft:10,
        paddingTop: 10,
        color: 'gray',   
      },
      buttomnumber: {
        fontSize: 17,
        paddingBottom: 10,
        //paddingLeft:10,
        color: Colors.primaryColor,
        paddingRight: 7    
      },
      buttomnumbere: {
        fontSize: 17,
        paddingBottom: 10,
        color: 'gray',
        marginLeft:-65
      },
      horline:{
        backgroundColor: '#A2A2A2',
        height: 2,
        width: 70,
        marginTop: 12,
      },
      DrawerIcon: {
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row'
      },
      HeaderText: {
          fontSize: 17,
          color: 'white',
      } ,
      HeaderViewText: {
        fontSize: 17,
        color: 'white',
        marginRight: 10
    } ,
      
});