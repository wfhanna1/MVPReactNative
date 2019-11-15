import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Button, Text } from 'native-base';
//import BgImage from '../components/backgroundImage';
//import { Button, Text } from '../assets/icons/Pattern-Fill';



class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('../assets/icons/Pattern-Fill.png')}>

      <View style={styles.child}>

      <Text style={styles.title}>
        Top Player
      </Text>
      <View style={styles.title}>
        <Button
          onPress={() => this.props.navigation.navigate('Games')}
        ><Text>Games</Text></Button>
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
    title: {
      fontSize: 45,
      fontFamily: "KlinicSlab-Book",
      color: "#B73491",
      fontWeight: "500",
      lineHeight: 54,
      letterSpacing: -1.46
    },
    image: {
      width: '100%',
      height: '100%',
    },
    child: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center' 
    }
});

export default HomeScreen;