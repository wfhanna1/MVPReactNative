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
          <Text>Choose a game</Text>
          <View style={styles.container}>
          <Item style={styles.input}>
            <Input placeholder='Foosball' />
          </Item>
          </View>
          <Text style={styles.text}>Who played?</Text>
          <View style={styles.container}>
          <Item style={styles.input}>
            <Input placeholder='Search by name or email' />
            <Icon active type='FontAwesome' name='plus-circle' onPress={() => alert(':)')} />
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
