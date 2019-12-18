import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { withNavigation } from "react-navigation";
import { Text, Item, Input, Icon, Form, Button } from "native-base";
import RNPickerSelect from "react-native-picker-select";
import useQuery from "../hooks/useQuery";
import gamesQuery from "../queries/games";
import findPlayersQuery from "../queries/findPlayers";
import LoadingScreen from "./LoadingScreen";
import HeaderSm from "../components/HeaderSmall";
import GrayHeading from "../components/GrayHeading";
import BgImage from "../components/backgroundImage";
import AddNewPlayerButton from "../components/AddNewPlayerButton";
import ButtonPrimary from "../components/ButtonPrimary";
import PlayerMatched from "../components/PlayerMatched";

function RecordMatchScreen ({ navigation }) {
	const [games, gamesLoading] = useQuery(gamesQuery());
	const [findPlayers, findPlayersLoading] = useQuery(findPlayersQuery());
	const [toggleMatchedPlayers, setToggleMatchedPlayers] = useState(false);
	const [selected, setSelected] = useState(undefined);

	if (!games || gamesLoading) {
		return (
			<LoadingScreen />
		);
	}

	return (
		<BgImage>
			<ScrollView>
				<HeaderSm style={styles.title} headerTitle="Record Match" />
				<View style={styles.parent}>
					<Form>
						<View style={styles.container}>
							<Text style={styles.text}>Choose a game</Text>
							<View style={styles.input}>
								<RNPickerSelect
									style={{
										...pickerSelectStyles
									}}
									placeholder={{
										label: "Foosball",
										value: null
									}}
									onValueChange={(value) => setSelected(value)}
									items={games.map((item) => (
										{
											label: item.name, value: item.name, key: item.id
										}
									))}
								/>
							</View>
						</View>
						<View style={styles.container}>
							<Text style={styles.text}>Who played?</Text>
							<Item style={styles.item}>
								<Input style={styles.input} placeholder="Search by name or email" />
								<Icon active style={styles.icon} type="FontAwesome" name="plus-circle" onPress={() => setToggleMatchedPlayers(!toggleMatchedPlayers)} />
							</Item>
						</View>
					</Form>
				</View>
				<View style={styles.button}>
					<AddNewPlayerButton />
				</View>
				<View>
					{toggleMatchedPlayers ? (
						<View>
							<GrayHeading title="Match Players" />
							<ButtonPrimary title="Record Match" onPress={() => navigation.navigate("MatchRecorded")} />
							<Button
								style={styles.cancelButton}
								transparent
								onPress={() => setToggleMatchedPlayers(!toggleMatchedPlayers)}
							>
								<Text style={styles.cancelText}>Cancel</Text>
							</Button>
						</View>
					)
						: null}
				</View>
			</ScrollView>
		</BgImage>
	);
}

const styles = StyleSheet.create({
	parent: {
		marginTop: "-10%"
	},
	container: {
		alignItems: "center",
		marginTop: "3%"
	},
	item: {
		borderBottomColor: "#B73491",
		borderBottomWidth: 2,
		width: "80%"
	},
	input: {
		fontWeight: "300",
		marginBottom: -10,
		marginLeft: "-1%",
		marginTop: "-4%",
		width: "100%"
	},
	text: {
		fontFamily: "KlinicSlab-Book",
		fontSize: 26,
		fontWeight: "500",
		marginTop: 30,
		alignSelf: "flex-start",
		marginLeft: "11%"
	},
	icon: {
		color: "#4166AA",
		fontSize: 15
	},
	button: {
		marginTop: "1%",
		marginBottom: "6%",
		marginLeft: "8%",
		alignSelf: "center"
	},
	cancelButton: {
		alignSelf: "center"
	},
	cancelText: {
		letterSpacing: -0.52,
		fontWeight: "300",
		color: "#4166AA",
		fontSize: 16,
		marginLeft: -17
	}
});

const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		alignItems: "center",
		fontSize: 16,
		fontWeight: "300",
		paddingTop: 16,
		borderBottomWidth: 2,
		height: 50,
		width: "80%",
		paddingHorizontal: 10,
		marginTop: 12,
		marginLeft: "12%",
		borderBottomColor: "#B73491",
		color: "black"
	}
});

export default (withNavigation(RecordMatchScreen));
