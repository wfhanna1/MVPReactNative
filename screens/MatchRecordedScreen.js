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
import playerRating from "../queries/playerRating";
import ButtonPrimary from "../components/ButtonPrimary";

function RecordMatchScreen ({ navigation }) {
	const navigationContext = navigation.state.params || {
	};
	const [recordMatch, recordMatchLoading, recordMatchError] = useQuery(recordMatchQuery(navigationContext.recordMatch));
	const [game, gameLoading] = useQuery(gamesQuery(navigation.getParam("recordMatch").gameId));
	// const [player, playerLoading] = useQuery(findPlayersQuery(navigation.getParam("recordMatch").players[0].playerId));
	const [players, playersLoading] = useQuery(findPlayersQuery());
	// const [player, setPlayers] = useState([]);
	// const [playerRating, playerRatingLoading] = useQuery(playerRatingQuery(navigation.getParam("recordMatch").players[0].playerId));
	const [playerRatings, playerRatingsLoading] = useQuery(playerRatingQuery());

	if (!game || gameLoading || !players || playersLoading || !playerRatings || playerRatingsLoading) {
		return (
			<BlankScreen />
		);
	}

	const winners = navigation.getParam("recordMatch").players.filter((item) => item.isWinner);
	const losers = navigation.getParam("recordMatch").players.filter((item) => !item.isWinner);
	const winData = [];
	const loseData = [];
	winners.forEach((item) => {
		const addPlayer = players.filter((match) => match.id === item.playerId)[0];
		winData.push(addPlayer);
	});
	losers.forEach((item) => {
		const addPlayer = players.filter((match) => match.id === item.playerId)[0];
		loseData.push(addPlayer);
	});

	return (
		<BgImage>
			<ScrollView>
				<HeaderSm style={styles.title} headerTitle="Match Recorded!" />
				<ColorHeading title={`${game.name} Winners`} />
				{winData.map((player, index) => <PlayerMatchRecorded name={`${player.fullName}`} totalPoints={Math.floor(playerRatings.filter((item) => item.playerId === winData[index].id)[0].score)} gamePoints={`+${game.kFactor}`} />)}
				<GrayHeading title={`${game.name} Losers`} />
				{loseData.map((player, index) => <PlayerMatchRecorded name={`${player.fullName}`} totalPoints={Math.floor(playerRatings.filter((item) => item.playerId === winData[index].id)[0].score)} gamePoints={`+${game.kFactor}`} />)}
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
