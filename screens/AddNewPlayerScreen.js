import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text, Item, Input, Form, Button } from "native-base";
import { withNavigation } from "react-navigation";
import ImagePicker from "react-native-image-picker";
import HeaderSm from "../components/HeaderSmall";
import BgImage from "../components/backgroundImage";
import RecordMatchButton from "../components/RecordMatchButton";

const profileImage = require("../assets/icons/Profile-Pic-Example.png");

const emailRegex = RegExp(
  /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
);

function RecordMatchScreen ({ navigation }) {
  const formValid = () => {
    const name = navigation.getParam("name");
    const email = navigation.getParam("email");
    return (name ? name.trim().length > 0 : false) && (email ? emailRegex.test(email.trim()) : false);
  };

  const onSubmit = () => {
    const name = navigation.getParam("name");
    const email = navigation.getParam("email");

    if (formValid()) {
      navigation.navigate("PlayerAdded");
    }

    return navigation.setParams({
      nameError: name && name.trim().length > 0 ? false : "enter your name",
      emailError: email && emailRegex.test(email.trim()) ? false : "enter a valid email"
    });
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
        navigation.setParams({
          selectedProfileImage: response.uri
        });
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
                style={navigation.getParam("nameError") ? styles.error : styles.input}
                onChangeText={(nameVal) => navigation.setParams({
                  name: nameVal
                })}
                placeholder="Max Power"
              />
            </Item>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>Email Address</Text>
            <Item style={styles.item}>
              <Input
                style={navigation.getParam("emailError") ? styles.error : styles.input}
                onChangeText={(emailVal) => navigation.setParams({
                  email: emailVal
                })}
                placeholder="Max.Power@insight.com"
              />
            </Item>
          </View>
          <View style={styles.container2}>
            <Text style={styles.profText}>Profile Pic</Text>
            <Image
              style={styles.profile}
              source={navigation.getParam("selectedProfileImage") ? {
                uri: navigation.getParam("selectedProfileImage")
              } : profileImage}
            />
            {/* source={profileImage} /> */}
            <Button transparent onPress={handleChoosePhoto}>
              <Text style={styles.profileButton}>Add/Update</Text>
            </Button>
          </View>
          <View style={styles.container}>
            <ErrorMessage errors={[navigation.getParam("nameError"), navigation.getParam("emailError")]} />
            <RecordMatchButton
              title="Add Player"
              onPress={onSubmit}
            />
            <Button
              style={styles.cancelButton}
              transparent
              onPress={() => navigation.navigate("Players")}
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
  container2: {
    alignItems: "center",
    marginLeft: "-50%",
    marginTop: "10%"
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
    backgroundColor: "rgba(256,0,0,0.2)",
    padding: 10,
    marginBottom: 20
  }
});

export default withNavigation(RecordMatchScreen);
