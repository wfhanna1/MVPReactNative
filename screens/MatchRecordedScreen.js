import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import HeaderSm from '../components/HeaderSmall';
import BgImage from '../components/backgroundImage';

function RecordMatchScreen() {
  return (
    <ScrollView>
      <BgImage>
        <HeaderSm style={styles.title} headerTitle="Match Recorded!" />
      </BgImage>
    </ScrollView>
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
