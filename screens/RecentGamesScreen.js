import React from 'react';
import {
  ScrollView, View, StyleSheet, Text
} from 'react-native';

import HeaderLg from '../components/HeaderLarge';
import ColorHeading from '../components/ColorHeading';
import BgImage from '../components/backgroundImage';
import PlayerRecentGames from '../components/PlayerRecentGames';

export default function RecentGames() {
  return (
    <BgImage>
      <ScrollView>
        <HeaderLg />
        <ColorHeading title="Recent Games" />
        <View style={styles.wrapper}>
          <Text style={styles.game}>Foosball</Text>
          <Text style={styles.date}>Fri, Oct 04 2019</Text>
        </View>
        <View style={styles.container}>
          <PlayerRecentGames />
          <PlayerRecentGames />
          <Text style={styles.versus}>-------vs-------</Text>
          <PlayerRecentGames />
          <PlayerRecentGames />
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.game}>Mario Kart</Text>
          <Text style={styles.date}>Fri, Oct 04 2019</Text>
        </View>
        <View style={styles.container}>
          <PlayerRecentGames />
          <Text style={styles.versus}>vs</Text>
          <PlayerRecentGames />
        </View>
      </ScrollView>
    </BgImage>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginTop: 8
  },
  game: {
    fontFamily: 'KlinicSlab-Medium',
    fontSize: 35,
    color: '#222222',
    letterSpacing: -1.14
  },
  date: {
    color: '#6E645F',
    fontSize: 16,
    letterSpacing: -0.57,
    fontWeight: 'bold',
    marginTop: -10,
    marginBottom: 8
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  versus: {
    fontFamily: 'KlinicSlab-Medium',
    fontSize: 45,
    color: '#B73491'
  }
});
