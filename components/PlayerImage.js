import React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";
import ResponsiveSize from "../config/getScreenDimensions";

const defaultPlayerImage = require("../assets/icons/Default-user.png");

const styles = StyleSheet.create({
	initials: {
		height: ResponsiveSize(5),
		width: ResponsiveSize(5),
		borderWidth: 3,
		borderRadius: 100,
		marginBottom: 5,
		borderColor: "#BEBEBB"
	},
	initialsLarge: {
		height: 130,
		width: 130,
		borderWidth: 7,
		borderRadius: 100
	},
	initialsWinner: {
		borderColor: "#399D60"
	},
	initialsText: {
		fontFamily: "KlinicSlab-Bold",
		fontSize: ResponsiveSize(10.4),
		letterSpacing: -0.63,
		height: 75,
		color: "#BEBEBB",
		textAlign: "center",
		marginHorizontal: -3,
		...Platform.select({
			ios: {
				marginVertical: 17
			},
			android: {
				marginVertical: 10
			}
		})
	},
	initialsTextLarge: {
		fontSize: 72,
		width: 130,
		height: 130,
		marginHorizontal: -7,
		...Platform.select({
			ios: {
				marginVertical: 22
			},
			android: {
				marginVertical: 10
			}
		})
	},
	picture: {
		height: 75,
		width: 75,
		resizeMode: "contain"
	},
	pictureWinner: {
		borderColor: "#399D60",
		borderWidth: 5,
		borderRadius: 100
	}
});

function PlayerImage (playerData) {
	if (playerData.profilePhoto) {
		return (
			<Image
				style={[styles.initials, (playerData.large ? styles.initialsLarge : {
				}), (playerData.isWinner ? styles.initialsWinner : {
				})]}
				source={playerData.profilePhoto ? {
					uri: playerData.profilePhoto
				} : defaultPlayerImage}
			/>
		);
	}
	if (playerData.fullName) {
		const nameData = playerData.fullName.toString().replace(/[^a-zA-Z\d\s]/g, "").toUpperCase().split(" ");
		const initials = nameData.map((word) => word.charAt(0)).join("");

		console.log(initials);

		return (
			<View style={[styles.initials, (playerData.large ? styles.initialsLarge : {
			}), (playerData.isWinner ? styles.initialsWinner : {
			})]}
			>
				<Text style={[styles.initialsText, (playerData.large ? styles.initialsTextLarge : {
				})]}
				>
					{initials[0]}
					{initials[(initials.length - 1)]}
				</Text>
			</View>
		);
	}

	return (
		<Image
			style={[styles.picture, (playerData.isWinner ? styles.pictureWinner : {
			})]}
			source={defaultPlayerImage}
		/>
	);
}

export default PlayerImage;
