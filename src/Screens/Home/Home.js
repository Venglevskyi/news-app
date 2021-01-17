import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View, ScrollView } from "react-native";
import { TextInput, Button, Surface } from "react-native-paper";
import { useFormik } from "formik";

import { styles } from "./style";
import { formSchema } from "./formSchema";
import ModalView from "../../Components/Modal";
import { authUser } from "../../redux/authActions";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    onSubmit: ({ name, password }, actions) => {
      dispatch(authUser({ name, password }));
      formSchema.isValid({ name, password }).then((valid) => {
        if (valid) {
          navigation.navigate("Profile");
        } else {
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
