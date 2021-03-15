import React from "react";
import { StyleSheet, FlatList } from "react-native";
import BackButton from "../components/BackButton";
import BottomMenu from "../components/BottomMenu";
import Level from "../components/Level";
import levelsConfig from "../config/levelsConfig";
import Screen from "../components/Screen";
import TopMenu from "../components/TopMenu";
import routes from "../navigation/routes";

const LevelsScreen = ({ navigation }) => {
  const openGame = (difficulty, numOfQuestions) => {
    navigation.navigate(routes.GAME, {
      difficulty: difficulty,
      numOfQuestions: numOfQuestions,
    });
  };

  return (
    <Screen style={styles.container}>
      <TopMenu />
      <FlatList
        data={levelsConfig}
        renderItem={({ item }) => (
          <Level
            difficulty={item.difficulty}
            numOfQuestions={item.numOfQuestions}
            openGame={openGame}
          >
            {item.title}
          </Level>
        )}
        numColumns="4"
        keyExtractor={(level) => level.title}
        style={styles.levels}
      />
      <BottomMenu>
        <BackButton />
      </BottomMenu>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  levels: {
    marginTop: 30,
    flexGrow: 0,
    height: "80%",
  },
});

export default LevelsScreen;
