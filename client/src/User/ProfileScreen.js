import React ,{ Component } from "react";
import {view , StyleSheet, Text,  TextInput, Button, View, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
 
class ProfileScreen extends Component {
    state = {
      image: null,
    };
  
    render() {
      let { image } = this.state;
  
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Pick an image from camera roll" onPress={this._pickImage} />
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
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
  
    _pickImage = async () => {
      try {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
  
        console.log(result);
      } catch (E) {
        console.log(E);
      }
    };
  }


// class ProfileScreen extends Component {

//     render(){

//         return (
//             <Button
//               onPress={() =>
//                 this.props.navigation.setParams({
//                   friends:
//                     route.params.friends[0] === 'Brent'
//                       ? ['Wojciech', 'Szymon', 'Jakub']
//                       : ['Brent', 'Satya', 'Michaś'],
//                   title:
//                     route.params.title === "Brent's Profile"
//                       ? "Lucy's Profile"
//                       : "Brent's Profile",
//                 })
//               }
//               title="Swap title and friends"
//             />
//           );
//     }

// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//       }
// })


export default ProfileScreen ;
