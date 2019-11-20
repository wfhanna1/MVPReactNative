import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'native-base';

export default class HeadingTitle extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Text style={styles.title}>
      {this.props.title}
      </Text>
    );
  }
}

const styles = StyleSheet.create ({
  title: {
      marginTop: '7%',
      width: '100%',
      textAlign: 'center',
      fontSize: 45,
      fontFamily: "KlinicSlab-Book",
      color: "#B73491",
      fontWeight: "500",
      lineHeight: 54,
      letterSpacing: -1.46,
  }
});