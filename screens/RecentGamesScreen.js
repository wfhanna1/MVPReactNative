import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Text, RefreshControl } from "react-native";
import HeaderLg from "../components/HeaderLarge";
import ColorHeading from "../components/ColorHeading";
import AddNewPlayerButton from "../components/AddNewPlayerButton";
import BgImage from "../components/backgroundImage";
import PlayerRecentGames from "../components/PlayerRecentGames";
import useQuery from "../hooks/useQuery";
import recentMatchesQuery from "../queries/recentMatches";
import BlankScreen from "./BlankScreen";

import insightMVPUrl from "../queries/config";

function updateRecentGames () {
	return fetch(`${insightMVPUrl}/Matches/recent`).then((response) => response.json());
}

export default function RecentGames () {
	const [recentMatches, recentMatchesLoading] = useQuery(recentMatchesQuery());
	const [recentMatchesData, setRecentMatchesData] = useState(false);
	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);

		updateRecentGames().then((data) => {
			setRecentMatchesData(data);
			setRefreshing(false);
		});
	}, [refreshing]);

	const LosersList = (props) => {
		const { losers } = props;
		return losers.length ? losers.map((player) => (
			<PlayerRecentGames fullName={player.fullName} key={player.playerId} id={player.playerId} isWinner={player.isWinner} />
		)) : <Text style={styles.tieGame}>It's a tie! Everyone wins!</Text>;
	};

	const Versus = (props) => {
		const { losers } = props;
		const { winners } = props;

		if (losers.length === 1 && winners.length === 1) {
			return (
			     <Text style={[styles.versus, styles.versusPadding]}>vs</Text>
			);
		} if ((losers.length >= 2 && winners.length) || (winners.length >= 2 && losers.length)) {
			return (
				<Text style={styles.versusContainer}>
					<Text style={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
					<Text style={styles.versus}>vs</Text>
					<Text style={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
				</Text>
			);
		}
		return null;
	};

	if (!recentMatches || recentMatchesLoading) {
		return (
			<BlankScreen />
		);
	}

	return (
		<View>
			<HeaderLg />
			<ScrollView
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				<BgImage>
					<View style={styles.buttonContainer}>
				  <AddNewPlayerButton />
					</View>
					<ColorHeading title="Recent Games" style={styles.header} />
					{(recentMatchesData || recentMatches).map((recentMatch) => (
						<View style={styles.wrapper} key={recentMatch.matchId}>
							<View style={styles.gameDateWrapper}>
								<Text style={styles.game}>{recentMatch.gameName}</Text>
								<Text style={styles.date}>
									{new Intl.DateTimeFormat("en-GB", {
										year: "numeric",
										month: "short",
										day: "2-digit",
										weekday: "short"
									}).format(new Date(recentMatch.gameDate))}
								</Text>
							</View>
							<View style={styles.container}>
								{recentMatch.players.filter(({ isWinner }) => isWinner).map((player) => (
									<PlayerRecentGames fullName={player.fullName} key={player.playerId} id={player.playerId} isWinner={player.isWinner} />
								))}
								<Versus losers={recentMatch.players.filter(({ isWinner }) => !isWinner)} winners={recentMatch.players.filter(({ isWinner }) => isWinner)} />
								<LosersList losers={recentMatch.players.filter(({ isWinner }) => !isWinner)} />
								<View style={styles.gameSeparator} />
							</View>
						</View>
					))}
				</BgImage>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		height: 18,
		marginTop: -15,
		alignItems: "center"
	},
	wrapper: {
		alignItems: "center"
	},
	gameDateWrapper: {
		alignItems: "center"
	},
	game: {
		fontFamily: "KlinicSlab-Medium",
		fontSize: 35,
		color: "#222222",
		letterSpacing: -1.14
	},
	date: {
		color: "#6E645F",
		fontSize: 16,
		letterSpacing: -0.57,
		fontWeight: "bold",
		marginTop: -10,
		marginBottom: 10
	},
	container: {
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "center"
	},
	versusContainer: {
		width: "100%"
	},
	versus: {
		fontFamily: "KlinicSlab-Medium",
		fontSize: 45,
		color: "#B73491",
		position: "absolute",
		top: 15
	},
	versusPadding: {
		paddingBottom: 40,
		margin: 0
	},
	line: {
		textAlign: "center",
		fontSize: 20,
		textDecorationLine: "line-through",
		textDecorationStyle: "solid",
		color: "#B73491"
	},
	gameSeparator: {
		width: "90%",
		borderBottomWidth: 3,
		borderBottomColor: "#BEBEBB",
	  marginVertical: 30
	},
	tieGame: {
		fontFamily: "KlinicSlab-Medium",
		fontSize: 28,
		color: "#399D60",
		letterSpacing: -1.14,
		width: "100%",
		textAlign: "center",
		marginTop: 10
	}
});
