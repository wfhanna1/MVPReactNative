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

const foo = [
	{
		id: 1,
		game: "foosball",
		date: "0001-01-01T00:00:00",
		teams: [
			{
				isWinner: true,
				players: [
					{
						id: 123,
						name: "Paul Woidke",
						photo: "/path/to/photo.jpg",
						points: 1111
					},
					{
						id: 456,
						name: "Jennifer Dougher",
						photo: "/path/to/photo.jpg",
						points: 3575
					}
				]
			},
			{
				players: [
					{
						id: 789,
						name: "Wasim Hannah",
						photo: "/path/to/photo.jpg",
						points: 2746
					},
					{
						id: 234,
						name: "Cory Ehler",
						photo: "/path/to/photo.jpg",
						points: 1611
					}
				]
			}
		]
	}
];

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
