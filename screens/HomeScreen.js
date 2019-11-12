import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          The Office MVP
        </Text>
        <View style={styles.container}>
        <Button
        title="Match Recorded Page"
        onPress={() => this.props.navigation.navigate('MatchRecorded')}
      />
      <Button
        title="Loading Page"
        onPress={() => this.props.navigation.navigate('Loading')}
      />
      <Button
        title="Recent Games Screen"
        onPress={() => this.props.navigation.navigate('RecentGames')}
      />
      <Button
        title="Record Match Screen"
        onPress={() => this.props.navigation.navigate('RecordMatch')}
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