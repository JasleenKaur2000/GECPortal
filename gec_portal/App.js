import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

//import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import TopBarNavigator from "./App/TopBarNavigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <TopBarNavigator />
    </SafeAreaProvider>
  );
}
