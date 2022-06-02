import React from "react";
import { View } from "react-native";

// IMPORTING Local Components and Styles
import Header from "../Header";
import DashBoardMessage from "../DashBoardMessage";
import BodyPart from "./BodyPart";

// IMPORTING Libraries

// Actuall Components Start's here
const StudentDsBrd = () => {
  // Returning the Actuall Body Part
  return (
    <View>
      <Header DashboardType={"Student DashBoard"} UserName={"Deepak"} />
      <DashBoardMessage
        DsBrdMessage={" Select your Intrested GEC  Subject  "}
      />
      <BodyPart />
    </View>
  );
};

export default StudentDsBrd;
