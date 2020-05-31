import React ,{ Component } from "react";
import { ScrollView,FlatList,TouchableOpacity,AsyncStorage ,view , StyleSheet, Text,  TextInput, Button, View, Alert } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import AuthService from '../Auth/AuthService'
import SnapScreen from '../User/SnapScreen'

 
class ProfileScreen extends Component {
    state = {
      Auth : new AuthService(),
      image: null,
      snaps: null,
    };

    async componentDidMount(){

      let token = await this.state.Auth.retrive();
      let im = await this.state.Auth.getSnaps(token);
      console.log(im);
      
      // var senders = []
      // im.map((e)=>{
      //   // console.log(e)
      //   senders.push(e.from)

      // });

      // console.log(senders);

      this.setState({ snaps:im})
      
      
    }
  
    render() {
  
      return (
        <View style= {styles.container}>
          <Text style={{alignSelf: 'center'}}> MY SNAPS</Text>
          <View contentContainerStyle = {{justifyContent: 'center'}} >
                    <FlatList 
                    // style= {styles.container}
                    data={this.state.snaps}
                    renderItem={({ item }) => <TouchableOpacity style= {styles.text}>
                      
                        <Text onPress={()=>this.info(item.snap_id,item.duration,item.from)}> {item.from}  </Text>

                        </TouchableOpacity>}
                    />
              </View>

        </View>
      );
    }


    info = async(id,duration,from) =>{

      let token = await this.state.Auth.retrive();

      console.log(id,duration,from,token);

      let imgUrl = await this.state.Auth.getSnapId(id,duration,from,token);

      console.log(imgUrl);

      this.props.navigation.navigate('SnapScreen', {image: imgUrl});

    
    }
  
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      paddingTop:10,
      // alignItems: 'center',
      // justifyContent: 'center' 
    },
    text:{
        borderWidth : 1,
        borderBottomColor : 'cyan',
        paddingBottom: 10,
        fontFamily: 'helvetica',
        // alignSelf: 'center',
    }
  });

export default ProfileScreen ;
