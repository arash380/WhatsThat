import axios from "axios";

export const getQuestions = async (category, numOfQuestions, difficulty) => {
  if (category === "N/A") {
    const URL = `https://opentdb.com/api.php?amount=${numOfQuestions}&difficulty=${difficulty}&type=multiple`;
  } else {
    const URL = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`;
  }

  return await axios.get(URL);
};
