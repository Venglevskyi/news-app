import * as React from "react";
import { Appbar } from "react-native-paper";

// import Toogle from "../Switch";

const Header = ({ scene, previous, navigation, toggleTheme }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header>
      {previous && <Appbar.BackAction onPress={navigation.goBack} />}
      <Appbar.Content title={title} />
      {/* <Toogle onToggleTheme={toggleTheme} /> */}
    </Appbar.Header>
  );
};

export default Header;
