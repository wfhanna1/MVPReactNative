import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { withNavigation } from "react-navigation";
import useQuery from "../hooks/useQuery";
import recordMatchQuery from "../queries/recordMatch";
import gamesQuery from "../queries/games";
import findPlayersQuery from "../queries/findPlayers";
import playerRatingQuery from "../queries/playerRating";
import BlankScreen from "./BlankScreen";
import ColorHeading from "../components/ColorHeading";
import GrayHeading from "../components/GrayHeading";
import PlayerMatchRecorded from "../components/PlayerMatchRecorded";
import HeaderSm from "../components/HeaderSmall";
import BgImage from "../components/backgroundImage";
import ButtonPrimary from "../components/ButtonPrimary";

function RecordMatchScreen ({ navigation }) {
	const navigationContext = navigation.state.params || {
	};
	const [recordMatch, recordMatchLoading] = useQuery(recordMatchQuery(navigationContext.recordMatch));
	const [game, gameLoading] = useQuery(gamesQuery(navigation.getParam("recordMatch").gameId));

	if (!recordMatch || recordMatchLoading || !game || gameLoading) {
		return (
			<BlankScreen />
		);
	}

	const winners = navigation.getParam("recordMatch").players.filter((item) => item.isWinner);
	const losers = navigation.getParam("recordMatch").players.filter((item) => !item.isWinner);

	return (
		<BgImage>
			<ScrollView>
				<HeaderSm style={styles.title} headerTitle="Match Recorded!" />
				<ColorHeading title={`${game.name} Winners`} />
				{winners.map((player) => <PlayerMatchRecorded id={player.playerId} gamePoints={`+${game.kFactor}`} />)}
				<GrayHeading title={`${game.name} Losers`} />
				{losers.map((player) => <PlayerMatchRecorded id={player.playerId} gamePoints={`-${game.kFactor}`} />)}
				<ButtonPrimary
					title="Back to Home"
					onPress={() => navigation.popToTop("Players")}
				/>
			</ScrollView>
		</BgImage>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center"
	},
	input: {
		borderBottomColor: "red",
		width: "80%"
	},
	text: {
		marginTop: 30
	}
});

export default (withNavigation(RecordMatchScreen));
