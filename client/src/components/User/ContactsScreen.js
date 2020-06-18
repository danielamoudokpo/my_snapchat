import React ,{ Component}from 'react'
import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';
import AuthService from '../Auth/AuthService'
import { TouchableOpacity } from 'react-native-gesture-handler';

// import { TouchableHighlight } from 'react-native-gesture-handler';

class ContactsScreen extends Component{

    constructor (){
        super();
        this.Auth = new AuthService();
        this.state={
            contact : null,
        }
    }

    async componentDidMount(){

        let token = await this.Auth.retrive();
            // console.log(token);
        if (token != null) {
            let c = await this.Auth.contacts(token);
            // console.log(c);
            this.setState({contact:c})
            // console.log(this.state.contact);
    
        }

    }


    render(){
        return(

            <View>
                <Text style={{alignSelf : 'center'}}>MES CONTACTS</Text>
                 <ScrollView contentContainerStyle = {{justifyContent: 'center'}} >
                    <FlatList 
                    style= {styles.container}
                    data={this.state.contact}
                    renderItem={({ item }) => <TouchableOpacity style= {styles.text}>
                        <Text > {item.email} </Text>
                        </TouchableOpacity>}
                        
                    />
                    
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      paddingTop:10,
    },
    text:{
        borderWidth : 1,
        borderBottomColor : 'cyan',
        paddingBottom: 10,
        fontFamily: 'helvetica',
        // alignSelf: 'center',
    }
  });
  


export default ContactsScreen