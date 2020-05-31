import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView,FlatList,TouchableOpacity,AsyncStorage ,view , StyleSheet, Text,  TextInput, Button, View, Alert } from 'react-native';

class SnapScreen extends Component(){

    constructor(props){
        super(props);
        state={
            imag : null,
        }
    }
    
    componentDidMount(){

        console.log(this.state.imag);
        
    }
    
    render(){
        return(
            <View>

                <Text>
                    snap
                </Text>
            </View>
        )
    }


    
}

export default SnapScreen