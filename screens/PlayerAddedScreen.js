import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text } from "native-base";
import { withNavigation } from "react-navigation";
import HeaderSm from "../components/HeaderSmall";
import BgImage from "../components/backgroundImage";
import ButtonPrimary from "../components/ButtonPrimary";
import AddNewPlayerButton from "../components/AddNewPlayerButton";

const defaultProfilePhoto = require("../assets/icons/Default-user.png");

function PlayerAddedScreen ({ navigation }) {
	const navigationContext = navigation.state.params || {
	};
	const matchedPlayersData = navigationContext.matchedPlayers;

	return (
		<BgImage>
			<HeaderSm style={styles.title} headerTitle="Player Added!" />
			<View style={styles.container}>
				<Image
					style={styles.picture}
					source={navigation.getParam("profilePhoto") ? {
						uri: navigation.getParam("profilePhoto")
					} : defaultProfilePhoto}
				/>
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
		height: "35%",
		width: "100%",
		resizeMode: "contain"
	},
	name: {
		fontFamily: "KlinicSlab-Book",
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
