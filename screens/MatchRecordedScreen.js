import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class MatchRecordedScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Match Recorded!
        </Text>
        <Button
        title="Home Screen"
        onPress={() => this.props.navigation.navigate('Home')}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '40%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 40,
  }
});