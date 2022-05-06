import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import redirectingds from "./Components/LoginScreen/redirectingds";

import Login from "./Components/LoginScreen/Login";
import SignUp from "./Components/SignUpScreen/SignUp";
import TeacherDsBrd from "./Components/DashBoardScreen/TeacherDashBoardScreen/TeacherDsBrd";
import StudentDsBrd from "./Components/DashBoardScreen/StudentDashBoardScreen/StudentDsBrd";
import AdminDsBrd from "./Components/DashBoardScreen/AdminDashBoardScreen/AdminDsBrd";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="/login">
      <Stack.Screen name="/login" component={Login} />
      <Stack.Screen name="/signUp" component={SignUp} />
      <Stack.Screen name="/admin" component={AdminDsBrd} />
      <Stack.Screen name="/student" component={StudentDsBrd} />
      <Stack.Screen name="/teacher" component={TeacherDsBrd} />
      {/* extra */}
      <Stack.Screen name="redirect" component={redirectingds} />
    </Stack.Navigator>
  );
};

export default Routes;
