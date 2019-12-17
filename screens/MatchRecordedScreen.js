import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { withNavigation, NavigationContext } from 'react-navigation';
import ColorHeading from '../components/ColorHeading';
import GrayHeading from '../components/GrayHeading';
import PlayerMatchRecorded from '../components/PlayerMatchRecorded';

import HeaderSm from '../components/HeaderSmall';
import BgImage from '../components/backgroundImage';

function RecordMatchScreen({ navigation }) {
  const navigationContext = navigation.state.params || {};

  console.log('match recorded navigation', navigationContext.recordMatch);


  return (
    <BgImage>
      <ScrollView>
        <HeaderSm style={styles.title} headerTitle="Match Recorded!" />
        <ColorHeading title="Foosball Winners" />
        <PlayerMatchRecorded name="Player Name" totalPoints="2,439" gamePoints="+200" />
        <PlayerMatchRecorded name="Player Name" totalPoints="2,439" gamePoints="+200" />
        <PlayerMatchRecorded name="Player Name" totalPoints="2,439" gamePoints="+200" />
        <GrayHeading title="Foosball Losers" />

        <PlayerMatchRecorded name="Player Name" totalPoints="2,439" gamePoints="-200" />
        <PlayerMatchRecorded name="Player Name" totalPoints="2,439" gamePoints="-200" />
        <PlayerMatchRecorded name="Player Name" totalPoints="2,439" gamePoints="-200" />
      </ScrollView>
    </BgImage>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  input: {
    borderBottomColor: 'red',
    width: '80%'
  },
  text: {
    marginTop: 30
  }
});

export default (withNavigation(RecordMatchScreen));
