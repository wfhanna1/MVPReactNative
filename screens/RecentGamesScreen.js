import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { View, Button, Text } from 'native-base';

export default class RecentGames extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.background} source={require('../assets/icons/Pattern-Fill.png')}>
          <View style={styles.child}>
            <Text style={styles.title}>
              Recent Games
            </Text>
            <View>
              <Button 
                onPress={() => this.props.navigation.navigate('Players')}
              ><Text>Players</Text></Button>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  background: {
    width: '100%',
    height: '100%',
  },
  child: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center' 
  },
  title: {
    fontSize: 45,
    fontFamily: "KlinicSlab-Book",
    color: "#B73491",
    fontWeight: "500",
    lineHeight: 54,
    letterSpacing: -1.46
  }
});
