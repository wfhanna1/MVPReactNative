import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, View } from 'native-base';

export default class RecordMatchButton extends Component {
  render() {
    return (
      <View>
        <Button rounded style={styles.button}>
          <Text style={styles.text}>Record Match</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  text: {
    fontSize: 25,
    fontFamily: 'KlinicSlab-Book',
    fontWeight: '500',
    letterSpacing: -0.8,
    marginTop: 8,
    width: '100%',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#4B285F',
    width: 195,
    height: 54,
  }
});