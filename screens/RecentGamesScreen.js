import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import HeaderLg from '../components/HeaderLarge';
import HeadingTitle from '../components/TopPlayer';
import BgImage from '../components/backgroundImage';

export default class RecentGames extends Component {
  render() {
    return (
      <ScrollView>
        <BgImage>
          <HeaderLg />
          <HeadingTitle title="Recent Games" />
        </BgImage>
      </ScrollView>
    );
  }
};