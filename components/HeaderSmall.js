import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground} from 'react-native';
import RecordMatchButton from '../components/RecordMatchButton';
import AddNewPlayerButton from '../components/AddNewPlayerButton';


const HeaderSm = ({ onPress, children, style, ...props }) => {
  return (
      <ImageBackground
        source={require('../assets/icons/Header-Background-Small.png')}
        style={{width: '100%', height: 170, ...style}}
        {...props}>
        <View style={styles.container}>
          <Text style={styles.title}>Record Match</Text>
        </View>
      </ImageBackground>
  );
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