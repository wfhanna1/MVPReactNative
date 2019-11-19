import React, { Component } from 'react';
import { Container } from 'native-base';
import HeaderLg from '../components/HeaderLarge';
import HeadingTitle from '../components/TopPlayer';
import BgImage from '../components/backgroundImage';
import RecordMatchButton from '../components/RecordMatchButton';
import AddNewPlayerButton from '../components/AddNewPlayerButton';
import { withNavigation } from 'react-navigation';

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <BgImage>
          <HeaderLg />
          <AddNewPlayerButton />
          <HeadingTitle title="Top Player" />
        </BgImage>
      </Container>
    );
  }
};

export default (withNavigation(HomeScreen));