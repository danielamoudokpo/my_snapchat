import React, {Component} from 'react';
import {view , StyleSheet, Text,  TextInput, Button, View, Alert } from 'react-native';

class LoginScreen extends Component{

  constructor (){
      super();
      this.state={
        email : null,
        password : null,
        isLogin : false,
      }

  }

  UpdateState= (key,val)=>{
    const state = this.state;
    state[key] = val;
    this.setState[key]=val;
  }

  UserLoging = async ()=> {

    if (this.state.email == null || this.state.password == null) {
      Alert.alert("Please fill in all your credentials")
    }else{
      this.state.isLogin = true;
      console.log("user loggin");
      
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
                onPress={() => this.UserRegister()}
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