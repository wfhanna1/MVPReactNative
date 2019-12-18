import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import { Text, Button } from "native-base";

const playerImage = require("../assets/icons/Default-user.png");

export default function PlayerMatched ({ name, onClickWinner, onClickLoser }) {
  const [winColor, setWinColor] = useState(false);
  const [loseColor, setLoseColor] = useState(false);

  return (
    <View>
      <View style={styles.playerComponent}>
        <Image style={styles.picture} source={playerImage} />
        <View style={styles.stats}>
          <Text style={styles.name}>{name}</Text>
          <Button transparent><Text style={styles.buttonText}>Remove</Text></Button>
        </View>
        <Button
          transparent
          onPress={() => {
            setWinColor(!winColor);
            onClickWinner();
          }}
        >
          <Text style={winColor ? styles.winnerSelected : styles.unselected}>W</Text>

        </Button>
        <Button
          transparent
          onPress={() => {
            setLoseColor(!loseColor);
            onClickLoser();
          }}
        >
          <Text style={loseColor ? styles.loserSelected : styles.unselected}>L</Text>

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
    height: 75,
    resizeMode: "contain",
    marginTop: "-2%"
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
