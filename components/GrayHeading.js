import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "native-base";

export default function GrayHeading ({ title }) {
	return (
		<Text style={styles.title}>
			{title}
		</Text>
	);
}

const styles = StyleSheet.create({
	title: {
		textAlign: "center",
		fontSize: 45,
		fontFamily: "KlinicSlab-Book",
		color: "#6E645F",
		fontWeight: "500",
		letterSpacing: -1.46,
		marginBottom: "4%"
	}
});
