import React from 'react';
import { ScrollView } from 'react-native';
import HeaderLg from '../components/HeaderLarge';
import ColorHeading from '../components/ColorHeading';
import BgImage from '../components/backgroundImage';

export default function RecentGames() {
  return (
    <ScrollView>
      <BgImage>
        <HeaderLg />
        <ColorHeading title="Recent Games" />
      </BgImage>
    </ScrollView>
  );
}
