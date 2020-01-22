import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Icon from "react-native-vector-icons/FontAwesome";

import Colors from "../colors";
import PlayersScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import GamesScreen from "../screens/RecentGamesScreen";
import RecordMatchScreen from "../screens/RecordMatchScreen";
import AddNewPlayerScreen from "../screens/AddNewPlayerScreen";
import MatchRecordedScreen from "../screens/MatchRecordedScreen";
import LoadingScreen from "../screens/LoadingScreen";
import PlayerAddedScreen from "../screens/PlayerAddedScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ResponsiveSize from "./getScreenDimensions";

const Players = createStackNavigator({
	Players: {
		screen: PlayersScreen,
		navigationOptions: {
			header: null
		}
	},
	RecordMatch: {
		screen: RecordMatchScreen,
		navigationOptions: {
			header: null
		}
	},
	AddNewPlayer: {
		screen: AddNewPlayerScreen,
		navigationOptions: {
			header: null
		}
	},
	ProfileScreen: {
		screen: ProfileScreen,
		navigationOptions: {
			header: null
		}
	},
	MatchRecorded: {
		screen: MatchRecordedScreen,
		navigationOptions: {
			header: null
		}
	},
	Loading: {
		screen: LoadingScreen,
		navigationOptions: {
			header: null
		}
	},
	PlayerAdded: {
		screen: PlayerAddedScreen,
		navigationOptions: {
			header: null
		}
	}
});

const Search = createStackNavigator({
	Search: {
		screen: SearchScreen,
		navigationOptions: {
			header: null
		}
	},
	RecordMatch: {
		screen: RecordMatchScreen,
		navigationOptions: {
			header: null
		}
	},
	AddNewPlayer: {
		screen: AddNewPlayerScreen,
		navigationOptions: {
			header: null
		}
	},
	ProfileScreen: {
		screen: ProfileScreen,
		navigationOptions: {
			header: null
		}
	},
	MatchRecorded: {
		screen: MatchRecordedScreen,
		navigationOptions: {
			header: null
		}
	},
	Players: {
		screen: PlayersScreen,
		navigationOptions: {
			header: null
		}
	},
	Loading: {
		screen: LoadingScreen,
		navigationOptions: {
			header: null
		}
	},
	PlayerAdded: {
		screen: PlayerAddedScreen,
		navigationOptions: {
			header: null
		}
	}
});

const Games = createStackNavigator({
	Games: {
		screen: GamesScreen,
		navigationOptions: {
			header: null
		}
	},
	RecordMatch: {
		screen: RecordMatchScreen,
		navigationOptions: {
			header: null
		}
	},
	AddNewPlayer: {
		screen: AddNewPlayerScreen,
		navigationOptions: {
			header: null
		}
	},
	ProfileScreen: {
		screen: ProfileScreen,
		navigationOptions: {
			header: null
		}
	},
	MatchRecorded: {
		screen: MatchRecordedScreen,
		navigationOptions: {
			header: null
		}
	},
	Players: {
		screen: PlayersScreen,
		navigationOptions: {
			header: null
		}
	},
	Loading: {
		screen: LoadingScreen,
		navigationOptions: {
			header: null
		}
	},
	PlayerAdded: {
		screen: PlayerAddedScreen,
		navigationOptions: {
			header: null
		}
	}
});

const Tab = createBottomTabNavigator(
	{
		Players,
		Search,
		Games
	}, {
		tabBarOptions: {
			style: {
				backgroundColor: Colors.AlmostWhite,
				borderTopColor: Colors.Transparent,
				height: 55
			},
			labelStyle: {
				fontSize: 13,
				margin: -10
			},
			activeTintColor: Colors.Fuschia,
			inactiveTintColor: Colors.TabBarGray,
			showIcon: true
		},
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === "Players") {
					iconName = "trophy";
				} else if (routeName === "Search") {
					iconName = "search";
				} else if (routeName === "Games") {
					iconName = "gamepad";
				}
				return <Icon name={iconName} size={ResponsiveSize(12.5)} color={tintColor} />;
			}
		})
	}
);

export default createAppContainer(Tab);
