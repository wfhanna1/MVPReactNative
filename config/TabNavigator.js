import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import RecentGamesScreen from '../screens/RecentGamesScreen';
//import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

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