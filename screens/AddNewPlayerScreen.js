import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {
  Text, Item, Input, Form, Button
} from 'native-base';
import { withNavigation } from 'react-navigation';
import HeaderSm from '../components/HeaderSmall';
import BgImage from '../components/backgroundImage';
import RecordMatchButton from '../components/RecordMatchButton';

const profileImage = require('../assets/icons/Profile-Pic-Example.png');


function RecordMatchScreen({ navigation }) {
  return (
    <BgImage>
      <HeaderSm style={styles.title} headerTitle="Add New Player" />
      <View style={styles.parent}>
        <Form>
          <View style={styles.container}>
            <Text style={styles.text}>Full Name</Text>
            <Item style={styles.item}>
              <Input style={styles.input} placeholder="Max Power" />
            </Item>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>Email Address</Text>
            <Item style={styles.item}>
              <Input style={styles.input} placeholder="Max.Power@insight.com" />
            </Item>
          </View>
          <View style={styles.container2}>
            <Text style={styles.profText}>Profile Pic</Text>
            <Image style={styles.profile} source={profileImage} />
            <Button transparent><Text style={styles.profileButton}>Add/Update</Text></Button>
          </View>
          <View style={styles.container}>
            <RecordMatchButton title="Add Player" onPress={() => navigation.navigate('PlayerAdded')} />
            <Button
              style={styles.cancelButton}
              transparent
              onPress={() => navigation.navigate('RecordMatch')}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </Button>
          </View>
        </Form>
      </View>
    </BgImage>
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
  container2: {
    alignItems: 'center',
    marginLeft: '-50%',
    marginTop: '10%'
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
  profile: {
    height: 80,
    resizeMode: 'contain'
  },
  profText: {
    fontFamily: 'KlinicSlab-Book',
    fontSize: 26,
    color: '#222222',
    fontWeight: '500',
    letterSpacing: -0.63
  },
  profileButton: {
    color: '#4166AA'
  },
  text: {
    fontFamily: 'KlinicSlab-Book',
    fontSize: 26,
    fontWeight: '500',
    marginTop: 30,
    alignSelf: 'flex-start',
    marginLeft: '11%'
  },
  cancelButton: {
    alignSelf: 'center'
  },
  cancelText: {
    letterSpacing: -0.52,
    fontWeight: '300',
    color: '#4166AA',
    fontSize: 16,
    marginLeft: -17,
  },
});

export default (withNavigation(RecordMatchScreen));
