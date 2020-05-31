import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RegisterScreen  from './src/components/Auth/RegisterScreen';
import LoginScreen  from './src/components/Auth/LoginScreen'
import ProfileScreen from './src/components/User/ProfileScreen';
import BottomNav from './src/components/Tabs/BottomNav';
import HomeScreen from './src/components/User/HomeScreen';
import bottomNav from './src/components/Tabs/BottomNav';
 


const Stack = createStackNavigator();

function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // headerLeft: null,
        }}
      />
       <Stack.Screen
        name="Register"
        component={RegisterScreen}
         options={{
          headerLeft: null,
        }}
      />
        <Stack.Screen
        name="Login"
        component={LoginScreen} options={{
         
          headerLeft: null,
         
        }}
      
      />
        <Stack.Screen
        name="Profile"
        component={bottomNav}
        options={{
          headerLeft: null,
          title: 'Profile',
          headerStyle: {
            backgroundColor: 'yellow',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // headerRight: () => (
          //   <Button
          //     title="Logout"
          //     onPress={() => alert('LogOut')}
          //     backgroundColor="yellow"
          //   />
          // ),
        }}
      />

      {/* <Stack.Screen
        name = 'Nav'
        component ={BottomNav}
      /> */}
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
