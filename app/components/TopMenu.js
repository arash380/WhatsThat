import React from "react";
import { View, StyleSheet } from "react-native";
import Currency from "../components/Currency";
import Star from "../components/Star";

const TopMenu = () => {
  return (
    <View style={styles.container}>
      <Star />
      <Currency />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default TopMenu;
