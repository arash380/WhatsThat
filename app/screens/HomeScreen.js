import React from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Currency from "../components/Currency";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import Star from "../components/Star";

const HomeScreen = ({ navigation }) => {
  return (
    <Screen style={styles.container}>
      <View style={styles.topContainer}>
        <Star />
        <Currency />
      </View>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate(routes.GAME)}
      >
        <View style={styles.playButtonContainer}>
          <Ionicons
            name="play-sharp"
            size={130}
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
    height: 380,
    top: -25,
    resizeMode: "contain",
  },
  playButtonContainer: {
    backgroundColor: colors.tertiary,
    height: 170,
    width: 170,
    borderRadius: 750,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  playIcon: {
    left: 11,
  },
  topContainer: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HomeScreen;
