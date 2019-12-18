import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Text } from "native-base";

const playerImage = require("../assets/icons/Default-user.png");

export default function PlayerRecentGames (player) {
	return (
		<View>
			<View style={styles.playerComponent}>
				<Image style={styles.picture} source={playerImage} />
				<View style={styles.stats}>
					<Text style={styles.name}>{player.fullName || "Player Name"}</Text>
					<Text style={styles.points}>{`Points: ${player.points.toLocaleString() || "2,438"}`}</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	playerComponent: {
		alignItems: "center",
		margin: 5
	},
	picture: {
		height: 75,
		width: 75,
		resizeMode: "contain"
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
