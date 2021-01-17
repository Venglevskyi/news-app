import React, { useState } from "react";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import "react-native-gesture-handler";
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import merge from "deepmerge";

import ProfileNavigation from "../ProfileNavigation";
import HomeNavigation from "../HomeNavigation";
import NewsNavigation from "../NewsNavigation.js";

const Tab = createMaterialBottomTabNavigator();
const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const BottomTabs = ({ route }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

  //   const toggleTheme = () => {
  //     setIsDarkTheme(!isDarkTheme);
  //   };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          shifting={true}
          sceneAnimationEnabled={false}
          labeled={true}
        >
          <Tab.Screen
            name="Home"
            component={HomeNavigation}
            options={{
              tabBarIcon: "home",
            }}
          />
          <Tab.Screen
            name="News"
            component={NewsNavigation}
            options={{
              tabBarIcon: "newspaper",
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileNavigation}
            options={{
              tabBarIcon: "account",
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default BottomTabs;
