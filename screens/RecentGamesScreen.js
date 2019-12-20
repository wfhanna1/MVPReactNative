import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import HeaderLg from "../components/HeaderLarge";
import ColorHeading from "../components/ColorHeading";
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
				<HeaderLg headerTitle="Office MVP" />
				<ColorHeading title="Recent Games" />

				{recentMatches.map((recentmatch) => (
					<View style={styles.wrapper}>
						<View style={styles.wrapper}>
							<Text style={styles.game}>{recentmatch.match.game.name}</Text>
							<Text style={styles.date}>
								{new Intl.DateTimeFormat("en-GB", {
									year: "numeric",
									month: "short",
									day: "2-digit",
									weekday: "short"
								}).format(new Date(recentmatch.match.date))}
							</Text>
						</View>
						<View style={styles.container}>
							{/* {recentMatches.players.map((player) => (
								<PlayerRecentGames fullName={player.fullName} id={player.id} />
							))} */}
							<PlayerRecentGames fullName={recentmatch.player.fullName} id={recentmatch.player.id} />
							<PlayerRecentGames fullName={recentmatch.player.fullName} id={recentmatch.player.id} />
							<Text style={styles.versus}>-------vs-------</Text>
							<PlayerRecentGames fullName={recentmatch.player.fullName} id={recentmatch.player.id} />
							<PlayerRecentGames fullName={recentmatch.player.fullName} id={recentmatch.player.id} />
						</View>
						{/* <View style={styles.wrapper}>
							<Text style={styles.game}>Mario Kart</Text>
							<Text style={styles.date}>Fri, Oct 04 2019</Text>
						</View>
						<View style={styles.container}>
							<PlayerRecentGames />
							<Text style={styles.versus}>vs</Text>
							<PlayerRecentGames />
						</View> */}
					</View>
				))}
			</ScrollView>
		</BgImage>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		alignItems: "center",
		marginTop: 8
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
	versus: {
		fontFamily: "KlinicSlab-Medium",
		fontSize: 45,
		color: "#B73491",
		marginHorizontal: 50
	}
});
