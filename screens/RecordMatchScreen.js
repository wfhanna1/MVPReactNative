import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView, Platform, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import Autocomplete from "react-native-autocomplete-input";
import RNPickerSelect from "react-native-picker-select";
import { Form, Button } from "native-base";

import useQuery from "../hooks/useQuery";
import gamesQuery from "../queries/games";
import findPlayersQuery from "../queries/findPlayers";

import Colors from "../colors";
import BlankScreen from "./BlankScreen";
import HeaderSm from "../components/HeaderSmall";
import BgImage from "../components/backgroundImage";
import GrayHeading from "../components/GrayHeading";
import AddNewPlayerButton from "../components/AddNewPlayerButton";
import PlayerSearchResult from "../components/PlayerSearchResult";
import ButtonPrimary from "../components/ButtonPrimary";
import PlayerMatched from "../components/PlayerMatched";
import ResponsiveSize from "../config/getScreenDimensions";

function RecordMatchScreen ({ navigation }) {
	const navigationContext = navigation.state.params || {
	};

	if (!navigationContext.hasOwnProperty("register")) {
		Object.defineProperty(navigationContext, "register", {
			value: {

			},
			writable: true
		});
	}

	const [games, gamesLoading] = useQuery(gamesQuery());
	const [findPlayers, findPlayersLoading] = useQuery(findPlayersQuery());

	const [query, setQuery] = useState("");
	const [gameSelected, setGameSelected] = useState(undefined);
	const [matchedPlayersArray, setMatchedPlayersArray] = useState([]);
	const [gameSelectError, setGameSelectError] = useState(undefined);
	const [playersError, setPlayersError] = useState(undefined);
	const [winnersError, setWinnersError] = useState(undefined);
	const formerMatchedPlayersArray = navigationContext.matchedPlayers;

	useEffect(() => {
		if (formerMatchedPlayersArray) {
			setMatchedPlayersArray(formerMatchedPlayersArray);
		}
	}, []);

	const formValid = () => {
		setGameSelectError(gameSelected ? false : "your game");
		setPlayersError(matchedPlayersArray && matchedPlayersArray.length > 1 ? false : "at least 2 players");
		setWinnersError(matchedPlayersArray && matchedPlayersArray.filter((player) => player.isWinner).length > 0 ? false : "at least 1 winner");
		return [gameSelectError, playersError, winnersError];
	};

	const onRecordMatch = () => {
		formValid();
		if (gameSelected && !gameSelectError && matchedPlayersArray && matchedPlayersArray.length > 1 && !playersError && matchedPlayersArray.filter((player) => player.isWinner).length > 0 && !winnersError) {
			navigation.navigate("MatchRecorded", {
				...navigationContext,
				recordMatch: {
					...navigationContext.recordMatch,
					players: matchedPlayersArray.map((item) => (
						{
							playerId: item.id,
							isWinner: item.isWinner
						}
					)),
					gameId: gameSelected
				}
			});
		}
	};

	const filterPlayers = () => {
		if (query === "") {
			return [];
		}
		const regex = new RegExp(`${query.trim()}`, "i");
		const playerResults = findPlayers.filter((player) => player.fullName.search(regex) >= 0);
		return playerResults;
	};

	const playersFound = filterPlayers(query);

	function onAddItem (player) {
		const addPlayer = {
			fullName: player.fullName,
			id: player.id,
			isWinner: false,
			profilePhoto: player.profilePhoto
		};
		if (!matchedPlayersArray.filter(({ id }) => id === player.id).length) {
			setMatchedPlayersArray([addPlayer, ...matchedPlayersArray]);
			setPlayersError(false);
		}
	}

	const setWinLossStatus = (playerWinLossStatus, winLoss) => {
		const playerIndex = matchedPlayersArray.findIndex((player) => player.id === playerWinLossStatus.id);
		const updatedPlayerList = matchedPlayersArray.map((player, index) => {
			let result = player;
			if (index === playerIndex) {
				result = {
					...player,
					isWinner: winLoss
				};
			}
			return result;
		});
		setMatchedPlayersArray(updatedPlayerList);
		setWinnersError(false);
	};

	const removePlayer = (removePlayerId) => {
		const updatedPlayerList = matchedPlayersArray.filter((player) => player.id !== removePlayerId);
		setMatchedPlayersArray(updatedPlayerList);
	};

	const ErrorMessage = (props) => {
		const { errors } = props;
		const errorsText = errors.filter((item) => Boolean(item)).join(" and ");
		if (errorsText) {
			return (
				<View style={styles.errorMessages}>
					<Text>{`Please select ${errorsText}.`}</Text>
				</View>
			);
		}
		return null;
	};

	if (!games || gamesLoading || findPlayersLoading) {
		return (
			<BlankScreen />
		);
	}

	if (Platform.OS === "ios") {
		return (
			<BgImage>
				<KeyboardAvoidingView
					style={{
						flex: 1, flexDirection: "column", justifyContent: "center"
					}}
					behavior="padding"
					enabled
					keyboardVerticalOffset={100}
				>
					<ScrollView keyboardShouldPersistTaps="always">
						<HeaderSm style={styles.title} headerTitle="Record Match" />
						<View style={styles.parent}>
							<Form>
								<View style={styles.container}>
									<Text style={styles.text}>Choose a game</Text>
									<View style={styles.input}>
										<View style={gameSelectError ? styles.error : null}>
											<RNPickerSelect
												style={gameSelectError ? {
													...pickerSelectStylesError
												} : {
													...pickerSelectStyles
												}}
												placeholder={{
													label: "Game name",
													value: null
												}}
												onValueChange={(value) => { setGameSelected(value); setGameSelectError(false); }}
												items={games.map((item) => (
													{
														label: item.name, value: item.id, key: item.id
													}
												))}
											/>
										</View>
									</View>
								</View>
								<View style={styles.container}>
									<Text style={styles.text}>Who played?</Text>
									<View style={playersError ? styles.playerError : styles.item}>
										<Autocomplete
											autoCorrect={false}
											listStyle={{
												paddngTop: 20,
												borderWidth: 0,
												marginLeft: -20
											}}
											inputContainerStyle={styles.autocompleteInput}
											data={playersFound}
											defaultValue={query}
											value={query}
											onChangeText={(text) => { setQuery(text); }}
											autoCapitalize="words"
											textContentType="name"
											autoCompleteType="name"
											returnKeyType="done"
											placeholder="Search by name or email"
											renderItem={({ item }) => (
												<PlayerSearchResult
													onPress={() => {
														onAddItem(item);
														setQuery("");
													}}
													item={item}
													key={item.id}
													id={item.id}
													name={item.fullName}
													profilePhoto={item.profilePhoto}
												/>
											)}
										/>
									</View>
								</View>
							</Form>
							<View style={styles.button}>
								<AddNewPlayerButton arrayData={matchedPlayersArray} />
							</View>
							<View style={styles.matchedContainer}>
								{matchedPlayersArray.length > 0 ? <GrayHeading title="Match Players" /> : null}
								{matchedPlayersArray.map((player) => <PlayerMatched player={player} setWinLossStatus={setWinLossStatus} removePlayer={removePlayer} key={player.playerId} />)}
								<ErrorMessage errors={[gameSelectError, playersError, winnersError]} />
								<ButtonPrimary
									title="Record Match"
									onPress={onRecordMatch}
								/>
								<Button
									style={styles.cancelButton}
									transparent
									onPress={() => navigation.goBack() && setMatchedPlayersArray([])}
								>
									<Text style={styles.cancelText}>Cancel</Text>
								</Button>
							</View>
						</View>
					</ScrollView>
				</KeyboardAvoidingView>
			</BgImage>
		);
	}

	return (
		<BgImage>
			<ScrollView keyboardShouldPersistTaps="always">
				<HeaderSm style={styles.title} headerTitle="Record Match" />
				<View style={styles.parent}>
					<Form>
						<View style={styles.container}>
							<Text style={styles.text}>Choose a game</Text>
							<View style={styles.input}>
								<View style={gameSelectError ? styles.error : null}>
									<RNPickerSelect
										style={gameSelectError ? {
											...pickerSelectStylesError
										} : {
											...pickerSelectStyles
										}}
										placeholder={{
											label: "Game name",
											value: null
										}}
										onValueChange={(value) => { setGameSelected(value); setGameSelectError(false); }}
										items={games.map((item) => (
											{
												label: item.name, value: item.id, key: item.id
											}
										))}
									/>
								</View>
							</View>
						</View>
						<View style={styles.container}>
							<Text style={styles.text}>Who played?</Text>
							<View style={playersError ? styles.playerError : styles.item}>
								<Autocomplete
									autoCorrect={false}
									listStyle={{
										borderWidth: 0,
										marginLeft: -20
									 }}
									inputContainerStyle={styles.autocompleteInput}
									data={playersFound}
									defaultValue={query}
									value={query}
									onChangeText={(text) => { setQuery(text); }}
									autoCapitalize="words"
									textContentType="name"
									autoCompleteType="name"
									returnKeyType="done"
									placeholder="Search by name or email"
									renderItem={({ item }) => (
										<PlayerSearchResult
											onPress={() => {
												onAddItem(item);
												setQuery("");
											}}
											item={item}
											key={item.id}
											id={item.id}
											name={item.fullName}
											profilePhoto={item.profilePhoto}
										/>
									)}
								/>
							</View>
						</View>
					</Form>
					<View style={styles.button}>
						<AddNewPlayerButton arrayData={matchedPlayersArray} />
					</View>
					<View style={styles.matchedContainer}>
						{matchedPlayersArray.length > 0 ? <GrayHeading title="Match Players" /> : null}
						{matchedPlayersArray.map((player) => <PlayerMatched player={player} setWinLossStatus={setWinLossStatus} removePlayer={removePlayer} key={player.playerId} />)}
						<ErrorMessage errors={[gameSelectError, playersError, winnersError]} />
						<ButtonPrimary
							title="Record Match"
							onPress={onRecordMatch}
						/>
						<Button
							style={styles.cancelButton}
							transparent
							onPress={() => navigation.goBack() && setMatchedPlayersArray([])}
						>
							<Text style={styles.cancelText}>Cancel</Text>
						</Button>
					</View>
				</View>
			</ScrollView>
		</BgImage>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		marginTop: "3%"
	},
	autocompleteInput: {
		borderWidth: 0,
		borderBottomColor: Colors.InsightFuschia,
		borderBottomWidth: 2
	},
	itemText: {
		fontFamily: "KlinicSlab-Medium",
		fontSize: 26,
		fontWeight: "500",
		letterSpacing: -0.63,
		paddingTop: 5
	},
	infoText: {
		textAlign: "center",
		fontSize: 16
	},
	parent: {
		marginTop: "-18%"
	},
	item: {
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
		fontFamily: "KlinicSlab-Medium",
		fontSize: 26,
		fontWeight: "500",
		marginTop: 30,
		alignSelf: "flex-start",
		marginLeft: "11%"
	},
	button: {
		zIndex: -1
	},
	cancelButton: {
		alignSelf: "center"
	},
	cancelText: {
		letterSpacing: -0.52,
		fontWeight: "300",
		color: Colors.LinkBlue,
		fontSize: ResponsiveSize(23.4),
		marginLeft: -17
	},
	matchedContainer: {
		zIndex: -1
	},
	error: {
		alignItems: "center",
		width: "78%",
		marginLeft: "11%",
		borderWidth: 2,
		borderColor: Colors.Red,
		marginTop: 12
	},
	playerError: {
		borderWidth: 2,
		borderColor: Colors.Red,
		borderBottomColor: Colors.InsightFuschia,
		borderBottomWidth: 2,
		width: "80%"
	},
	errorMessages: {
		backgroundColor: Colors.TransparentRed,
		padding: 10,
		marginBottom: 20
	}
});

const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		alignItems: "center",
		fontWeight: "300",
		paddingTop: 16,
		borderBottomWidth: 2,
		height: 50,
		width: "78%",
		paddingHorizontal: 10,
		marginTop: 12,
		marginLeft: "11%",
		borderBottomColor: Colors.InsightFuschia,
		color: Colors.Black
	},
	inputAndroid: {
		marginTop: 10,
		marginBottom: -20,
		marginLeft: 40,
	  width: "47%"
	}
});

const pickerSelectStylesError = StyleSheet.create({
	inputIOS: {
		alignItems: "center",
		fontWeight: "300",
		paddingTop: 16,
		paddingHorizontal: 8,
		borderBottomWidth: 2,
		height: 46,
		width: "100%",
		borderBottomColor: Colors.InsightFuschia,
		color: Colors.Black
	}
});

export default (withNavigation(RecordMatchScreen));
