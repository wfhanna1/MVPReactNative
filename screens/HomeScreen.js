import React, { Component } from 'react';
import { Container } from 'native-base';
import HeaderLg from '../components/HeaderLarge';
import HeadingTitle from '../components/TopPlayer';
import BgImage from '../components/backgroundImage';

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <BgImage>
          <HeaderLg />
          <HeadingTitle title="Top Player" />
        </BgImage>
      </Container>
    );
  }
};