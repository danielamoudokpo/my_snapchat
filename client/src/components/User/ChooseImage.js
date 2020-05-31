import React ,{ Component, Fragment } from "react";
import {Dimensions,Modal, Switch,AsyncStorage ,view , StyleSheet, Text,  TextInput, Button, View, Alert, Image, RecyclerViewBackedScrollView } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import ContactsScreen from '../User/ContactsScreen';
import ModalSelector from 'react-native-modal-selector';
import ModalDropdown from 'react-native-modal-dropdown';
import AuthService from '../Auth/AuthService'
import { TouchableOpacity } from 'react-native-gesture-handler';

class ChooseImage extends Component {

        state = {
          Auth : new AuthService(),
          contacts : null,
          image: null,
          uri:null,
          dest:null,
          duration: null,
          isModalVisible:false,

        };
    

    async UNSAFE_componentWillMount(){
      console.log('ici');
      // this.receiver();
      let token = await this.state.Auth.retrive();

      var data = await this.state.Auth.contacts(token);

      var moi = []
      data.map(item => {
          moi.push(item.email)
     });
      this.setState({contacts:moi});
      
    }
    
    render() {
      let { image } = this.state;
  
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Pick an image from camera roll" onPress={this._pickImage} />
          {image && ( <Fragment >
            <Image 
              style={{ width: 200, height: 200 }}
              source={{ uri: image }}/>
            
          <ModalDropdown
            defaultValue	= 'Choose a Receiver'
            style = {Styles.enterSearch}
            onPress={()=> this.receiver()}
            options={ this.state.contacts}
            onSelect={(value) => this.setState({ dest:this.state.contacts[value]})}
            />

            <Button
              title = 'SEND'
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

      let token = await this.state.Auth.retrive();
      let image = this.state.image;
      let to = this.state.dest;
      let duration = 5;
      
      var te = this.state.Auth.sendSnap(token,duration,to,image);
      
      console.log(te);
      
      // console.log(this.state.contacts);

      // this.setState({ isModalVisible : true});

      // console.log();
      
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
        // console.log(image);
        

      } catch (E) {
        console.log(E);
      }
    };
  }

 const Styles = StyleSheet.create({
    enterSearch :{
      borderWidth: 2, 
    }
  })

export default ChooseImage ;


