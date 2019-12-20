import React from "react";
import { StyleSheet, View, ScrollView, Text, ImageBackground } from "react-native";
import { withNavigation } from "react-navigation";
import useQuery from "../hooks/useQuery";
import recordMatchQuery from "../queries/recordMatch";
import LoadingScreen from "./LoadingScreen";
import ColorHeading from "../components/ColorHeading";
import BgImage from "../components/backgroundImage";
import ButtonPrimary from "../components/ButtonPrimary";

const headerImageLg = require("../assets/icons/Header-Background-Large2x.png");

function RecordMatchScreen ({ navigation }) {
	const navigationContext = navigation.state.params || {
	};
	const [recordMatch, recordMatchLoading, recordMatchError] = useQuery(recordMatchQuery(navigationContext.recordMatch));

	if (recordMatchLoading) {
		return (
			<LoadingScreen />
		);
	}

	return (
		<BgImage>
			<ImageBackground
				source={headerImageLg}
				style={{
					width: "100%", height: 225
				}}
			>
				<ScrollView>
					<View style={styles.container}>
				  <Text style={styles.title}>Office MVP</Text>
					</View>
				</ScrollView>
			</ImageBackground>
			<View style={styles.headingContainer}>
				<ColorHeading title="Match Recorded!" />
			</View>
			<ButtonPrimary
				title="Back to Home"
				onPress={() => navigation.push("Players")}
			/>
		</BgImage>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: "30%"
	},
	headingContainer: {
		marginTop: 23,
		marginBottom: 12
	},
	title: {
		fontFamily: "KlinicSlab-Book",
		fontWeight: "400",
		letterSpacing: -2.4,
		fontSize: 75,
		color: "#FFFFFF",
		marginTop: "-20%"
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
