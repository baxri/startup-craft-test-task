import React from "react";
import { StyleSheet, View } from "react-native";

import ListSheet from "./ListSheet";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const App = () => {
  return (
    <View style={styles.container}>
      <ListSheet />
    </View>
  );
};

export default App;
