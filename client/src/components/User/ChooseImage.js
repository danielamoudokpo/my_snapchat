import React ,{ Component, Fragment } from "react";
import { AsyncStorage ,view , StyleSheet, Text,  TextInput, Button, View, Alert, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import ContactsScreen from '../User/ContactsScreen'
 
class ChooseImage extends Component {
    state = {
      image: null,
    };
  
    render() {
      let { image } = this.state;
  
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Pick an image from camera roll" onPress={this._pickImage} />
          {image && ( <Fragment >
            <Image 
              style={{ width: 200, height: 200 }}
              source={{ uri: image }}/>
            <Button
              title = 'Choose a Receiver'
              onPress={()=> this.receiver()}
            />
          </Fragment>
            )}
        </View>
      );
    }
  
    componentDidMount() {
      this.getPermissionAsync();
    }
  
    getPermissionAsync = async () => {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    };
  
    receiver = async ()=>{
      console.log("yes");
      // this.props.navigation.push('Contacts')
    }
    _pickImage = async () => {
      try {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
          console.log(result.uri);
          
          this.setState({ image: result.uri });
        }
  
        console.log(result);

      } catch (E) {
        console.log(E);
      }
    };
  }


export default ChooseImage ;


