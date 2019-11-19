import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, View } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { withNavigation } from 'react-navigation';

class RecordMatchButton extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View style={styles.boxShadow}>
      <LinearGradient start={{x: 0, y: 0}} end={{x:1, y:0}} locations={[0,0.7]} colors={['#983794', '#4B285F']} style={styles.linearGradient}>
        <Button rounded style={styles.button} onPress={this.props.onPress} >
          <Text style={styles.text}>Record Match</Text>
        </Button>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  boxShadow: {
    alignItems: 'center',
    shadowColor: '#rgba(0,0,0,0.3)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5
  },
  linearGradient: {
    borderRadius: 50,
    width: 195,
  },
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
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: 54,
    
  }
});

export default (withNavigation(RecordMatchButton));