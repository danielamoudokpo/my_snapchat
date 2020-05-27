import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> hello world!</Text>
      <Image source={require('./assets/snap2.png')}/>
      <View style={{
        borderWidth :10,
        paddingTop: 10,
      }}>
        <Text> Inscription </Text>
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
});
