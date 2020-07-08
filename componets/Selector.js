import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Selector({ value, onPress }) {
  return (
    <TouchableOpacity style={s.container} onPress={onPress}>
      <Text>{value}</Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 6,
    flexDirection: "row",
    margin: 16,
    padding: 10,
  },
});
