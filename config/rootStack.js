import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import MatchRecordedScreen from '../screens/MatchRecordedScreen';
import LoadingScreen from '../screens/LoadingScreen';
import RecentGamesScreen from '../screens/RecentGamesScreen';
import RecordMatchScreen from '../screens/RecordMatchScreen';



const RootStack = createStackNavigator(
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
  );

  export default RootStack;