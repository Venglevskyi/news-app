import React from "react";
import BottomTabs from "./src/Components/BottomTabs";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
    <BottomTabs />
  </Provider>
);

export default App;
