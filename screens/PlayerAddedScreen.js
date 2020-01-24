import React from "react";
import { StyleSheet, View } from "react-native";
import { withNavigation } from "react-navigation";
import { Text } from "native-base";

import useQuery from "../hooks/useQuery";
import addPlayerQuery from "../queries/addPlayer";

import Colors from "../colors";
import BlankScreen from "./BlankScreen";
import HeaderSm from "../components/HeaderSmall";
import BgImage from "../components/backgroundImage";
import ButtonPrimary from "../components/ButtonPrimary";
import AddNewPlayerButton from "../components/AddNewPlayerButton";
import PlayerImage from "../components/PlayerImage";

function PlayerAddedScreen ({ navigation }) {
	const navigationContext = navigation.state.params || {
	};
	const matchedPlayersData = navigationContext.matchedPlayers;

	const [addPlayer, addPlayerLoading, addPlayerError] = useQuery(addPlayerQuery({
		fullName: navigationContext.name,
		emailAddress: navigationContext.email,
		profilePhoto: navigationContext.profilePhoto
	}));

	if ((!addPlayer && !addPlayerError) || addPlayerLoading) {
		return (
			<BlankScreen />
		);
	}

	if (addPlayerError) {
		return (
			<BgImage>
				<HeaderSm style={styles.title} headerTitle="Error!" />
				<View style={[styles.container, styles.centeredContainer]}>
					<Text style={[styles.name, styles.nameMargin]}>Player already exists!</Text>
					<Text style={[styles.game, styles.gameMargin]}>
            Emails can only be associated with one player.
						{"\n"}
						Please try again.
					</Text>
					<ButtonPrimary
						title="Back"
						onPress={() => navigation.goBack()}
					/>
				</View>
			</BgImage>
		);
	}

	return (
		<BgImage>
			<HeaderSm style={styles.title} headerTitle="Player Added!" />
			<View style={styles.container}>
				<View style={styles.picture}>
					<PlayerImage profilePhoto={addPlayer.profilePhoto} fullName={addPlayer.fullName} large />
				</View>
				<View style={styles.subContainer1}>
					<Text style={styles.name}>{addPlayer.fullName}</Text>
					<Text style={styles.game}>{addPlayer.email}</Text>
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
	centeredContainer: {
		paddingTop: 160
	},
	subContainer1: {
		alignItems: "center",
		marginTop: "-5%"
	},
	subContainer2: {
		marginTop: "-5%",
		marginBottom: 50
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
	nameMargin: {
		marginBottom: 8
	},
	game: {
		textAlign: "center",
		fontSize: 16,
		fontWeight: "bold",
		color: Colors.MiddleGray,
		letterSpacing: -0.57
	},
	gameMargin: {
		marginBottom: 20
	}
});

export default (withNavigation(PlayerAddedScreen));
