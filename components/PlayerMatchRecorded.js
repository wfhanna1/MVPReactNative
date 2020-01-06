import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "native-base";
import PlayerImage from "./PlayerImage";
import useQuery from "../hooks/useQuery";
import findPlayersQuery from "../queries/findPlayers";
import playerRatingQuery from "../queries/playerRating";

export default function PlayerMatchRecorded (playerData) {
	const [player, playerLoading] = useQuery(findPlayersQuery(playerData.id));
	const [playerRating, playerRatingLoading] = useQuery(playerRatingQuery(playerData.id));
	const { pointsColor } = playerData;

	return (
		<View>
			<View style={styles.playerComponent}>
				<View style={styles.picture}>
					<PlayerImage fullName={player ? player.fullName : false} isWinner={playerData.isWinner} />
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
		color: "#B73491",
		fontWeight: "500",
		lineHeight: 54,
		letterSpacing: -1.46
	},
	playerComponent: {
		marginLeft: "7%",
		marginBottom: "7%",
		flexDirection: "row"
	},
	number: {
		fontFamily: "KlinicSlab-Book",
		fontSize: 45,
		fontWeight: "500",
		color: "#6E645F"
	},
	picture: {
		height: 75,
		resizeMode: "contain",
		width: "30%",
		marginTop: -10,
		marginLeft: "4%"
	},
	game: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#6E645F",
		letterSpacing: -0.57
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
		color: "#399D60",
		letterSpacing: -0.7
	},
	gamePoints: {
		fontSize: 16,
		color: "#EB1E45",
		fontWeight: "bold",
		letterSpacing: -0.57
	},
	greenGamePoints: {
		color: "#399D60"
	}
});
