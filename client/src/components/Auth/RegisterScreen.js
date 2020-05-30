import React, {Component} from 'react';
import {view , StyleSheet, Text,  TextInput, Button, View, Alert } from 'react-native';
import AuthService from '../Controller/AuthService'

// function RegisterScreen({ navigation }) {
class RegisterScreen extends Component {

    constructor (){
        super();
        this.Auth = new AuthService(),

        this.state ={
            email : '',
            password : '',
            isSend : false,
            validEmail : false,
        }
    }

    UpdateState = (key,val)=>{
        const state = this.state;
        state[key] = val;
        this.setState[key] = val;
    }

    UserRegister = async () =>{
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.email) === false) {
            console.log("Email is Not Correct");
            this.setState({ validEmail: false })
            Alert.alert('Email is Not Correct')
            // return false;
          }else{
            this.setState({ validEmail: true })
            console.log("Email is Correct");
                if ( this.state.password === '' ) {
                    Alert.alert('Please Enter your Credendials')
                }else{
                    this.setState({isSend: true}),
                    console.log('send');
                    // console.log(this.state.email,this.state.password);
                    var email = this.state.email;
                    var password = this.state.password;
                    var data = {
                        email,
                        password
                    }
                    let res = await this.Auth.register(data)
                    console.log(res);
                    if (res == "email already exist") {
                        Alert.alert('This email already exist')
                    }else{
                        Alert.alert('your account has been created');
                        this.props.navigation.push('Login');
                    }
                    
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
