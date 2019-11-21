import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground} from 'react-native';

class HeaderSm extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/icons/Header-Background-Small.png')}
        style={{width: '100%', height: 170}}>
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.headerTitle}</Text>
        </View>
      </ImageBackground>
    )
  };
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'KlinicSlab-Book',
    fontWeight: '400',
    letterSpacing: -2.4,
    fontSize: 45,
    color: '#FFFFFF',
    marginTop: '-35%'
   
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30%'
  }
});

export default HeaderSm;