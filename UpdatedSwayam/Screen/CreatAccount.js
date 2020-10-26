import React, {Component} from 'react';
import {View, Text,StyleSheet,Image,TouchableHighlight,TextInput, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors'

class CreatAccount extends Component {
    constructor(props){
        super(props);
        this.api_token="XrIdUCxU7SJK2pJz1lLAyf0fnRosZfUjjiDwcZvozObTjjuqrRuM5MtoFFRXnLiMk77zjoKFQknfoGhNdkELNSI8vejW2Gqy5u52URDqQAQmmkxglvBr2ZW7hTIVpcHVZYL0IMJGmk3HIzIfaB8c4hnb2eh1eCA14iBpCCq1M4y2qpN6SQpT9rk3Lkz903ysb3wZ8auU32DWP6KNznNBUCVvxmsatv8MZGgDEPL1Cr0jwvxdjiaQlJCHvJRpVAFr"
        this.state={
          name : '',
          MobileNumber: '',
          email : '',
          password: '',
          iconName:"eye-slash"
        }
      }

    onIconPress =() =>{
        let iconName = (this.state.Password) ? "eye" : "eye-slash";
        this.setState({
        Password : !this.state.Password,
        iconName: iconName
        })
    }

    myfun = () => {
        console.log("hi")
       // console.log(this.state)
        const{name,MobileNumber,email,password} =this.state
        // console.log(name,MobileNumber,email,password)
       // { "Name": name, "MobileNumber": MobileNumber,"Email": email,"Password": password}
        fetch(`http://swayamproducts.com/index.php?route=api/customer&api_token=${this.api_token}` , {
        method: 'POST',
        
        body: JSON.stringify({
            name: name,
            MobileNumber: MobileNumber,
            email : email,
            password: password,
        
        })
        })
        .then((response) => JSON.stringify(response.json())) 
        .then((responseData) => { console.log("response: " + responseData); })
        .catch((err) => { console.log(err); });

        this.props.navigation.navigate('OTP')
    }

    // componentDidMount(){
    //     fetch(`http://swayamproducts.com/index.php?route=api/customer&api_token=${this.api_token}` , {
    //         method: 'POST',
            
    //         body: JSON.stringify({
    //          name: "",
    //          MobileNumber: "",
    //          email : "",
    //          password: "",
            
    //         })
    //       })
    //       .then((response) => JSON.stringify(response.json())) 
    //       .then((responseData) => { console.log("response: " + responseData); })
    //       .catch((err) => { console.log(err); });

    // }
     
    render() {
      
        return(
            <View style={styles.Contener}>
                 <View style={{alignItems: "center",padding: 10,}}>
                    <TouchableHighlight>
                        <Image
                            style={styles.Image}
                            source={require('../assets/cctv1.png')}
                        />
                    </TouchableHighlight> 
                </View>
                <View ><Text style={styles.TextHed}>Creat Account</Text></View>
                <View ><Text style={styles.Text}>Name</Text></View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Enter Your Name"
                        underlineColorAndroid='transparent'
                        onChangeText={name => this.setState({name})}
                    />
                </View>
                <View ><Text style={styles.Text}>MobileNumber</Text></View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="MobileNumber"
                        maxLength={10}  
                        keyboardType={'phone-pad'}
                        underlineColorAndroid='transparent'
                        onChangeText={MobileNumber => this.setState({MobileNumber})}
                    />
                </View>
                <View ><Text style={styles.Text}>Email</Text></View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        underlineColorAndroid='transparent'
                        onChangeText={email => this.setState({email})}
                    />
                </View>
                <View ><Text style={styles.Text}>Password</Text></View>
                <View style={styles.inputContainer} >
                    <TextInput style={styles.inputs}
                        placeholder="At least 6 character"
                        underlineColorAndroid='transparent'
                        secureTextEntry={this.state.Password}
                        onChangeText={password => this.setState({password})}
                    />
                        <TouchableHighlight onPress={this.onIconPress}>
                            <Icon name={this.state.iconName}  size={25} style={{padding:15}} /> 
                        </TouchableHighlight> 
                </View>
                <View style ={{marginTop: 10}} ><Text style={styles.Text}>We will send you a text to verify your phone.
                    Message and Data rates may apply.</Text>
                </View>
                <View style={{margin: 30,}} >
                    <Button 
                        title= ' Continue'
                        style={styles.inputContainerButton}
                        color = {Colors.primaryColor}
                        onPress = {()=> this.props.navigation.navigate('OTP')}
                       //onPress={this.myfun}
                    /> 
                </View>
            </View>
        )
    }
}

export default CreatAccount ;

const styles = StyleSheet.create({
    Contener : {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        margin:20
    },
    Image : {
        width: 50, 
        height: 50,
        resizeMode: 'cover',
        borderRadius: 30
    },
    TextHed: {
        textAlign: 'center',
        fontSize: 25,
        padding: 10,
    
    },
    Text: {
        fontSize: 17,
        paddingLeft: 30,
        padding: 10
    
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius:10,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 4,
        marginLeft: 30,
        marginRight: 30,
       
    },
    inputContainerButton: {
        backgroundColor: '#FFFFFF',
        borderRadius:10,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 4,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30,
        
    },
    inputs:{
        height:55,
        marginLeft:10,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
});
