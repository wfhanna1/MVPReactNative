import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import HeaderLg from "../components/HeaderLarge";
import ColorHeading from "../components/ColorHeading";
import AddNewPlayerButton from "../components/AddNewPlayerButton";
import BgImage from "../components/backgroundImage";
import PlayerRecentGames from "../components/PlayerRecentGames";
import useQuery from "../hooks/useQuery";
import recentMatchesQuery from "../queries/recentMatches";
import BlankScreen from "./BlankScreen";

export default function RecentGames () {
	const [recentMatches, recentMatchesLoading] = useQuery(recentMatchesQuery());

	if (!recentMatches || recentMatchesLoading) {
		return (
			<BlankScreen />
		);
	}

	return (
		<BgImage>
			<ScrollView>
				<HeaderLg />
				<View style={styles.buttonContainer}>
				  <AddNewPlayerButton screenHistory="Players" />
				</View>
				<ColorHeading title="Recent Games" style={styles.header} />
				{recentMatches.map((recentMatch) => (
					<View style={styles.wrapper} key={recentMatch.matchId}>
						<View>
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
							<Text style={styles.versusContainer}>
								<Text style={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
								<Text style={styles.versus}>vs</Text>
								<Text style={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
							</Text>
							{recentMatch.players.filter(({ isWinner }) => !isWinner).map((player) => (
								<PlayerRecentGames fullName={player.fullName} key={player.playerId} id={player.playerId} isWinner={player.isWinner} />
							))}
						</View>
					</View>
				))}
			</ScrollView>
		</BgImage>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		height: 18,
		marginTop: -15,
		alignItems: "center"
	},
	wrapper: {
		alignItems: "center",
		marginBottom: 20
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
		marginBottom: 8
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
		marginHorizontal: 50
	},
	line: {
		textAlign: "center",
		fontSize: 20,
		textDecorationLine: "line-through",
		textDecorationStyle: "solid",
		color: "#B73491"
	}
});
