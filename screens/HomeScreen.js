import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Top Player
        </Text>
        <View style={styles.container}>
          <Button
            title="Games Screen"
            onPress={() => this.props.navigation.navigate('Games')}
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
      backgroundColor: 'white',
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

export default HomeScreen;