import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import Text from "./Text";

const Star = () => {
  return (
    <View>
      <LinearGradient
        colors={[colors.secondary, "lightblue"]}
        style={styles.background}
      />
      <View style={styles.container}>
        <Image source={require("../assets/star.png")} style={styles.starIcon} />
        <Text style={styles.starsText}>0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    width: 110,
    height: 35,
    borderRadius: 15,
    borderColor: colors.tertiary,
    borderWidth: 2,
  },
  container: {
    width: 110,
    height: 35,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  starsText: {
    lineHeight: 40,
    color: colors.white,
    fontSize: 24,
    fontWeight: "bold",
    // left: -22,
  },
  starIcon: {
    width: 44,
    height: 44,
    left: -12,
  },
});

export default Star;
