import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

const testData = [
  {
    id: 1,
    day: "Sunday",
    avaibility: "10:00 AM - 06:00 PM",
  },
  {
    id: 2,
    day: "Monday",
    avaibility: "10:00 AM - 06:00 PM",
  },
  {
    id: 3,
    day: "Tuesday",
    avaibility: "10:00 AM - 06:00 PM",
  },
  {
    id: 4,
    day: "Wednesday",
    avaibility: "10:00 AM - 06:00 PM",
  },
  {
    id: 5,
    day: "Thursday",
    avaibility: "10:00 AM - 06:00 PM",
  },
  {
    id: 6,
    day: "Friday",
    avaibility: "10:00 AM - 06:00 PM",
  },
  {
    id: 7,
    day: "Sunday",
    avaibility: "10:00 AM - 06:00 PM",
  },
  {
    id: 8,
    day: "Sunday",
    avaibility: "10:00 AM - 06:00 PM",
  },
  {
    id: 9,
    day: "Sunday",
    avaibility: "10:00 AM - 06:00 PM",
  },
  {
    id: 10,
    day: "Sunday",
    avaibility: "10:00 AM - 06:00 PM",
  },
  {
    id: 11,
    day: "Sunday",
    avaibility: "10:00 AM - 06:00 PM",
  },
  {
    id: 12,
    day: "Sunday",
    avaibility: "10:00 AM - 06:00 PM",
  },
  {
    id: 13,
    day: "Sunday",
    avaibility: "10:00 AM - 06:00 PM",
  },
];

const ListSheet = ({ value }) => {
  return (
    <FlatList
      data={testData}
      renderItem={({ item }) => (
        <View style={[s.container, item.id % 2 !== 0 ? s.background : null]}>
          <View>
            <Text style={s.id}>
              {item.id < 10 ? 0 : ""}
              {item.id}
            </Text>
            <Text style={s.title}>{item.day}</Text>
          </View>
          {value === "Avaibilities" && <Text>{item.avaibility}</Text>}
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  background: {
    backgroundColor: "#e8e8e8",
  },
  id: {
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    color: "grey",
  },
});

export default ListSheet;
