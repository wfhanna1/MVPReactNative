import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Container, Text, Button } from 'native-base';
import HeaderSm from '../components/HeaderSmall';
import BgImage from '../components/backgroundImage';
import { withNavigation } from 'react-navigation';

class RecordMatchScreen extends Component {
  render() {
    return (
      <Container>
        <BgImage>
          <HeaderSm style={styles.title} headerTitle='Match Recorded!'/>
        </BgImage>
      </Container>
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