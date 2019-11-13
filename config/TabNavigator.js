import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import RecentGamesScreen from '../screens/RecentGamesScreen';

const TabNavigator = createBottomTabNavigator({
    Players: { screen: HomeScreen },
    Games: { screen: RecentGamesScreen },
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 13,
        fontFamily: "Times New Roman"
      }
    }
  }
);

export default createAppContainer(TabNavigator);