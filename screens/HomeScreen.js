import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native'
import HeaderLg from '../components/HeaderLarge';
import HeadingTitle from '../components/TopPlayer';
import BgImage from '../components/backgroundImage';
import { withNavigation } from 'react-navigation';

class HomeScreen extends Component {
  render() {
    return (
        <ScrollView>
        <BgImage>
          <HeaderLg />
          <HeadingTitle style={styles.heading} title="Top Player" />
        </BgImage>
        </ScrollView>
      
    );
  }
};

const styles = StyleSheet.create({
  heading: {
    marginTop: -30,
    color: 'blue'
  }
});
export default (withNavigation(HomeScreen));