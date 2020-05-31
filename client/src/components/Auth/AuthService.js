import React, { Component } from "react"
import Axios from 'axios'
import { AsyncStorage } from 'react-native'
import { Constants } from 'expo';


class AuthService  {


    async register(data){
        // console.log(data);
        return new Promise ((resolve, reject) =>{
            Axios.post('http://snapi.epitech.eu/inscription', data)
            .then(res => {
                // console.log('here');
                // console.log(res.status)
                if (res.status == 200) {
                    resolve(res.data);
                }
                }).catch(error => {
                    // console.log(error)
                    resolve('email already exist');
                })
        })
          
    }

    async login(data){
        // console.log(data);
        return new Promise ((resolve, reject)=>{
            Axios.post('http://snapi.epitech.eu/connection', data)
            .then(res => {
                    var token;
                    if(res.status === 200){
                        // console.log("oui");
                        token = res.data
                        resolve(token);
                    }
                }).catch(error =>{
                    // console.log(error.status);
                    resolve ('kaka')
                })

            })
       
        }


    async contacts (token){
        console.log("yes");
        return new Promise ((resolve,reject)=>{
            console.log("oui");
            let headers = {
                token,
              }
              // console.log(token);
              Axios.get('http://snapi.epitech.eu/all', {headers})
              .then( res => {
                // console.log(res.data.data)
                if(res.status == 200){
                  console.log('oooooo');
                  
                //   this.setState({ contactlist : response.data.data})
                  resolve(res.data.data)
                }
              }).catch(error => {
                this.props.navigation.navigate('LogoutScreen');
              })
    
        })
    }

    retrive = async () => {
        try {
          const value = await AsyncStorage.getItem('token');
          if (value !== null) {
            // We have data!!
            console.log("too");
            // console.log(value);
            return value
          }else{
            console.log('null');
            
          }
        } catch (error) {
          // Error retrieving data
          console.log('AsyncStorage save error: ' + error.message);

        }
      };

    setItem = async () => {
        console.log('ooo');
        try {
            await AsyncStorage.setItem('token',data);
            console.log('data stored');
        } catch (error) {
            // Error saving data
            console.log('AsyncStorage save error: ' + error.message);
        }
    };
        
}


export default AuthService;