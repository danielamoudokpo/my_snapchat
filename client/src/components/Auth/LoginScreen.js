import React, {Component} from 'react';
import { AsyncStorage,view , StyleSheet, Text,  TextInput, Button, View, Alert } from 'react-native';
import AuthService from './AuthService';

class LoginScreen extends Component{

  constructor (){
      super();
      this.Auth = new AuthService();
      this.state={
        email : '',
        password : '',
        isLogin : false,
      }

  }

  UpdateState= (key,val)=>{
    const state = this.state;
    state[key] = val;
    this.setState[key]=val;
  }

  UserLoging = async()=> {

    if (this.state.email == '' || this.state.password == '') {
      Alert.alert("Please fill in all your credentials")
    }else{
      this.setState({isLogin : true})
      console.log("user loggin");
      var email = this.state.email;
      var password = this.state.password;
      var data = {
          email,
          password
      }
      let res = await this.Auth.login(data);
      // console.log(res);
      if (res === 'kaka') {
        // console.log("oui");
        Alert.alert("Incorrect email or Password")
        
      }else{
        var data = res.data.token;
        // var email = res.data.email;
        let setItem = async () => {
          console.log('ooo');
          try {
              await AsyncStorage.setItem('token',data);
              console.log('data stored');
          } catch (error) {
              // Error saving data
              console.log('AsyncStorage save error: ' + error.message);
          }
      };

        setItem();

        let retrieveData = async () => {
          try {
            const value = await AsyncStorage.getItem('token');
            if (value !== null) {
              // We have data!!
              console.log("yes token");
              // console.log(value);
            }else{
              console.log('null');
              
            }
          } catch (error) {
            // Error retrieving data
            console.log('AsyncStorage save error: ' + error.message);

          }
        };

        retrieveData();

        this.props.navigation.push('Profile')

      }
    }

  }

    render(){
      
        return (

          <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder='Enter your Email'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.UpdateState('email', val)}
            />

            <TextInput
            style={styles.input}
            placeholder='Ente your Password'
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.UpdateState('password', val)}
            />      
            <Button
                title="Login"
                backgroundColor="green"
                onPress={() => this.UserLoging()}
                />
            <Text 
                style={styles.loginText}
                onPress={() => this.props.navigation.push('Register')}>
                Not Registered? Click here to Register
            </Text>  
        </View>


            
        );
    } 

}
const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginText:{

    color: "red"
    
}
})

// function LoginScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Button
//           title="Go to Details... again"
//           onPress={() => navigation.push('Home')}
//         />
//       </View>
//     );
//   }

export default LoginScreen