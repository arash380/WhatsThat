import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";
import Text from "./Text";

const Level = ({ children, difficulty, numOfQuestions, onPress }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => onPress(difficulty, numOfQuestions)}
    >
      <View style={styles.container}>
        <LinearGradient
          colors={[colors.secondary, "lightblue"]}
          style={styles.backgroundColor}
        />
        <Text style={styles.text}>{children}</Text>
        <View style={styles.starsContainer}>
          <AntDesign
            name="star"
            size={20}
            style={styles.starIcon}
            // { color: colors.tertiary }
          />
          <AntDesign name="star" size={20} style={styles.starIcon} />
          <AntDesign name="star" size={20} style={styles.starIcon} />
        </View>
        {/* <Entypo name="lock" size={30} color={colors.tertiary} /> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    margin: 18,
  },
  backgroundColor: {
    position: "absolute",
    width: 50,
    height: 50,
    borderColor: colors.tertiary,
    borderWidth: 2,
  },
  starsContainer: {
    flexDirection: "row",
  },
  starIcon: {
    color: colors.dark,
  },
  text: {
    color: colors.white,
  },
});

export default Level;
