import React, { useState } from "react";
import { StyleSheet, ScrollView, View, RefreshControl, StatusBar } from "react-native";
import CodePush from "react-native-code-push";

import useQuery from "../hooks/useQuery";
import topPlayersQuery from "../queries/topPlayers";
import updateTopPlayers from "../queries/updateTopPlayers";

import LoadingScreen from "./LoadingScreen";
import HeaderLg from "../components/HeaderLarge";
import BgImage from "../components/backgroundImage";
import ColorHeading from "../components/ColorHeading";
import GrayHeading from "../components/GrayHeading";
import Player from "../components/Player";

function HomeScreen () {
	const [topPlayers, topPlayersLoading] = useQuery(topPlayersQuery());
	const [topPlayersData, setTopPlayersData] = useState(false);
	const [refreshing, setRefreshing] = useState(false);

	const updatePlayers = () => updateTopPlayers().then((data) => setTopPlayersData(data));

	const TopPlayer = () => {
		if (topPlayers.length || topPlayersData.length) {
			return (
				<Player
					key={(topPlayersData || topPlayers)[0].id}
					id={(topPlayersData || topPlayers)[0].id}
					rank={1}
					name={(topPlayersData || topPlayers)[0].player[0].fullName}
					points={Math.floor((topPlayersData || topPlayers)[0].average)}
					profilePhoto={(topPlayersData || topPlayers)[0].profilePhoto}
					updatePlayers={updatePlayers}
				/>
			);
		}
		return null;
	};

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);

		CodePush.sync({
			updateDialog: true,
			installMode: CodePush.InstallMode.IMMEDIATE
		});

		updateTopPlayers().then((data) => {
			setTopPlayersData(data);
			setRefreshing(false);
		});
	}, [refreshing]);

	CodePush.sync({
		updateDialog: true,
		installMode: CodePush.InstallMode.IMMEDIATE
	});

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
					<ColorHeading title="Top Player" />
					<TopPlayer />
					<GrayHeading title="Ranked Players" />
					{(topPlayersData || topPlayers).slice(1).map((item, index) => (
						<Player
							key={item.id}
							id={item.id}
							rank={index + 2}
							name={item.player[0].fullName}
							points={Math.floor(item.average)}
							profilePhoto={item.player[0].profilePhoto}
							updatePlayers={updatePlayers}
						/>
					))}
				</BgImage>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	scrollView: {
		marginBottom: 250
	}
});

export default (HomeScreen);
