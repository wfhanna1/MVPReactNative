import React from 'react';
import {
  View, StyleSheet, Text, ImageBackground
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ButtonPrimary from './ButtonPrimary';
import AddNewPlayerButton from './AddNewPlayerButton';

const headerImageLg = require('../assets/icons/Header-Background-Large2x.png');

function HeaderLg({ navigation }) {
  return (
    <ImageBackground
      source={headerImageLg}
      style={{ width: '100%', height: 225 }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Office MVP</Text>
        <ButtonPrimary title="Record Match" onPress={() => navigation.navigate('RecordMatch')} />
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

export default (withNavigation(HeaderLg));
