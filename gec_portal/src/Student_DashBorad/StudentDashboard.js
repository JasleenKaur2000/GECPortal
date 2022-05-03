import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../config/firebase";
import { TouchableOpacity } from "react-native-web";

const TeacherDashboard = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login Page");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View>
      <Text>Email:{auth.currentUser.email}</Text>
      <Text>User Id:{auth.currentUser.uid}</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TeacherDashboard;
