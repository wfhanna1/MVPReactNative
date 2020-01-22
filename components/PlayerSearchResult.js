import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "native-base";
import { withNavigation } from "react-navigation";

import useQuery from "../hooks/useQuery";
import playerRatingQuery from "../queries/playerRating";

import Colors from "../colors";
import PlayerImage from "./PlayerImage";
import ResponsiveSize from "../config/getScreenDimensions";

function PlayerSearchResult ({ navigation, id, name, profilePhoto, updatePlayers }) {
	const [playerRating, playerRatingLoading] = useQuery(playerRatingQuery(id));

	const Rating = () => {
		if (playerRating) {
			return (
				<Text style={styles.points}>{`Points: ${Math.floor(playerRating.score)}`}</Text>
			);
		} if (playerRatingLoading) {
			return (
				<Text style={styles.points}>Points: ...</Text>
			);
		}
		return null;
	};
	return (
		<View>
			<TouchableOpacity
				onPress={() => navigation.navigate("ProfileScreen", {
					id,
					updatePlayers
				})}
				style={styles.playerComponent}
			>
				<View style={styles.picture}>
					<PlayerImage profilePhoto={profilePhoto} fullName={name} />
				</View>
				<View>
					<Text style={styles.name}>{name}</Text>
					<Rating />
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
		color: Colors.InsightFuschia
	},
	picture: {
		marginTop: -10,
		marginHorizontal: "4%"
	},
	name: {
		fontFamily: "KlinicSlab-Medium",
		fontSize: ResponsiveSize(14.4),
		letterSpacing: -0.63,
		marginBottom: -7
	},
	points: {
		fontSize: ResponsiveSize(23.4),
		color: Colors.Green,
		letterSpacing: -0.7
	}
});

export default (withNavigation(PlayerSearchResult));
