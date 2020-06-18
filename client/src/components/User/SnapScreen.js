import React, { Component } from 'react';

import {  Image,StyleSheet, Text, Button, View, Alert } from 'react-native';
import AuthService from '../Auth/AuthService';

class SnapScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            Auth : new AuthService(),
            snaps:null,
            imag : this.props.route.params.imag,
            time: this.props.route.params.time,
            
        }
    }
    
     async componentDidMount(){
        console.log('ggi');
        
         this.setState({imag : this.props.route.params.imag})
         this.setState({time : this.props.route.params.time})
         this.setState({snap_id : this.props.route.params.snap_id})
        
        // this.showImage();  

        let timeInMilli = this.state.time * 1000;

        console.log(timeInMilli);        

        setTimeout(() => { this.Timer()}, timeInMilli);    
    }
    
    // showImage = ()=> {
    //     // console.log(this.state.imag); 
    //     let blobImage = this.state.imag ;

    //     console.log(blobImage);
        
    //     return(
           
    //         <View>
           
    //         </View>

    //     )
    // }

    render(){
        return(
            <View >
                <Text>
                    snap
                </Text>
                {/* <Image 
                source={require('../../../assets/snap2.png')}
                style={{width:400, height: 400}}
                    /> */}
                <Image 
                    source={ {uri :this.state.imag }}
                    style={{width:400, height: 400}}
                    />
                {/* {()=>this.showImage()}        */}
            </View>
        )
    }

     Timer= async() =>{
        try {
            
            this.props.navigation.navigate('Profile')

        } catch (error) {
            console.log(error);
            
        }
        //  Alert.alert('ii')
    }
    
   
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    image:{
            width: 500,
            height: 500,
            
        },})

export default SnapScreen