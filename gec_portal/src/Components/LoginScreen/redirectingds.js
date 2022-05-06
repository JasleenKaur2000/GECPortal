import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import firebase from "../config/firebase";
import "firebase/compat/auth";

const redirectingds = () => {
  const navigation = useNavigation();
  const auth = firebase.auth();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("/login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View>
      <Text>Admin</Text>
      <Text>Student</Text>
      <Text>Teacher</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default redirectingds;
