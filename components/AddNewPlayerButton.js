import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';

class AddNewPlayerButton extends Component {
  render() {
    return (
      <Button transparent>
        <Text style={styles.link}>Add new player{' '}
          <Icon type='FontAwesome' name='plus-circle' style={styles.icon} />
        </Text>
      </Button>
    );
  }
}

const styles = StyleSheet.create ({
  link: {
    color: '#4166AA',
    fontSize: 16
  },
  icon: {
    color: '#4166AA',
    fontSize: 15
  }
});

export default (withNavigation(AddNewPlayerButton));