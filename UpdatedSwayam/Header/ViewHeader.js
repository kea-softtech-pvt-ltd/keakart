import * as React from 'react';
import { View,ScrollView,Text,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../Constants/Colors';
import styles from '../Component/Styles'


function ViewHeaderScreen ({ navigation }) {
   // const navigation = useNavigation();

    return (
        <View style={{flex: 1,}}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
            <View style={styles.DrawerIcon}>
                    <Text style={styles.HeaderText}></Text>
                </View> 
                <View style={{marginTop:20,marginBottom: 20,flexDirection: 'row',justifyContent:'space-around'}}>  
                    <Icon
                        name="search"
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
                     <Text style={styles.HeaderViewText}>Login</Text>
                </View> 
            </View>   
        </View>
    );
  }

  export default ViewHeaderScreen ;