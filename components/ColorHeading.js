import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "native-base";
import ResponsiveSize from "../config/getScreenDimensions";

import Colors from "../colors";

export default function ColorHeading ({ title }) {
	return (
		<Text style={styles.title}>
			{title}
		</Text>
	);
}

const styles = StyleSheet.create({
	title: {
		marginTop: "7%",
		marginBottom: "2%",
		width: "100%",
		textAlign: "center",
		fontSize: ResponsiveSize(8.3),
		fontFamily: "KlinicSlab-Medium",
		color: Colors.Fuschia,
		fontWeight: "500",
		lineHeight: 54,
		letterSpacing: -1.46
	}
});
