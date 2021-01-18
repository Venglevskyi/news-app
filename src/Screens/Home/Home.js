import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { View, ScrollView } from "react-native";
import { TextInput, Button, Surface } from "react-native-paper";
import { useFormik } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "./style";
import { formSchema } from "./formSchema";
import ModalView from "../../Components/Modal";
import { authUser } from "../../redux/authActions";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("token");
        dispatch(authUser({ token: value }));
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    onSubmit: ({ name, password }, actions) => {
      formSchema.isValid({ name, password }).then((valid) => {
        if (valid) {
          setToken(true);
          dispatch(authUser({ name, password, token }));
          navigation.navigate("Profile");
        } else {
          dispatch(authUser({ name, password, token }));
          showModal();
        }
      });
    },
  });
  const { values, handleChange, handleBlur, handleSubmit } = formik;

  return (
    <View style={styles.container}>
      {visible && <ModalView visible={visible} hideModal={hideModal} />}
      <Surface style={styles.surface}>
        <ScrollView>
          <TextInput
            mode="outlined"
            label="Name"
            autoCapitalize="none"
            value={values.name}
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
          />
          <TextInput
            mode="outlined"
            label="Password"
            autoCapitalize="none"
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
          />
          <Button
            icon="arrow-right-circle-outline"
            mode="contained"
            onPress={handleSubmit}
            style={styles.btnNext}
          >
            Login
          </Button>
        </ScrollView>
      </Surface>
    </View>
  );
};

export default Home;
