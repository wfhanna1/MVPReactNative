import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { withNavigation } from "react-navigation";
import Autocomplete from "react-native-autocomplete-input";
import CodePush from "react-native-code-push";

import useQuery from "../hooks/useQuery";
import findPlayersQuery from "../queries/findPlayers";

import HeaderLg from "../components/HeaderLarge";
import AddNewPlayerButton from "../components/AddNewPlayerButton";
import PlayerSearchResult from "../components/PlayerSearchResult";

function SearchScreen () {
	const [findPlayers] = useQuery(findPlayersQuery());
	const [query, setQuery] = useState("");

	const updatePlayers = (playerUpdated) => {
		const updateIndex = findPlayers.findIndex((player) => player.id === playerUpdated.id);
		if (updateIndex >= 0) {
			findPlayers[updateIndex] = {
				...findPlayers[updateIndex], ...playerUpdated
			};
			setQuery(query);
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

	CodePush.sync({
		updateDialog: true,
		installMode: CodePush.InstallMode.IMMEDIATE
	});

	return (
		<View>
		 <StatusBar barStyle="light-content" translucent />
			<HeaderLg />
			<View style={styles.buttonContainer}>
				<AddNewPlayerButton />
			</View>
			<View style={{
				marginTop: 40,
				marginHorizontal: 10
			}}
			>
				<Autocomplete
					autoCorrect={false}
					inputContainerStyle={styles.autocompleteInput}
					listStyle={{
						paddingTop: 20
					}}
					data={filterPlayers(query)}
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
							key={item.id}
							id={item.id}
							name={item.fullName}
							profilePhoto={item.profilePhoto}
							updatePlayers={updatePlayers}
						/>
					)}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		height: 18,
		marginTop: -15,
		alignItems: "center"
	}
});

export default withNavigation(SearchScreen);
