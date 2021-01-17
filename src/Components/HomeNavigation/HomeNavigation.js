import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import Home from "../../Screens/Home";
import Header from "../Header";

const HomeNavigation = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={{
      header: ({ scene, previous, navigation }) => (
        <Header
          scene={scene}
          previous={previous}
          navigation={navigation}
          // toggleTheme={toggleTheme}
        />
      ),
    }}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerTitle: "Home" }}
    />
  </Stack.Navigator>
);
export default HomeNavigation;
