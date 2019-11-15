import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Players from '../screens/HomeScreen';
import Games from '../screens/RecentGamesScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

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
          let IconComponent = Icon;
          let iconName;
          if (routeName === 'Players') {
            iconName = `trophy`;
          } else if (routeName === 'Games') {
            iconName = `gamepad`;
          }

          return <IconComponent name={iconName} size={30} color={tintColor} />;
        },
      }),
  }
)

export default createAppContainer(Tab);