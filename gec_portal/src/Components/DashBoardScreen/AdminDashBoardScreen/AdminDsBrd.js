import React, { useState } from "react";
import { View } from "react-native";

// IMPORTING Local Components and Styles
import Header from "../Header";
import BodyPart from "./BodyPart";
import GlobalStyle from "./AdminDsStyle";
import DashBoardMessage from "../DashBoardMessage";

// IMPORTING Libraries

const AdminDsBrd = () => {
  const [responsiveStyle, setResponsiveStyle] = useState("");

  return (
    <View style={{ backgroundColor: "witesmoke" }}>
      <Header DashboardType={"Admin DashBoard"} UserName={"Deepak"} />
      <DashBoardMessage
        DsBrdMessage={" Register Students and Teacheres for GEC  "}
      />
      <BodyPart GlobalStyle={GlobalStyle} responsiveStyle={responsiveStyle} />
    </View>
  );
};

export default AdminDsBrd;
