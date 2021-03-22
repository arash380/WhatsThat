import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import Text from "./Text";

// TODO:  display infinite when the coins exceeeds a specific amount that causes the container to grow
const Currency = () => {
  return (
    <View>
      <LinearGradient
        colors={[colors.secondary, "lightblue"]}
        style={styles.background}
      />
      <View style={styles.container}>
        <Image source={require("../assets/coin.png")} style={styles.coinIcon} />
        <Text style={styles.money}>453</Text>
        <Image
          source={require("../assets/plus-button.png")}
          style={styles.plusIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    width: 150,
    height: 35,
    right: -5,
    borderRadius: 15,
    borderColor: colors.tertiary,
    borderWidth: 2,
  },
  container: {
    width: 150,
    height: 35,
    right: -5,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  money: {
    lineHeight: 40,
    color: colors.white,
    fontSize: 24,
    fontWeight: "bold",
    left: -22,
  },
  coinIcon: {
    width: 40,
    height: 40,
    left: -16,
  },
  plusIcon: {
    width: 40,
    height: 40,
    left: 3,
  },
});

export default Currency;
