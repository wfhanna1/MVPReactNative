import React from "react";
import { View,
	StyleSheet,
	Text,
	ImageBackground,
	Platform } from "react-native";
import ResponsiveSize from "../config/getScreenDimensions";

const headerImageSm = require("../assets/icons/Header-Background-Small.png");

function HeaderSm ({ headerTitle }) {
	return (
		<ImageBackground
			source={headerImageSm}
			style={{
				width: "100%",
				height: ResponsiveSize(2.2)
			}}
		>
			<View style={styles.container}>
				<Text style={styles.title}>{headerTitle}</Text>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	title: {
		fontFamily: "KlinicSlab-Book",
		fontWeight: "400",
		letterSpacing: -2.4,
		fontSize: ResponsiveSize(8.3),
		color: "#FFFFFF",
		...Platform.select({
			ios: {
				marginTop: "-35%"
			},
			android: {
				marginTop: "-40%"
			}
		})
	},
	container: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: "30%"
	}
});

export default HeaderSm;
