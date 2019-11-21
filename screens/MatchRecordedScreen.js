import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native'
import HeaderSm from '../components/HeaderSmall';
import BgImage from '../components/backgroundImage';
import { withNavigation } from 'react-navigation';

class RecordMatchScreen extends Component {
  render() {
    return (
      <ScrollView>
        <BgImage>
          <HeaderSm style={styles.title} headerTitle='Match Recorded!'/>
        </BgImage>
        </ScrollView>
    );
  }
};

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