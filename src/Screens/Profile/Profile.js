import React, { useCallback } from "react";
import { View, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

const Profile = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      navigation.openDrawer();

      return () => {
        navigation.closeDrawer();
      };
    }, [])
  );
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
