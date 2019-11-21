import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  Text, Item, Input, Icon, Form, Button
} from 'native-base';
import { withNavigation } from 'react-navigation';
import HeaderSm from '../components/HeaderSmall';
import GrayHeading from '../components/GrayHeading';
import BgImage from '../components/backgroundImage';
import AddNewPlayerButton from '../components/AddNewPlayerButton';
import RecordMatchButton from '../components/RecordMatchButton';
import MatchPlayers from '../components/MatchPlayers';

function RecordMatchScreen({ navigation }) {
  const [toggleMatchedPlayers, setToggleMatchedPlayers] = useState(false);

  return (
    <ScrollView>
      <BgImage>
        <HeaderSm style={styles.title} headerTitle="Record Match" />
        <View style={styles.parent}>
          <Form>
            <View style={styles.container}>
              <Text style={styles.text}>Choose a game</Text>
              <Item style={styles.item}>
                <Input style={styles.input} placeholder="Foosball" />
              </Item>
            </View>
            <View style={styles.container}>
              <Text style={styles.text}>Who played?</Text>
              <Item style={styles.item}>
                <Input style={styles.input} placeholder="Search by name or email" />
                <Icon active style={styles.icon} type="FontAwesome" name="plus-circle" onPress={() => setToggleMatchedPlayers(!toggleMatchedPlayers)} />
              </Item>
            </View>
          </Form>
        </View>
        <View style={styles.button}>
          <AddNewPlayerButton />
        </View>
        <View>
          {toggleMatchedPlayers ? (
            <View>
              <GrayHeading title="Match Players" />
              <MatchPlayers />
              <MatchPlayers />
              <MatchPlayers />
              <MatchPlayers />
              <MatchPlayers />
              <MatchPlayers />
              <MatchPlayers />
              <RecordMatchButton onPress={() => navigation.navigate('MatchRecorded')} />
              <Button
                style={styles.cancelButton}
                transparent
                onPress={() => setToggleMatchedPlayers(!toggleMatchedPlayers)}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </Button>
            </View>
          )
            : null}
        </View>
      </BgImage>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  parent: {
    marginTop: '-10%'
  },
  container: {
    alignItems: 'center',
    marginTop: '3%'
  },
  item: {
    borderBottomColor: '#B73491',
    borderBottomWidth: 2,
    width: '80%'
  },
  input: {
    fontWeight: '300',
    marginBottom: -10,
    marginLeft: '-1%',
    marginTop: '-4%'
  },
  text: {
    fontFamily: 'KlinicSlab-Book',
    fontSize: 26,
    fontWeight: '500',
    marginTop: 30,
    alignSelf: 'flex-start',
    marginLeft: '11%'
  },
  icon: {
    color: '#4166AA',
    fontSize: 15,
  },
  button: {
    marginTop: '1%',
    marginBottom: '6%',
    marginLeft: '8%',
    alignSelf: 'center'
  },
  cancelButton: {
    alignSelf: 'center'
  },
  cancelText: {
    letterSpacing: -0.52,
    fontWeight: '300',
    color: '#4166AA',
    fontSize: 16,
    marginLeft: -17
  },
});

export default (withNavigation(RecordMatchScreen));
