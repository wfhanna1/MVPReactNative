import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { withNavigation } from "react-navigation";
import ResponsiveSize from "../config/getScreenDimensions";
import ButtonPrimary from "./ButtonPrimary";
import AddNewPlayerButton from "./AddNewPlayerButton";

import Colors from "../colors";

const headerImageLg = require("../assets/icons/Header-Background-Large2x.png");

function HeaderLg ({ navigation }) {
	const navigationContext = navigation.state.params || {
	};

	return (
		<ImageBackground
			source={headerImageLg}
			style={{
				zIndex: 1
			}}
			imageStyle={{
				width: "100%",
				height: ResponsiveSize(1.65)
			}}
		>
			<View style={styles.container}>
				<Text style={styles.title}>Office MVP</Text>
				<ButtonPrimary
					title="Record Match"
					onPress={() => navigation.navigate("RecordMatch", {
						...navigationContext,
						recordMatch: {
							...navigationContext.recordMatch
						}
					})}
				/>
				<AddNewPlayerButton float />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	title: {
		fontFamily: "KlinicSlab-Book",
		fontWeight: "400",
		letterSpacing: -2.4,
		fontSize: ResponsiveSize(7),
		color: Colors.White,
		marginTop: -80,
		marginBottom: 15
	},
	container: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: "30%"
	}
});

export default (withNavigation(HeaderLg));
