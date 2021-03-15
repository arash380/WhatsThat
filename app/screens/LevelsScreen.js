import React, { useState } from "react";
import { StyleSheet, FlatList, Modal } from "react-native";
import BackButton from "../components/BackButton";
import BottomMenu from "../components/BottomMenu";
import Level from "../components/Level";
import levelsConfig from "../config/levelsConfig";
import Screen from "../components/Screen";
import TopMenu from "../components/TopMenu";
import Text from "../components/Text";

const LevelsScreen = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [difficulty, setDifficulty] = useState("");
  const [numOfQuestions, setNumOfQuestions] = useState(0);

  const openModal = (levelDifficulty, levelQuestionNumbers) => {
    // const getQuestions_1 = async () => {
    //   const result = await getQuestions(10, 4, "easy");
    //   console.log(result.data.results);
    // };

    setDifficulty(levelDifficulty);
    setNumOfQuestions(levelQuestionNumbers);

    setModalOpen(true);
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
            openModal={openModal}
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
      <Modal visible={modalOpen} animationType="fade">
        <Text>{difficulty}</Text>
        <Text>{numOfQuestions}</Text>
      </Modal>
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
