import React from "react";
import { StyleSheet, View } from "react-native";
import { withNavigation } from "react-navigation";
import { Text } from "native-base";

import HeaderSm from "../components/HeaderSmall";
import BgImage from "../components/backgroundImage";
import ButtonPrimary from "../components/ButtonPrimary";
import AddNewPlayerButton from "../components/AddNewPlayerButton";
import PlayerImage from "../components/PlayerImage";
import ResponsiveSize from "../config/getScreenDimensions";

function PlayerAddedScreen ({ navigation }) {
	const navigationContext = navigation.state.params || {
	};
	const matchedPlayersData = navigationContext.matchedPlayers;

	return (
		<BgImage>
			<HeaderSm style={styles.title} headerTitle="Player Added!" />
			<View style={styles.container}>
				<View style={styles.picture}>
					<PlayerImage fullName={(navigation.getParam("name") ? navigation.getParam("name") : false)} large />
				</View>
				<View style={styles.subContainer1}>
					<Text style={styles.name}>{navigation.getParam("name")}</Text>
					<Text style={styles.game}>{navigation.getParam("email")}</Text>
				</View>
				<ButtonPrimary
					title="Record Match"
					onPress={() => navigation.push("RecordMatch", {
						matchedPlayers: matchedPlayersData
					})}
				/>
				<View style={styles.subContainer2}>
					<AddNewPlayerButton />
				</View>
			</View>
		</BgImage>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "space-around",
		marginTop: -30
	},
	subContainer1: {
		alignItems: "center",
		marginTop: "-5%"
	},
	subContainer2: {
		marginTop: "-5%"
	},
	picture: {
		height: "35%"
	},
	name: {
		fontFamily: "KlinicSlab-Medium",
		fontSize: 26,
		fontWeight: "500",
		letterSpacing: -0.63,
		marginBottom: -7
	},
	game: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#6E645F",
		letterSpacing: -0.57
	}
});

export default (withNavigation(PlayerAddedScreen));
