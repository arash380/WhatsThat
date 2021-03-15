import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Text from "./Text";
import colors from "../config/colors";

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
      <View style={styles.container}>
        <Ionicons
          name="chevron-back-sharp"
          size={40}
          color={colors.white}
          style={styles.icon}
        />
        <Ionicons
          name="chevron-back-sharp"
          size={40}
          color={colors.white}
          style={styles.icon}
        />
        <Text style={styles.text}>BACK</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    top: 10,
  },
  text: {
    fontWeight: "bold",
    color: colors.dark,
    fontSize: 30,
    marginHorizontal: 10,
  },
  icon: {
    margin: -13,
  },
});

export default BackButton;
