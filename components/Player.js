import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "native-base";
import PlayerImage from "./PlayerImage";

export default function Player ({ name, points, rank }) {
	return (
		<View>
			<View style={styles.playerComponent}>
				<Text style={styles.number}>{rank}</Text>
				<View style={styles.picture}>
					<PlayerImage fullName={name} />
				</View>
				<View>
					<Text style={styles.game}>In All Games</Text>
					<Text style={styles.name}>{name}</Text>
					<Text style={styles.points}>
						Points:&nbsp;
						{points}
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
		marginTop: -10,
		marginHorizontal: "4%"
	},
	game: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#6E645F",
		letterSpacing: -0.57
	},
	name: {
		fontFamily: "KlinicSlab-Medium",
		fontSize: 26,
		letterSpacing: -0.63,
		marginBottom: -7
	},
	points: {
		fontSize: 16,
		color: "#399D60",
		letterSpacing: -0.7
	}
});
