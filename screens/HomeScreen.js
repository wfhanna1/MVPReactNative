import React, { useState } from "react";
import { StyleSheet, ScrollView, View, RefreshControl, StatusBar, TouchableOpacity, Text } from "react-native";
import CodePush from "react-native-code-push";

import useQuery from "../hooks/useQuery";
import topPlayersQuery from "../queries/topPlayers";
import updateTopPlayers from "../queries/updateTopPlayers";

import LoadingScreen from "./LoadingScreen";
import HeaderLg from "../components/HeaderLarge";
import BgImage from "../components/backgroundImage";
import ColorHeading from "../components/ColorHeading";
import GrayHeading from "../components/GrayHeading";
import AddNewPlayerButton from "../components/AddNewPlayerButton";
import Player from "../components/Player";

function HomeScreen () {
	const [topPlayers, topPlayersLoading] = useQuery(topPlayersQuery());
	const [topPlayersData, setTopPlayersData] = useState(false);
	const [refreshing, setRefreshing] = useState(false);

	const onCheckForUpdate = () => {
		CodePush.sync({
			updateDialog: true,
			installMode: CodePush.InstallMode.IMMEDIATE
		});
	};

	const TopPlayer = () => {
		if (topPlayers.length || topPlayersData.length) {
			return (
				<Player
					key={(topPlayersData || topPlayers)[0].id}
					rank={1}
					name={(topPlayersData || topPlayers)[0].player[0].fullName}
					points={Math.floor((topPlayersData || topPlayers)[0].average)}
					profilePhoto={(topPlayersData || topPlayers)[0].profilePhoto}
				/>
			);
		}
		return null;
	};

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);

		updateTopPlayers().then((data) => {
			setTopPlayersData(data);
			setRefreshing(false);
		});
	}, [refreshing]);

	if ((!topPlayers || topPlayersLoading)) {
		return (
			<LoadingScreen />
		);
	}

	return (
		<View>
		 <StatusBar barStyle="light-content" translucent />
			<HeaderLg />
			<ScrollView
				style={styles.scrollView}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				<BgImage>
					<View style={styles.buttonContainer}>
						<AddNewPlayerButton />
					</View>
					<ColorHeading title="Top Player" />
					<TopPlayer />
					<GrayHeading title="Ranked Players" />
					{(topPlayersData || topPlayers).slice(1).map((item, index) => (
						<Player
							key={item.id}
							rank={index + 2}
							name={item.player[0].fullName}
							points={Math.floor(item.average)}
							profilePhoto={item.player[0].profilePhoto}
						/>
					))}
				</BgImage>
				<TouchableOpacity onPress={onCheckForUpdate}>
					<Text>Check for updates</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		height: 18,
		marginTop: -15,
		alignItems: "center"
	},
	scrollView: {
		marginBottom: 275
	}
});

export default (HomeScreen);
