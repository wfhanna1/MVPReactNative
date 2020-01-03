import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import ResponsiveSize from "../config/getScreenDimensions";

const defaultPlayerImage = require("../assets/icons/Default-user.png");

function PlayerImage (playerData) {
	if (playerData.fullName) {
		const nameData = playerData.fullName.toString().toUpperCase().split(" ");
		const initials = nameData.map((word) => word.charAt(0)).join("");

		return (
			<View style={playerData.large ? (playerData.isWinner ? styles.initialsContainerWinnerLarge : styles.initialsContainerLarge) : (playerData.isWinner ? styles.initialsContainerWinner : styles.initialsContainer)}>
				<Text style={playerData.large ? styles.initialsTextLarge : styles.initialsText}>{initials.substr(0, 2)}</Text>
			</View>
		);
	}

	return (
		<Image style={playerData.isWinner ? styles.pictureWinner : styles.picture} source={defaultPlayerImage} />
	);
}

const styles = StyleSheet.create({
	initialsContainer: {
		height: ResponsiveSize(5),
		width: ResponsiveSize(5),
		borderWidth: 3,
		borderColor: "#BEBEBB",
		borderRadius: 100,
		marginBottom: 5
	},
	initialsContainerLarge: {
		height: 130,
		width: 130,
		borderWidth: 7,
		borderColor: "#BEBEBB",
		borderRadius: 100
	},
	initialsContainerWinner: {
		height: 75,
		width: 75,
		borderWidth: 3,
		borderColor: "#399D60",
		borderRadius: 100,
		marginBottom: 5
	},
	initialsContainerWinnerLarge: {
		height: 130,
		width: 130,
		borderWidth: 7,
		borderColor: "#399D60",
		borderRadius: 100
	},
	initialsText: {
		fontFamily: "KlinicSlab-Book",
		fontSize: ResponsiveSize(10.4),
		fontWeight: "bold",
		letterSpacing: -0.63,
		height: 75,
		color: "#BEBEBB",
		textAlign: "center",
		marginHorizontal: -3,
		marginVertical: 17
	},
	initialsTextLarge: {
		fontFamily: "KlinicSlab-Book",
		fontSize: 72,
		fontWeight: "bold",
		letterSpacing: -0.63,
		width: 130,
		height: 130,
		color: "#BEBEBB",
		textAlign: "center",
		marginHorizontal: -7,
		marginVertical: 30
	},
	picture: {
		height: 75,
		width: 75,
		resizeMode: "contain"
	},
	pictureWinner: {
		height: 75,
		width: 75,
		borderColor: "#399D60",
		borderWidth: 5,
		borderRadius: 100
	}
});

export default PlayerImage;
