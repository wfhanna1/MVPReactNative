import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { withNavigation } from "react-navigation";

import useQuery from "../hooks/useQuery";
import recordMatchQuery from "../queries/recordMatch";
import gamesQuery from "../queries/games";

import BlankScreen from "./BlankScreen";
import HeaderSm from "../components/HeaderSmall";
import BgImage from "../components/backgroundImage";
import ColorHeading from "../components/ColorHeading";
import GrayHeading from "../components/GrayHeading";
import ButtonPrimary from "../components/ButtonPrimary";
import PlayerMatchRecorded from "../components/PlayerMatchRecorded";

function RecordMatchScreen ({ navigation }) {
	const navigationContext = navigation.state.params || {
	};
	const [recordMatch, recordMatchLoading] = useQuery(recordMatchQuery(navigationContext.recordMatch));
	const [game, gameLoading] = useQuery(gamesQuery(navigationContext.recordMatch.gameId));
	const points = recordMatch;

	if (!recordMatch || recordMatchLoading || !game || gameLoading) {
		return (
			<BlankScreen />
		);
	}

	const winners = navigationContext.recordMatch.players.filter((item) => item.isWinner);
	const losers = navigationContext.recordMatch.players.filter((item) => !item.isWinner);

	return (
		<BgImage>
			<ScrollView>
				<HeaderSm style={styles.title} headerTitle="Match Recorded!" />
				<ColorHeading title={`${game.name} Winners`} />
				{winners.map((player) => <PlayerMatchRecorded id={player.playerId} gamePoints={`+${points}`} isWinner pointsColor="green" />)}
				<GrayHeading title={`${game.name} Losers`} />
				{losers.map((player) => <PlayerMatchRecorded id={player.playerId} gamePoints={`-${points}`} isWinner={false} pointsColor="red" />)}
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
