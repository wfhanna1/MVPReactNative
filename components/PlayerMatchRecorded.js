import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "native-base";

import useQuery from "../hooks/useQuery";
import findPlayersQuery from "../queries/findPlayers";
import playerRatingQuery from "../queries/playerRating";

import Colors from "../colors";
import PlayerImage from "./PlayerImage";

function PlayerMatchRecorded (playerData) {
	const [player, playerLoading] = useQuery(findPlayersQuery(playerData.id));
	const [playerRating, playerRatingLoading] = useQuery(playerRatingQuery(playerData.id));
	const { pointsColor } = playerData;

	if (!player || playerLoading) {
		return (
			<Text>Loading...</Text>
		);
	}

	return (
		<View style={styles.playerComponent}>
			<View style={styles.picture}>
				<PlayerImage profilePhoto={player.profilePhoto} fullName={player ? player.fullName : false} isWinner={playerData.isWinner} />
			</View>
			<View>
				<Text style={styles.name}>{playerLoading ? "..." : `${player ? player.fullName : "Player Name"}`}</Text>
				<Text>
					<Text style={styles.totalPoints}>{playerRatingLoading ? "..." : `Points: ${playerRating ? Math.floor(playerRating.score).toLocaleString() : "0"}`}</Text>
					<Text style={pointsColor === "red" ? styles.gamePoints : [styles.gamePoints, styles.greenGamePoints]}>
							&nbsp;&nbsp;
						{playerData.gamePoints}
					</Text>
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		marginTop: "7%",
		width: "100%",
		textAlign: "center",
		fontSize: 45,
		fontFamily: "KlinicSlab-Book",
		color: Colors.InsightFuschia,
		fontWeight: "500",
		lineHeight: 54,
		letterSpacing: -1.46
	},
	playerComponent: {
		marginLeft: "7%",
		marginBottom: "7%",
		flexDirection: "row"
	},
	picture: {
		height: 75,
		resizeMode: "contain",
		width: "30%",
		marginTop: -10,
		marginLeft: "4%"
	},
	name: {
		fontFamily: "KlinicSlab-Book",
		fontSize: 26,
		fontWeight: "500",
		letterSpacing: -0.63,
		marginBottom: -7
	},
	totalPoints: {
		fontSize: 16,
		color: Colors.Green,
		letterSpacing: -0.7
	},
	gamePoints: {
		fontSize: 16,
		color: Colors.Red,
		fontWeight: "bold",
		letterSpacing: -0.57
	},
	greenGamePoints: {
		color: Colors.Green
	}
});

export default PlayerMatchRecorded;
