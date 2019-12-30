import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "native-base";
import PlayerImage from "./PlayerImage";
import useQuery from "../hooks/useQuery";
import findPlayersQuery from "../queries/findPlayers";
import playerRatingQuery from "../queries/playerRating";

export default function PlayerRecentGames (playerData) {
	const [player, playerLoading] = useQuery(findPlayersQuery(playerData.id));
	const [playerRating, playerRatingLoading] = useQuery(playerRatingQuery(playerData.id));

	return (
		<View style={styles.playerComponent}>
			<PlayerImage fullName={playerData.fullName} isWinner={playerData.isWinner} />
			<View style={styles.stats}>
				<Text style={styles.name}>{playerData.fullName ? playerData.fullName : playerLoading ? "..." : player ? player.fullName : "Player Name"}</Text>
				<Text style={styles.points}>{playerRatingLoading ? "..." : `Points: ${playerRating ? Math.floor(playerRating.score).toLocaleString() : "0"}`}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	playerComponent: {
		alignItems: "center",
		margin: 5
	},
	stats: {
		alignItems: "center",
		marginBottom: 10
	},
	name: {
		fontFamily: "KlinicSlab-Book",
		fontSize: 26,
		fontWeight: "500",
		letterSpacing: -0.63,
		marginBottom: -7
	},
	points: {
		fontSize: 16,
		color: "#399D60",
		letterSpacing: -0.7,
		marginBottom: -5
	}
});
