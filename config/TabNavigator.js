//import React from 'react';
//import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
//import { createStackNavigator } from 'react-navigation-stack';
//import MatchRecordedScreen from '../screens/MatchRecordedScreen';
//import LoadingScreen from '../screens/LoadingScreen';
//import RecordMatchScreen from '../screens/RecordMatchScreen';
import HomeScreen from '../screens/HomeScreen';
import RecentGamesScreen from '../screens/RecentGamesScreen';


const TabNavigator = createBottomTabNavigator({
    Players: { screen: HomeScreen },
    Games: { screen: RecentGamesScreen },
  },
  {
    initialRouteName: 'Players',
      activeColor: '#f0edf6',
      inactiveColor: '#3e2465',
      barStyle: { backgroundColor: '#694fad' },
  }
);

//TODO - remove if React Navigation Stack Navigator isn't needed
/*const RootStack = createStackNavigator(
    {
      Home: HomeScreen,
      MatchRecorded: MatchRecordedScreen,
      Loading: LoadingScreen,
      RecentGames: RecentGamesScreen,
      RecordMatch: RecordMatchScreen
    },
    {
      initialRouteName: 'Home',
    }
  );*/
  //export default RootStack;
  
  export default createAppContainer(TabNavigator);

  //TODO - remove this if createBottomTabNavigator is used instead
  /*const TabNavigator = createMaterialBottomTabNavigator(
    {
      Players: { screen: HomeScreen },
      Games: { screen: RecentGamesScreen }
    },
    {
      initialRouteName: 'Players',
      activeColor: '#f0edf6',
      inactiveColor: '#3e2465',
      barStyle: { backgroundColor: '#694fad' },
    }
  );
  
  export default createAppContainer(TabNavigator);*/