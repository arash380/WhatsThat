import axios from "axios";

export const getQuestions = async (category, numOfQuestions, difficulty) => {
  let url = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`;

  if (category === "N/A") {
    url = `https://opentdb.com/api.php?amount=${numOfQuestions}&difficulty=${difficulty}&type=multiple`;
  }

  return await axios.get(url);
};
