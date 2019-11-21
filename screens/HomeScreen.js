import React from 'react';
import { ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import HeaderLg from '../components/HeaderLarge';
import HeadingTitle from '../components/TopPlayer';
import BgImage from '../components/backgroundImage';

function HomeScreen() {
  return (
    <ScrollView>
      <BgImage>
        <HeaderLg />
        <HeadingTitle title="Top Player" />
      </BgImage>
    </ScrollView>
  );
}

export default (withNavigation(HomeScreen));
