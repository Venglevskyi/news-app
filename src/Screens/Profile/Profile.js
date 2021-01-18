import React, { useCallback } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
  const token = useSelector((state) => state.auth.token);
  useFocusEffect(
    useCallback(() => {
      if (token) {
        navigation.openDrawer();
        const storeData = async () => {
          try {
            await AsyncStorage.setItem("token", "token!!!");
          } catch (e) {
            console.log(e);
          }
        };
        storeData();
      } else {
        navigation.navigate("Home");
      }

      return () => {
        navigation.closeDrawer();
      };
    }, [token])
  );
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
