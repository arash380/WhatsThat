import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CategoryPickerScreen from "../screens/CategoryPickerScreen";
import HomeScreen from "../screens/HomeScreen";
import GameScreen from "../screens/GameScreen";
import LevelsScreen from "../screens/LevelsScreen";
import routes from "./routes";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, animationEnabled: false }}
  >
    <Stack.Screen name={routes.HOME} component={HomeScreen} />
    <Stack.Screen name={routes.GAME} component={GameScreen} />
    <Stack.Screen name={routes.LEVELS} component={LevelsScreen} />
    <Stack.Screen
      name={routes.CATEGORY_PICKER}
      component={CategoryPickerScreen}
    />
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
