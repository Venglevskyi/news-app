import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../../Screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerContent = () => {
  const userName = useSelector((state) => state.auth);
  const { name } = userName;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{`Hello ${name}`}</Text>
    </View>
  );
};

const ProfileNavigation = () => (
  <Drawer.Navigator drawerContent={() => <DrawerContent />}>
    <Drawer.Screen name="Profile" component={Profile} />
  </Drawer.Navigator>
);

export default ProfileNavigation;
