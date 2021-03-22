import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import MainNavigation from "./app/navigation/MainNavigation";
import loadAssetsAsync from "./utils/loadAssetsAsync";

const App = () => {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return <MainNavigation />;
};

export default App;
