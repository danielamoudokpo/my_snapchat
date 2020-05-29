import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen  from './src/components/Auth/RegisterScreen';
import LoginScreen  from './src/components/Auth/LoginScreen'


 function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      {/* <Text> hello worldffseeebgdrssrgs!</Text> */}
      <Image 
        source={require('./assets/snap2.png')}
        style={{width:400, height: 400}}
      />

      <View style={styles.flexComponents}>
        <View style={{flex: 1}}>
            <Button 
            onPress={() => 
                navigation.push('Register')
            }
            title='Register'
             raised={true} />
        </View>
      </View>

      <View style={styles.flexComponents}>
          <View style={{flex: 1}}>
              <Button 
                color= 'red' title='Login' raised={true}
                onPress={()=> 
                    navigation.push('Login')
                }
  />
          </View>
        </View>

    </View>

  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexComponents :{
    flex: 2,
    backgroundColor: '#00ffff00',
    flexDirection: 'row',
    paddingBottom: 20,
    
  }
});


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
