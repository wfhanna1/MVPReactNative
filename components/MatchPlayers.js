import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Text, Button } from 'native-base';

const playerImage = require('../assets/icons/Profile-Image-Example.png');

export default function MatchPlayers() {
  return (
    <View>
      <View style={styles.playerComponent}>
        <Image style={styles.picture} source={playerImage} />
        <View style={styles.stats}>
          <Text style={styles.name}>Player Name</Text>
          <Text style={styles.points}>Points: 2,438</Text>
          <Button transparent><Text style={styles.buttonText}>Remove</Text></Button>
        </View>
        <Button transparent><Text style={styles.outcome}>W</Text></Button>
        <Button transparent><Text style={styles.outcome}>L</Text></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  playerComponent: {
    marginTop: '2%',
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  picture: {
    flex: 1,
    height: 75,
    resizeMode: 'contain',
    marginTop: '-2%'
  },
  stats: {
    flex: 1,
    alignItems: 'flex-start',
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
    letterSpacing: -0.7,
    marginBottom: -5
  },
  buttonText: {
    letterSpacing: -0.52,
    fontWeight: '300',
    color: '#4166AA',
    fontSize: 16,
    marginLeft: -17,
    alignSelf: 'flex-start'
  },
  outcome: {
    color: '#6E645F',
    fontSize: 25,
    fontWeight: '300',
  }
});
