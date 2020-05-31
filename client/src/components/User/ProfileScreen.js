import React ,{ Component } from "react";
import { AsyncStorage ,view , StyleSheet, Text,  TextInput, Button, View, Alert } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
 
class ProfileScreen extends Component {
    state = {
      image: null,
    };
  
    render() {
  
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text> moi </Text>
        </View>
      );
    }
  
  }
  
  


export default ProfileScreen ;
