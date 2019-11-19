import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'
import { Container, Text, Header, Content, Item, Input, Icon } from 'native-base';
import HeaderSm from '../components/HeaderSmall';
import GrayHeading from '../components/GrayHeading';
import BgImage from '../components/backgroundImage';
import AddNewPlayerButton from '../components/AddNewPlayerButton';
import RecordMatchButton from '../components/RecordMatchButton';
import { withNavigation } from 'react-navigation';

class RecordMatchScreen extends Component {
  render() {
    return (
      <Container>
        <BgImage>
          <HeaderSm style={styles.title} headerTitle='Record Match'/>
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
          <RecordMatchButton onPress={() => this.props.navigation.navigate('MatchRecorded')}/>
        </BgImage>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  input: {
    borderBottomColor: 'red',
    width: '80%'
  },
  text: {
    marginTop: 30
  }
});

export default (withNavigation(RecordMatchScreen));