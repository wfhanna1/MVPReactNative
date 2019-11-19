import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'native-base';

export default class GrayHeading extends Component {
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
      textAlign: 'center',
      fontSize: 45,
      fontFamily: "KlinicSlab-Book",
      color: "#6E645F",
      fontWeight: "500",
      letterSpacing: -1.46,
  }
});