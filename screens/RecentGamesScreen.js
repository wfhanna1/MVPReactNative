import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class RecentGames extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Games Screen
        </Text>
        <View style={styles.container}>
          <Button
            title="Players Screen"
            onPress={() => this.props.navigation.navigate('Players')}
          />
        </View>
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