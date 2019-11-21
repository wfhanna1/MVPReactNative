import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Text } from 'native-base';

const playerImage = require('../assets/icons/Profile-Image-Example.png');

export default function Player() {
  return (
    <View>
      <View style={styles.playerComponent}>
        <Text style={styles.number}>1</Text>
        <Image style={styles.picture} source={playerImage} />
        <View>
          <Text style={styles.game}>Foosball</Text>
          <Text style={styles.name}>Player Name</Text>
          <Text style={styles.points}>Points: 2,438</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: '7%',
    width: '100%',
    textAlign: 'center',
    fontSize: 45,
    fontFamily: 'KlinicSlab-Book',
    color: '#B73491',
    fontWeight: '500',
    lineHeight: 54,
    letterSpacing: -1.46,
  },
  playerComponent: {
    margin: '4%',
    width: '60%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  number: {
    fontFamily: 'KlinicSlab-Book',
    fontSize: 45,
    fontWeight: '500',
    color: '#B73491'
  },
  picture: {
    height: 75,
    resizeMode: 'contain',
    marginTop: -10

  },
  game: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6E645F',
    letterSpacing: -0.57,
  },
  name: {
    fontFamily: 'KlinicSlab-Book',
    fontSize: 26,
    fontWeight: '500',
    letterSpacing: -0.63,
    marginBottom: -7
  },
  points: {
    fontSize: 16,
    color: '#399D60',
    letterSpacing: -0.7
  }
});
