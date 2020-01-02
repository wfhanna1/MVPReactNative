import React, { useState } from "react";
import { StyleSheet, ScrollView, View, RefreshControl } from "react-native";
import useQuery from "../hooks/useQuery";
import topPlayersQuery from "../queries/topPlayers";

import AddNewPlayerButton from "../components/AddNewPlayerButton";
import LoadingScreen from "./LoadingScreen";
import HeaderLg from "../components/HeaderLarge";
import ColorHeading from "../components/ColorHeading";
import GrayHeading from "../components/GrayHeading";
import Player from "../components/Player";
import BgImage from "../components/backgroundImage";

import insightMVPUrl from "../queries/config";

function updateTopPlayers () {
	return fetch(`${insightMVPUrl}/Ratings/topPlayers`).then((response) => response.json());
}

function HomeScreen () {
	const [topPlayers, topPlayersLoading] = useQuery(topPlayersQuery());
	const [topPlayersData, setTopPlayersData] = useState(false);
	const [refreshing, setRefreshing] = useState(false);

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
			<HeaderLg />
			<ScrollView
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				<BgImage>
					<View style={styles.buttonContainer}>
						<AddNewPlayerButton />
					</View>
					<ColorHeading title="Top Player" />
					<Player
						key={(topPlayersData || topPlayers)[0].id}
						rank={1}
						name={(topPlayersData || topPlayers)[0].player[0].fullName}
						points={Math.floor((topPlayersData || topPlayers)[0].average)}
					/>
					<GrayHeading title="Ranked Players" />
					{(topPlayersData || topPlayers).slice(1).map((item, index) => (
						<Player
							key={item.id}
							rank={index + 2}
							name={item.player[0].fullName}
							points={Math.floor(item.average)}
						/>
					))}
				</BgImage>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		height: 18,
		marginTop: -15,
		alignItems: "center"
	}
});

export default (HomeScreen);
