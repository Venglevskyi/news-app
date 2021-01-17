import React from "react";
import { Portal, Modal, Text, Button } from "react-native-paper";

const containerStyle = {
  backgroundColor: "white",
  padding: 10,
  height: 300,
  marginLeft: 10,
  marginRight: 10,
};

const ModalView = ({ visible, hideModal }) => (
  <Portal>
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={containerStyle}
    >
      <Text style={{ textAlign: "center", color: "black" }}>
        Ooops...your login is not valid
      </Text>
      <Button onPress={hideModal}>Close</Button>
    </Modal>
  </Portal>
);

export default ModalView;
