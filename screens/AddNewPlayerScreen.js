import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'
import { Container, Text, Header, Content, Item, Input, Icon } from 'native-base';
import HeaderSm from '../components/HeaderSmall';
import GrayHeading from '../components/GrayHeading';
import BgImage from '../components/backgroundImage';
import AddNewPlayerButton from '../components/AddNewPlayerButton';

export default class RecordMatchScreen extends Component {
  render() {
    return (
      <Container>
        <BgImage>
          <HeaderSm style={styles.title}/>
          <Text>Full Name</Text>
          <View style={styles.container}>
          <Item style={styles.input}>
            <Input placeholder='Max Power' />
          </Item>
          </View>
          <Text style={styles.text}>Email Address</Text>
          <View style={styles.container}>
          <Item style={styles.input}>
            <Input placeholder='Max.Power@insight.com' />
            <Icon active onPress={() => alert(':)')} />
          </Item>
          </View>
          <AddNewPlayerButton />
          <GrayHeading title={'Match Players'}/>
        </BgImage>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  input: {
    borderBottomColor: 'red',
    width: '80%'

  },
  text: {
    marginTop: 30
  }
});
