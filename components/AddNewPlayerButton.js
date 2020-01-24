import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, Icon } from "native-base";
import { withNavigation } from "react-navigation";
import ResponsiveSize from "../config/getScreenDimensions";

import Colors from "../colors";

function AddNewPlayerButton ({ navigation, arrayData }) {
	const navigationContext = navigation.state.params || {
	};

	return (
		<View style={styles.buttonContainer}>
			<Button
				style={styles.button}
				rounded
				onPress={() => navigation.navigate("AddNewPlayer", {
					...navigationContext,
					matchedPlayers: arrayData
				})}
			>
				<Text uppercase={false} style={styles.text}>
        Add new player&nbsp;
					<Icon type="FontAwesome" name="plus-circle" style={styles.icon} />
				</Text>
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		alignItems: "center",
		marginTop: -50,
		position: "relative",
		top: 50
	},
	button: {
		backgroundColor: "rgba(255, 255, 255, 0.92)"

	},
	text: {
		color: Colors.LinkBlue,
		fontSize: ResponsiveSize(23.44)
	},
	icon: {
		color: Colors.LinkBlue,
		fontSize: 15
	}
});

export default (withNavigation(AddNewPlayerButton));
