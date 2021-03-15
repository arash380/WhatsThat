import React from "react";
import { View, StyleSheet } from "react-native";

const BottomMenu = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    padding: 20,
    bottom: 10,
  },
});

export default BottomMenu;
