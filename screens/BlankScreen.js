import React from "react";
import { StyleSheet, View, Text } from "react-native";

import HeaderSm from "../components/HeaderSmall";

export default function LoadingScreen () {
	return (
		<View style={styles.container}>
			<HeaderSm />
			<Text>Loading...</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center"
	}
});
