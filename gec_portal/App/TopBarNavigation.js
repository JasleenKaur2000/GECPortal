import * as React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Screens from "./Screens";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Student Login"
      tabBarOptions={{
        activeTintColor: "#e91e63",
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: "white", marginTop: insets.top },
      }}
    >
      <Tab.Screen
        name="Student Login"
        component={Screens}
        options={{ tabBarLabel: "Student Login" }}
      />
      <Tab.Screen
        name="Teacher Login"
        component={Screens}
        options={{ tabBarLabel: "Teacher Login" }}
      />
      <Tab.Screen
        name="Department Head Login"
        component={Screens}
        options={{ tabBarLabel: "HOD Login" }}
      />
    </Tab.Navigator>
  );
}

export default function TopBarNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
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
