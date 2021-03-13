import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet, Platform, View } from "react-native";
import Constants from "expo-constants";

const Screen = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        colors={["#FF1B1B", "#FF858A"]}
        style={styles.backgroundColor}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + (Platform.OS === "ios" ? 20 : 0),
    flex: 1,
  },
  backgroundColor: {
    width: "100%",
    height: Dimensions.get("screen").height,
    position: "absolute",
  },
});

export default Screen;
