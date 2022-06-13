import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import TopMenu from "../components/TopMenu";

const CategoryPickerScreen = () => {
  return (
    <Screen style={styles.container}>
      <TopMenu />
      <Image
        style={{ height: 120, resizeMode: "contain" }}
        source={require("../assets/categoryIcons/any.png")}
      />
      <Image
        style={{ height: 120, resizeMode: "contain" }}
        source={require("../assets/categoryIcons/art.png")}
      />
      <Image
        style={{ height: 120, resizeMode: "contain" }}
        source={require("../assets/categoryIcons/board-games.png")}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryPickerScreen;
