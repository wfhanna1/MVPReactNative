import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  Item, Input, Icon, Form, Button
} from 'native-base';
import Autocomplete from 'react-native-autocomplete-input';
import RNPickerSelect from 'react-native-picker-select';
import useQuery from '../hooks/useQuery';
import gamesQuery from '../queries/games';
import findPlayersQuery from '../queries/findPlayers';
import recordMatchQuery from '../queries/recordMatch';
import LoadingScreen from './LoadingScreen';
import HeaderSm from '../components/HeaderSmall';
import GrayHeading from '../components/GrayHeading';
import BgImage from '../components/backgroundImage';
import AddNewPlayerButton from '../components/AddNewPlayerButton';
import RecordMatchButton from '../components/RecordMatchButton';
import PlayerMatched from '../components/PlayerMatched';


function RecordMatchScreen ({ navigation }) {

  const [games, gamesLoading] = useQuery(gamesQuery());
  const [findPlayers, findPlayersLoading] = useQuery(findPlayersQuery()); //<--- this executes successfully on load & returns player names & IDs of all players.  This API does not return player's score information.
  const [recordMatch, recordMatchLoading] = useQuery(recordMatchQuery(null));

  const [query, setQuery] = useState('');
  const [playerSelected, setPlayerSelected] = useState(query);

  const [gameSelected, setGameSelected] = useState(undefined);
  const [toggleMatchedPlayers, setToggleMatchedPlayers] = useState(false);
  const [matchedPlayersArray, setMatchedPlayersArray] = useState([]);


  if (!games || gamesLoading || findPlayersLoading) {
    return (
      <LoadingScreen />
    );
  }

  const filterPlayers = () => {
    if (query === "") {
      return [];
    }
    const regex = new RegExp(`${query.trim()}`, "i");
    const playerResults = findPlayers.filter((player) => player.fullName.search(regex) >= 0);
    return playerResults;
  };

  const playersFound = filterPlayers(query);

  const onAddItem = async () => {
    const list = matchedPlayersArray.concat(<PlayerMatched name={playerSelected} />);
    setMatchedPlayersArray(list);
    return list;
  };

  return (
    <BgImage>
      <ScrollView keyboardShouldPersistTaps="always">
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
                  onValueChange={(value) => setGameSelected(value)}
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
              <View style={styles.item}>
                <Icon active style={styles.icon} type="FontAwesome" name="plus-circle" onPress={() => setToggleMatchedPlayers(!toggleMatchedPlayers)} />
                <Autocomplete
                  autoCapitalize="none"
                  autoCorrect={false}
                  inputContainerStyle={styles.autocompleteInput}
                  listContainerStyle={styles.autocompleteList}
                  data={playersFound}
                  defaultValue={query}
                  value={query}
                  onChangeText={(text) => setQuery(text)}
                  placeholder="Search by name or email"
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                      onAddItem();
                      setQuery("");
                      setPlayerSelected(item.fullName);
                    }}
                    >
                      <Text style={styles.itemText}>
                        {item.fullName}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </Form>
          <View style={styles.button}>
            <AddNewPlayerButton />
          </View>
          <View style={styles.matchedContainer}>
            <GrayHeading title="Match Players" />
            {matchedPlayersArray}
            <RecordMatchButton title="Record Match" onPress={() => navigation.navigate("MatchRecorded")} />
            <Button
              style={styles.cancelButton}
              transparent
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
    borderWidth: 0
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: "center"
  },
  itemText: {
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 2
  },
  infoText: {
    textAlign: "center",
    fontSize: 16
  },
  parent: {
    marginTop: "-10%"
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
    fontFamily: 'KlinicSlab-Book',
    fontSize: 26,
    fontWeight: '500',
    marginTop: 30,
    alignSelf: 'flex-start',
    marginLeft: '11%'
  },
  icon: {
    color: '#4166AA',
    fontSize: 15,
    position: 'absolute',
    marginTop: 15,
    marginLeft: '95%',
    zIndex: 10
  },
  button: {
    marginLeft: '6%',
    marginBottom: '2%',
    zIndex: -1
  },
  cancelButton: {
    alignSelf: 'center'
  },
  cancelText: {
    letterSpacing: -0.52,
    fontWeight: '300',
    color: '#4166AA',
    fontSize: 16,
    marginLeft: -17,
  },
  matchedContainer: {
    zIndex: -1
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    alignItems: 'center',
    fontSize: 16,
    fontWeight: '300',
    paddingTop: 16,
    borderBottomWidth: 2,
    height: 50,
    width: '78%',
    paddingHorizontal: 10,
    marginTop: 12,
    marginLeft: '11%',
    borderBottomColor: '#B73491',
    color: 'black',
  },
});

export default (withNavigation(RecordMatchScreen));
