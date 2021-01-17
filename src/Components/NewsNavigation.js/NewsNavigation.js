import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import News from "../../Screens/News";
import Header from "../Header";

const NewsNavigation = () => (
  <Stack.Navigator
    headerMode="screen"
    screenOptions={{
      header: ({ scene, previous, navigation }) => (
        <Header
          scene={scene}
          previous={previous}
          navigation={navigation}
          //   toggleTheme={toggleTheme}
        />
      ),
    }}
  >
    <Stack.Screen
      name="News"
      component={News}
      options={{ headerTitle: "News" }}
    />
  </Stack.Navigator>
);
export default NewsNavigation;
