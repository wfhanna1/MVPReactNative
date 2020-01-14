import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import { withNavigation } from "react-navigation";
import PlayerImage from "./PlayerImage";
import useQuery from "../hooks/useQuery";
import findPlayersQuery from "../queries/findPlayers";
import playerRatingQuery from "../queries/playerRating";
import ResponsiveSize from "../config/getScreenDimensions";

function PlayerRecentGames (data) {
	const { navigation } = data;
	const [player, playerLoading] = useQuery(findPlayersQuery(data.id));
	const [playerRating, playerRatingLoading] = useQuery(playerRatingQuery(data.id));
	const [playerName, setPlayerName] = useState(data.fullName);

	useEffect(() => {
		if (playerName.length >= 16) {
			const truncatedName = `${playerName.substring(0, 12)}...`;
			setPlayerName(truncatedName);
		}
	}, []);

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate("ProfileScreen", {
				id: data.id,
				updatePlayers: data.updatePlayers
			})}
			style={styles.playerComponent}
		>
			<PlayerImage profilePhoto={data.profilePhoto ? data.profilePhoto : player ? player.profilePhoto : false} fullName={data.fullName} isWinner={data.isWinner} />
			<View style={styles.stats}>
				<Text style={styles.name}>{playerName || (playerLoading ? "..." : player ? playerName : "Player Name")}</Text>
				<Text style={styles.points}>{playerRatingLoading ? "..." : `Points: ${playerRating ? Math.floor(playerRating.score).toLocaleString() : "0"}`}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	playerComponent: {
		alignItems: "center",
		minWidth: ResponsiveSize(2.68),
	  marginHorizontal: 13
	},
	stats: {
		alignItems: "center",
		marginBottom: 10
	},
	name: {
		fontFamily: "KlinicSlab-Medium",
		fontSize: ResponsiveSize(14.4),
		fontWeight: "500",
		letterSpacing: -0.63,
		marginBottom: -7
	},
	points: {
		fontSize: ResponsiveSize(23.4),
		color: "#399D60",
		letterSpacing: -0.7,
		marginBottom: -5
	}
});

export default withNavigation(PlayerRecentGames);
