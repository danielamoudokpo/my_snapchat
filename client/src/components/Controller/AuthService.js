import React, { Component } from "react"
import Axios from 'axios'


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
        
    
        
}


export default AuthService;