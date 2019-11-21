import React from 'react';
import { ScrollView } from 'react-native';
import HeaderLg from '../components/HeaderLarge';
import HeadingTitle from '../components/TopPlayer';
import BgImage from '../components/backgroundImage';

export default function RecentGames() {
  return (
    <ScrollView>
      <BgImage>
        <HeaderLg />
        <HeadingTitle title="Recent Games" />
      </BgImage>
    </ScrollView>
  );
}
