import React from "react";
import { StyleSheet } from "react-native";
import { Button, Text, Icon } from "native-base";
import { withNavigation } from "react-navigation";

function AddNewPlayerButton ({ navigation, screenHistory, arrayData }) {
	const navigationContext = navigation.state.params || {
	};

	console.log("inside new player button array data", arrayData);

	if (!navigationContext.hasOwnProperty("screenHistory")) {
		Object.defineProperty(navigationContext, "screenHistory", {
			value: {

			},
			writable: true
		});
	}

	return (
		<Button
			transparent
			onPress={() => navigation.navigate("AddNewPlayer", {
			  ...navigationContext,
	        screenHistory: {
					...navigationContext.screenHistory,
					screenHistory
				},
				arrayData
			})}
		>
			<Text style={styles.text}>
        Add new player&nbsp;
				<Icon type="FontAwesome" name="plus-circle" style={styles.icon} />
			</Text>
		</Button>
	);
}

const styles = StyleSheet.create({
	text: {
		color: "#4166AA",
		fontSize: 16
	},
	icon: {
		color: "#4166AA",
		fontSize: 15
	}
});

export default (withNavigation(AddNewPlayerButton));
