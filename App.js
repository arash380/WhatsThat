import React from "react";
import { Image, StyleSheet } from "react-native";

import Screen from "./app/components/Screen";

const App = () => {
  return (
    <Screen style={{ flex: 1 }}>
      <Image
        source={{
          uri:
            "https://images.unsplash.com/photo-1527515234283-d93c5f8486a0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8&w=1000&q=80",
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default App;
