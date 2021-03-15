import React, { useEffect } from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
// import { getQuestions } from "../axios/questionAxios";

// const getQuestions_1 = async () => {
//   const result = await getQuestions(10, 4, "easy");
//   console.log(result.data.results);
// };

const GameScreen = ({ navigation, route }) => {
  const { difficulty, numOfQuestions } = route.params;

  // preventing android users to exit the game screen with the back button
  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });
  }, [navigation]);

  return <Screen style={styles.container}></Screen>;
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  testImage: {
    height: 100,
    resizeMode: "contain",
  },
});

export default GameScreen;
