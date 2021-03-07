import React from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <Image
        style={styles.backgroundImage}
        source={require("../assets/background.png")}
      />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: Dimensions.get("screen").height,
    position: "absolute",
  },
});

export default Screen;
