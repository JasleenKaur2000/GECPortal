import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Screens() {
  return (
    <View style={styles.container}>
      <Text>Sign Ups and Logins Here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
