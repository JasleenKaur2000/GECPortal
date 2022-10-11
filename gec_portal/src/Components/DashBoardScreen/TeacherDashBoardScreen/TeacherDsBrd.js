import React from "react";
import { View } from "react-native";

// IMPORTING Local Components and Styles
import Header from "../Header";
import DashBoardMessage from "../DashBoardMessage";
import BodyPart from "./BodyPart";

// IMPORTING Libraries

const TeacherDsBrd = () => {
  return (
    <View>
      <Header DashboardType={"Teacher DashBoard"} UserName={"Deepak"} />
      <DashBoardMessage DsBrdMessage={" Offer a GEC Subject to Students "} />
      <BodyPart />
    </View>
  );
};

export default TeacherDsBrd;
