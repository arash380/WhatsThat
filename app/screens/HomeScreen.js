import React from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import colors from "../config/colors";

const HomeScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <TouchableWithoutFeedback onPress={() => console.log("pressed")}>
        <View style={styles.playButtonContainer}>
          <Ionicons
            name="play-sharp"
            size={110}
            color="white"
            style={styles.playIcon}
          />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.bottomContainer}>
        <MaterialIcons name="leaderboard" size={50} color="darkslategray" />
        <Feather name="settings" size={50} color="darkslategray" />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    bottom: 10,
    position: "absolute",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    top: -40,
    height: 370,
    resizeMode: "contain",
  },
  playButtonContainer: {
    backgroundColor: colors.tertiary,
    top: -20,
    height: 150,
    width: 150,
    borderRadius: 750,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  playIcon: {
    left: 9,
  },
});

export default HomeScreen;
