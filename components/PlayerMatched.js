import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "native-base";
import PlayerImage from "./PlayerImage";

export default function PlayerMatched ({ player, setWinLossStatus, removePlayer }) {
	return (
		<View>
			<View style={styles.playerComponent}>
				<View style={styles.picture}>
					<PlayerImage fullName={player.fullName} />
				</View>
				<View style={styles.stats}>
					<Text style={styles.name}>{player.fullName}</Text>
					<Button
						transparent
						onPress={() => {
							removePlayer(player.id);
						}}
					>
						<Text style={styles.buttonText}>Remove</Text>

					</Button>
				</View>
				<Button
					transparent
					onPress={() => {
						setWinLossStatus(player, true);
					}}
				>
					<Text style={player.isWinner ? styles.winnerSelected : styles.unselected}>W</Text>

				</Button>
				<Button
					transparent
					onPress={() => {
						setWinLossStatus(player, false);
					}}
				>
					<Text style={!player.isWinner ? styles.loserSelected : styles.unselected}>L</Text>

				</Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	playerComponent: {
		marginTop: "2%",
		width: "100%",
		alignSelf: "center",
		flexDirection: "row",
		justifyContent: "space-around"
	},
	picture: {
		flex: 1,
		marginTop: "-2%",
		marginLeft: "7%"
	},
	stats: {
		flex: 1,
		alignItems: "flex-start"
	},
	name: {
		fontFamily: "KlinicSlab-Book",
		fontSize: 26,
		fontWeight: "500",
		letterSpacing: -0.63,
		marginBottom: -7
	},
	points: {
		fontSize: 16,
		color: "#399D60",
		letterSpacing: -0.7,
		marginBottom: -5
	},
	buttonText: {
		letterSpacing: -0.52,
		fontWeight: "300",
		color: "#4166AA",
		fontSize: 16,
		marginLeft: -17,
		alignSelf: "flex-start"
	},
	winnerSelected: {
		color: "#399D60",
		fontSize: 25,
		fontWeight: "bold"
	},
	loserSelected: {
		color: "#B73491",
		fontSize: 25,
		fontWeight: "bold"
	},
	unselected: {
		color: "#6E645F",
		fontSize: 25,
		fontWeight: "300"
	}
});
