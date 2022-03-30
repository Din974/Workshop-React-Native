import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { View, Text } from "react-native";

export  default function App() {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
    }}
    >
      <Text>Hello, world!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
