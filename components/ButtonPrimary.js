import React from "react";
import { StyleSheet, Platform } from "react-native";
import { Button, Text, View } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import { withNavigation } from "react-navigation";
import ResponsiveSize from "../config/getScreenDimensions";

import Colors from "../colors";

function ButtonPrimary ({ onPress, title }) {
	return (
		<View style={styles.container}>
			<LinearGradient
				start={{
					x: 0, y: 0
				}}
				end={{
					x: 1, y: 0
				}}
				locations={[0, 0.7]}
				colors={["#983794", "#4B285F"]}
				style={styles.linearGradient}
			>
				<Button rounded style={styles.button} onPress={onPress}>
					<Text uppercase={false} style={styles.text}>{title}</Text>
				</Button>
			</LinearGradient>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		shadowColor: Colors.TransparentBlack,
		shadowOffset: {
			width: 0, height: 1
		},
		shadowOpacity: 0.8,
		shadowRadius: 1,
		elevation: 5
	},
	linearGradient: {
		borderRadius: 50,
		width: ResponsiveSize(1.9)
	},
	text: {
		fontFamily: "KlinicSlab-Medium",
		fontSize: ResponsiveSize(15),
		letterSpacing: -0.8,
		...Platform.select({
			ios: {
				marginTop: 8
			}
		}),
		width: "100%",
		textAlign: "center"
	},
	button: {
		alignItems: "center",
		backgroundColor: Colors.Transparent,
		height: ResponsiveSize(6.9)
	}
});

export default (withNavigation(ButtonPrimary));
