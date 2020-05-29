import React, {Component} from 'react';
import {view , StyleSheet, Text,  TextInput, Button, View, Alert } from 'react-native';

// function RegisterScreen({ navigation }) {
class RegisterScreen extends Component {

    constructor (){
        super();
        this.state ={
            email : null,
            password : null,
            isSend : false
        }
    }

    UpdateState = (key,val)=>{
        const state = this.state;
        state[key] = val;
        this.setState[key] = val;
    }

    UserRegister = async () =>{
        console.log(this.state.email,this.state.password);
        
        if (this.state.email == null || this.state.password == null ) {
            Alert.alert('Please Enter your Credendials')
        }else{
            this.state.isSend = true,
            console.log('send');
            
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
            {/* <Button
            title='Sign Up'
            onPress={this.signUp}
            /> */}
            {/* <Button
                title="Login"
                backgroundColor="green"
                onPress={() => navigation.push('Login')}
                /> */}

            <Button
                title="Register"
                backgroundColor="green"
                onPress={() => this.UserRegister()}
                />

            <Text h1
                
                style={styles.loginText}
                onPress={() => this.props.navigation.push('Login')}>
                Already Registered? Click here to login
            </Text>  

        </View>

        );
    }
}

  const styles = StyleSheet.create({
    input: {
      width: 350,
      height: 55,
      backgroundColor: '#00ff00',
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
export default RegisterScreen
