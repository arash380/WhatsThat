import React from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import TopMenu from "../components/TopMenu";
import BottomMenu from "../components/BottomMenu";

const HomeScreen = ({ navigation }) => {
  return (
    <Screen style={styles.container}>
      <TopMenu />
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate(routes.LEVELS)}
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
      <BottomMenu>
        <MaterialIcons name="leaderboard" size={50} color="darkslategray" />
        <Feather name="settings" size={50} color="darkslategray" />
      </BottomMenu>
    </Screen>
  );
};

const styles = StyleSheet.create({
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
});

export default HomeScreen;
