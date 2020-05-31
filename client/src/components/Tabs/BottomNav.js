import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, Button , OpaciteButton } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RegisterScreen  from '../Auth/RegisterScreen';
import LoginScreen  from '../Auth/LoginScreen';
import ProfileScreen from '../User/ProfileScreen';
import ChooseImage from '../User/ChooseImage';
import HomeScreen from '../User/HomeScreen';
import LogoutScreen from '../Auth/LogoutScreen'
import ContactsScreen from '../User/ContactsScreen'


const Tab = createMaterialBottomTabNavigator();


 function bottomNav() {
  return (
    // <NavigationContainer independent={true}>
    <Tab.Navigator
    initialRouteName="Profile"
    activeColor="#e91e63"
    style={{ backgroundColor: 'tomato' }}>

    <Tab.Screen name="Profile" 
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
      }}
        />

    {/* <Tab.Screen name="Home" 
        component={HomeScreen}
        options={{
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
        }}
    /> */}

    <Tab.Screen name="Contacts" 
        component={ContactsScreen}
        options={{
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="contacts" color={color} size={26} />
            ),
        }}
    /> 

    <Tab.Screen name="Image" 
      component={ChooseImage}
      options={{
        tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="image" color={color} size={26} />
          ),
      }}
        /> 

    <Tab.Screen 
        name="Logout" 
        component={LogoutScreen}
        options={{
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="logout" color={color} size={26} />
            ),
        }}
        /> 

        </Tab.Navigator>
    //  </NavigationContainer>

    );
}

export default bottomNav