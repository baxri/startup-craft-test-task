import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import ListSheet from "./ListSheet";

import Header from "./componets/Header";
import Selector from "./componets/Selector";
import ActionSheet from "./componets/ActionSheet";

const values = [
  {
    title: "Avaibilities",
  },
  {
    title: "Preferencies",
  },
];

const App = () => {
  const [isOpen, setIsOpen] = useState(0);
  const [selectedValue, setSelectedValue] = useState("Preferencies");

  const selectItem = (value) => {
    setSelectedValue(value);
    setIsOpen(0);
  };

  return (
    <View style={s.container}>
      <Header />

      <Selector
        value={selectedValue}
        onPress={() => {
          setIsOpen(isOpen ? 0 : 1);
        }}
      />
      <ListSheet value={selectedValue} />

      <ActionSheet isOpen={isOpen} onClose={() => setIsOpen(0)}>
        <View style={s.buttonContainer}>
          {values.map((item) => (
            <TouchableOpacity
              style={[s.button, item.title === selectedValue ? s.active : null]}
              key={item.title}
              onPress={() => {
                selectItem(item.title);
              }}
            >
              <Text
                style={[
                  s.text,
                  item.title === selectedValue ? s.activeText : null,
                ]}
              >
                {[item.title]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={s.button}
          onPress={() => {
            setIsOpen(false);
          }}
        >
          <Text style={s.text}>Cancel</Text>
        </TouchableOpacity>
      </ActionSheet>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  button: {
    borderRadius: 30,
    paddingVertical: 7,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  active: {
    backgroundColor: "orange",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "grey",
  },
  activeText: {
    color: "white",
  },
});

export default App;
