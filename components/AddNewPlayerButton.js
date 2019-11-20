import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, Icon, View } from 'native-base';
import { withNavigation } from 'react-navigation';

class AddNewPlayerButton extends Component {
  render() {
    return (
      <Button style={styles.button} transparent onPress={() => this.props.navigation.navigate('AddNewPlayer')}>
        <Text style={styles.text}>Add new player&nbsp;
          <Icon type='FontAwesome' name='plus-circle' style={styles.icon} />
        </Text>
      </Button>
    );
  }
}

const styles = StyleSheet.create ({
  button: {
    alignSelf: 'center'
  },
  text: {
    color: '#4166AA',
    fontSize: 16
  },
  icon: {
    color: '#4166AA',
    fontSize: 15
  }
});

export default (withNavigation(AddNewPlayerButton));