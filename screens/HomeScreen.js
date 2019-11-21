import React, { Component } from 'react';
import { ScrollView } from 'react-native'
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
          <HeadingTitle title="Top Player" />
        </BgImage>
        </ScrollView>
    );
  }
};

export default (withNavigation(HomeScreen));