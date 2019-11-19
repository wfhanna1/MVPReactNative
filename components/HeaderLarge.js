import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground} from 'react-native';
import RecordMatchButton from '../components/RecordMatchButton';
import AddNewPlayerButton from '../components/AddNewPlayerButton';


const HeaderLg = ({ onPress, children, style, ...props }) => {
  return (
      <ImageBackground
        source={require('../assets/icons/Header-Background-Large2x.png')}
        style={{width: '100%', height: 225, ...style}}
        {...props}>
        <View style={styles.container}>
          <Text style={styles.title}>Office MVP</Text>
          <RecordMatchButton />
          <AddNewPlayerButton />
        </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'KlinicSlab-Book',
    fontWeight: '400',
    letterSpacing: -2.4,
    fontSize: 75,
    color: '#FFFFFF',
    marginTop: '-20%'
   
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30%'
  }
});

export default HeaderLg;