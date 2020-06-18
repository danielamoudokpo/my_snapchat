import React ,{ Component } from "react";
import { FlatList,TouchableOpacity, StyleSheet, Text, Button, View, RefreshControl} from 'react-native';

import AuthService from '../Auth/AuthService';
 
class ProfileScreen extends Component {
 
    state = {
      Auth : new AuthService(),
      image: null,
      snaps: null,
    };
    async componentDidMount(){

      let token = await this.state.Auth.retrive();
      let im = await this.state.Auth.getSnaps(token);

      this.setState({ snaps:im})

      // console.log(this.state.snaps);
      
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

      this.props.navigation.navigate('Snap', {imag: imgUrl,time:duration});

      let lst = await this.state.Auth.seenSnaps(id,token);

      console.log(lst);
      

      let snaps = this.state.snaps

      let seenSnapId = id;

      var found = snaps.find(element => element.snap_id == seenSnapId);

      console.log(found);
      
      if (found) {
        console.log('del');
        const index = snaps.indexOf(found);
        if (index > -1) {
          snaps.splice(index, 1);
        }
      }else{
        console.log('led');
        
      }
      this.setState({snaps:snaps});

      // window.location.reload(false);
      // const onRefresh = React.useCallback(() => {
        // setRefreshing(true);

    // });

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