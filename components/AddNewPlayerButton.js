import React from "react";
import { StyleSheet } from "react-native";
import { Button, Text, Icon } from "native-base";
import { withNavigation } from "react-navigation";
import ResponsiveSize from "../config/getScreenDimensions";

import Colors from "../colors";

function AddNewPlayerButton ({ navigation, arrayData }) {
	const navigationContext = navigation.state.params || {
	};

	return (
		<Button
			transparent
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
	);
}

const styles = StyleSheet.create({
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
