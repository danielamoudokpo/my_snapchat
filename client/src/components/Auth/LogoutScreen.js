import React ,{ Component} from 'react';
import { AsyncStorage,StyleSheet, Text, View, Image, Button , OpaciteButton } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


 class  LogoutScreen extends Component{

    render(){
        return(

            <View>
                <Button
                    title ="logout"
                    onPress = {this.removeItem}
                    raised={true}
                />
            </View>

        );
    }

    removeItem = async ()=>{
        try {
            const value = await AsyncStorage.removeItem('token');
            if (value == null) {
                // We have data!!
                console.log("token removed");
                // console.log(value);
                this.props.navigation.push('Login')
              }
    
        } catch (error) {
            console.log('AsyncStorage save error: ' + error.message);
        }
    }

 }
 

export default LogoutScreen