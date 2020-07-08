import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <SafeAreaView style={s.container}>
      <Text style={s.title}>AVAILABILITIES</Text>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
