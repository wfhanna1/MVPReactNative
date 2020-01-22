import React from "react";
import { StyleSheet, ImageBackground, Image, View, Text } from "react-native";

import Colors from "../colors";

const bgImage = require("../assets/icons/Wave-Background.png");
const trophyImage = require("../assets/icons/Icon-Trophy-Large.png");

export default function LoadingScreen () {
	return (
		<ImageBackground
			source={bgImage}
			style={{
				display: "flex", height: "100%", width: "100%"
			}}
		>
			<View style={styles.container}>
				<View>
					<Image source={trophyImage} style={styles.trophy} />
					<Text style={styles.title}>Office MVP</Text>
				</View>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center"
	},
	trophy: {
		aspectRatio: 0.65,
		resizeMode: "contain",
		marginTop: "40%"
	},

	title: {
		fontFamily: "KlinicSlab-Book",
		fontWeight: "500",
		letterSpacing: -1.4,
		fontSize: 45,
		color: Colors.White,
		marginTop: "-30%",
		alignSelf: "center"
	}
});
