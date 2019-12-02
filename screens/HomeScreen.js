import React from 'react';
import { ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import HeaderLg from '../components/HeaderLarge';
import ColorHeading from '../components/ColorHeading';
import GrayHeading from '../components/GrayHeading';
import Player from '../components/Player';
import BgImage from '../components/backgroundImage';

function HomeScreen() {
  return (
    <ScrollView>
      <BgImage>
        <HeaderLg />
        <ColorHeading title="Top Player" />
        <Player />
        <GrayHeading title="Ranked Players" />
        <Player />
        <Player />
        <Player />
        <Player />
      </BgImage>
    </ScrollView>
  );
}

export default (withNavigation(HomeScreen));
