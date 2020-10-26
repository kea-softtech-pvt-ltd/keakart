import * as React from 'react';
import { View,ScrollView,Text,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {  DrawerActions } from '@react-navigation/native';
import Colors from '../Constants/Colors';
import styles from '../Component/Styles'


function HeaderScreen (props) {
   // const navigation = useNavigation();

    return (
        <View style={{flex: 1,}}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                <View style={styles.DrawerIcon}>
                    <Text style={styles.HeaderText}>Keakart</Text>
                </View> 
                <View style={{marginTop:15,marginBottom: 15,flexDirection: 'row',justifyContent:'space-around'}}>  
                    <Icon
                        name="plus-circle"
                        size={20}
                        color={'white'}
                        //onPress={this.retrieveData}  
                    />
                     <Icon
                        name="shopping-cart"
                        size={20}
                        color={'white'}
                        style={{paddingLeft: 20,paddingRight: 20}}
                        //onPress={this.retrieveData}  
                    />
                    <Text style={styles.HeaderText}>Login</Text>
                </View> 
            </View>   
        </View>
    );
  }

  export default HeaderScreen ;