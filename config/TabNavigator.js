import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import PlayersScreen from '../screens/HomeScreen';
import Games from '../screens/RecentGamesScreen';
import RecordMatchScreen from '../screens/RecordMatchScreen';
import AddNewPlayerScreen from '../screens/AddNewPlayerScreen';
import MatchRecordedScreen from '../screens/MatchRecordedScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation-stack';

const Players = createStackNavigator({
  Players: {
    screen: PlayersScreen,
    navigationOptions: {
      header: null,
    },
  },
  RecordMatch: {
    screen: RecordMatchScreen,
    navigationOptions: {
      header: null,
    },
  },
  AddNewPlayer: {
    screen: AddNewPlayerScreen,
    navigationOptions: {
      header: null,
    },
  },
  MatchRecorded: {
    screen: MatchRecordedScreen
  }
});

const Tab = createBottomTabNavigator(
  {
    Players,
    Games
  }, {
    tabBarOptions: {
      style: {
        backgroundColor: "#F0F0F0",
        borderTopColor: "transparent",
        height: 55
      },
      labelStyle: {
        fontSize: 13,
        margin: -10
      },
      activeTintColor: '#B73491',
      inactiveTintColor: '#9B9B9B',
      showIcon: true,
    },
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Players') {
            iconName = `trophy`;
          } else if (routeName === 'Games') {
            iconName = `gamepad`;
          }

          return <Icon name={iconName} size={30} color={tintColor} />;
        },
      }),
  }
)

export default createAppContainer(Tab);