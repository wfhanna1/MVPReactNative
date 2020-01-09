import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "native-base";
import { withNavigation } from "react-navigation";
import PlayerImage from "./PlayerImage";
import ResponsiveSize from "../config/getScreenDimensions";

function Player ({ navigation, id, name, points, rank, profilePhoto }) {
	return (
		<View>
			<TouchableOpacity
				onPress={() => navigation.navigate("ProfileScreen", {
					id
				})}
				style={styles.playerComponent}
			>
				<Text style={rank === 1 ? [styles.number, styles.numberOne] : styles.number}>{rank}</Text>
				<View style={styles.picture}>
					<PlayerImage profilePhoto={profilePhoto} fullName={name} />
				</View>
				<View>
					<Text style={styles.game}>In All Games</Text>
					<Text style={styles.name}>{name}</Text>
					<Text style={styles.points}>
						Points:&nbsp;
						{points}
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	playerComponent: {
		marginLeft: "7%",
		marginBottom: "7%",
		flexDirection: "row"
	},
	numberOne: {
		color: "#B73491"
	},
	number: {
		fontFamily: "KlinicSlab-Medium",
		fontSize: ResponsiveSize(8.3),
		fontWeight: "500",
		color: "#6E645F"
	},
	picture: {
		marginTop: -10,
		marginHorizontal: "4%"
	},
	game: {
		fontSize: ResponsiveSize(23.4),
		fontWeight: "bold",
		color: "#6E645F",
		letterSpacing: -0.57
	},
	name: {
		fontFamily: "KlinicSlab-Medium",
		fontSize: ResponsiveSize(14.4),
		letterSpacing: -0.63,
		marginBottom: -7
	},
	points: {
		fontSize: ResponsiveSize(23.4),
		color: "#399D60",
		letterSpacing: -0.7
	}
});

export default (withNavigation(Player));
