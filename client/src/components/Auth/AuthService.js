import React from "react";
import Axios from 'axios';
import { AsyncStorage } from 'react-native'


class AuthService   {


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
                // console.log(res)
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
            // console.log("too");
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


    sendSnap = async (token,duration,to,image)=> {
      console.log('ouiiiiiiiii');
      console.log(duration);
      return new Promise ((resolve,reject)=>{

        let headers = {
          token
        };
  
        let body = new FormData();
        body.append('duration', duration);
        body.append('to', to);
        var photo = {
          uri: image,
          type: 'image/jpeg',
          name: 'photo.jpg',
        };

        body.append('image', photo);

        Axios.post('http://snapi.epitech.eu/snap',body, {headers} )
        .then(res =>{
          // console.log(res.status);
          if (res.status == 200) {
            resolve(res.data.data)
          }
          
        }).catch(error =>{
          console.log(error);
          
        })
      })

    }

    getSnaps = async (token) =>{

      return new Promise((resolve,reject)=>{

        let headers ={
          token
        }

        Axios.get('http://snapi.epitech.eu/snaps',{headers})
        .then( res=>{
          console.log("toi");
          
          if (res.status == 200) {

            resolve(res.data.data);
              
          }
        }).catch(error =>{
          console.log(error);
          
        })
      })
    }


    getSnapId = async(id,duration,from,token)=>{
      console.log("here");
      console.log(id);
      console.log(token);
      
      return new Promise ((resolve,reject)=>{

        let headers ={
          token
        }
        const myUrl = 'http://snapi.epitech.eu/snap/'+id;
        console.log(myUrl);
        
        Axios.get(myUrl,{headers ,responseType: 'blob'},
        )
        .then(res=>{
          console.log('almost');

          if(res.status==200){
            console.log('sas');

            const url = window.URL.createObjectURL(new Blob([res.data]));
            resolve(url)

            // console.log(res);
            
          }
          
        }).catch(error =>{
          console.log(error);
          
        })
      })
    }

    seenSnaps = async (id,token)=> {
      console.log("ppp");

      // var token = await this.retrive();
      return new Promise ((resolve,reject)=>{

        // console.log(token);
        let headers ={
          'Content-Type': " application/json" ,
          'token':token,

        }
        let body ={
          'id':id
        } 
        const myUrl = 'http://snapi.epitech.eu/seen';
        console.log(myUrl);
        
        Axios.post(myUrl,body, {headers},
        )
        .then(res=>{
          console.log('hi');
          console.log(res);
          
          if(res.status==204){
            console.log("good");
            
            resolve(res.data.data)
            // console.log(res);
          }
          
        }).catch(error =>{
          console.log(error);
          
        })
      })
    }

        
}



export default AuthService;