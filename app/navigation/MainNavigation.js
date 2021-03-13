import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import GameScreen from "../screens/GameScreen";
import routes from "./routes";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, animationEnabled: false }}
  >
    <Stack.Screen name={routes.HOME} component={HomeScreen} />
    <Stack.Screen name={routes.GAME} component={GameScreen} />
  </Stack.Navigator>
);

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default MainNavigation;
