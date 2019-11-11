import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function App() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          The Office MVP
        </Text>
        <Text>Recent Games</Text>
      </View>
    );
}

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: '40%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 40,
  }
});