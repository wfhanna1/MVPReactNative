import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text, Item, Input, Form, Button } from "native-base";
import { withNavigation } from "react-navigation";
import ImagePicker from "react-native-image-picker";
import HeaderSm from "../components/HeaderSmall";
import BgImage from "../components/backgroundImage";
import ButtonPrimary from "../components/ButtonPrimary";
import useQuery from "../hooks/useQuery";
import addPlayerQuery from "../queries/addPlayer";

const defaultProfilePhoto = require("../assets/icons/Profile-Pic-Example.png");

const emailRegex = RegExp(/^.+\@.+\..+$/);

function AddNewPlayerScreen ({ navigation }) {
	const navigationContext = navigation.state.params || {
	};

	const previousScreen = navigationContext.screenHistory.screenHistory;
	const [name, setName] = useState(undefined);
	const [email, setEmail] = useState(undefined);
	const [profilePhoto, setProfilePhoto] = useState(undefined);
	const [nameError, setNameError] = useState(undefined);
	const [emailError, setEmailError] = useState(undefined);
	const [addPlayerObj, setPlayerObj] = useState(undefined);

	const [addPlayer, addPlayerLoading] = useQuery(addPlayerQuery(addPlayerObj));

	const formValid = () => {
		setNameError(name && name.trim().length > 0 ? false : "enter your name");
		setEmailError(email && emailRegex.test(email.trim()) ? false : "enter a valid email");
		return [nameError, emailError];
	};

	const onSubmit = () => {
		const errors = formValid();
		if (errors.filter((item) => !!item)) {
			setPlayerObj({
				fullName: name,
				emailAddress: email,
				profilePhoto
			});
			if (addPlayer) {
				return navigation.navigate("PlayerAdded", {
					...navigationContext,
					id: addPlayer.id,
					name,
					email,
					profilePhoto
				});
			}
		}

		return false;
	};

	const ErrorMessage = (props) => {
		const { errors } = props;
		const errorsText = errors.filter((item) => Boolean(item)).join(" and ");
		if (errorsText) {
			return (
				<View style={styles.errorMessages}>
					<Text>{`Please ${errorsText}.`}</Text>
				</View>
			);
		}
		return null;
	};

	const handleChoosePhoto = () => {
		const options = {
			noData: true
		};
		ImagePicker.launchImageLibrary(options, (response) => {
			if (response.uri) {
				setProfilePhoto(response.uri);
			}
		});
	};

	return (
		<BgImage>
			<HeaderSm style={styles.title} headerTitle="Add New Player" />
			<View style={styles.parent}>
				<Form>
					<View style={styles.container}>
						<Text style={styles.text}>Full Name</Text>
						<Item style={styles.item}>
							<Input
								style={nameError ? styles.error : styles.input}
								onChangeText={(nameVal) => setName(nameVal)}
								placeholder="Max Power"
								autoCapitalize="words"
								textContentType="name"
								autoCompleteType="name"
								returnKeyType="done"
							/>
						</Item>
					</View>
					<View style={styles.container}>
						<Text style={styles.text}>Email Address</Text>
						<Item style={styles.item}>
							<Input
								style={emailError ? styles.error : styles.input}
								onChangeText={(emailVal) => setEmail(emailVal)}
								placeholder="Max.Power@insight.com"
								autoCapitalize="none"
								textContentType="emailAddress"
								autoCompleteType="email"
								keyboardType="email-address"
								returnKeyType="done"
							/>
						</Item>
					</View>
					<View style={styles.photoContainer}>
						<Text style={styles.profText}>Profile Pic</Text>
						<Image
							style={styles.profile}
							source={profilePhoto ? {
								uri: profilePhoto
							} : defaultProfilePhoto}
						/>
						<Button transparent onPress={handleChoosePhoto}>
							<Text style={styles.profileButton}>Add/Update</Text>
						</Button>
					</View>
					<View style={styles.container}>
						<ErrorMessage errors={[nameError, emailError]} />
						<ButtonPrimary
							title="Add Player"
							onPress={onSubmit}
						/>
						<Button
							style={styles.cancelButton}
							transparent
							onPress={() => (previousScreen === "Players" ? navigation.navigate("Players") : navigation.navigate("RecordMatch"))}
						>
							<Text style={styles.cancelText}>Cancel</Text>
						</Button>
					</View>
				</Form>
			</View>
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
	photoContainer: {
		alignItems: "center",
		marginLeft: "-50%",
		marginTop: "10%",
		display: "none"
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
		marginTop: "-4%"
	},
	profile: {
		height: 80,
		width: 80,
		resizeMode: "cover"
	},
	profText: {
		fontFamily: "KlinicSlab-Book",
		fontSize: 26,
		color: "#222222",
		fontWeight: "500",
		letterSpacing: -0.63
	},
	profileButton: {
		color: "#4166AA"
	},
	text: {
		fontFamily: "KlinicSlab-Book",
		fontSize: 26,
		fontWeight: "500",
		marginTop: 30,
		alignSelf: "flex-start",
		marginLeft: "11%"
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
	},
	error: {
		borderWidth: 2,
		borderColor: "red",
		color: "red"
	},
	errorMessages: {
		backgroundColor: "rgba(256, 0, 0, 0.2)",
		padding: 10,
		marginBottom: 20
	}
});

export default withNavigation(AddNewPlayerScreen);
