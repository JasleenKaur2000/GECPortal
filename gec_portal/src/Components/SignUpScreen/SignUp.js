import { Text, View, Image} from "react-native";
import React, { useState, useLayoutEffect } from "react";

//IMPORTING Local Components & Styles
import DeskTopStyles from "./DesktopView";
import MobViewStyle from "./MobView";
import TabletView from "./TabletView";
import MobRotateView from "./MobRotateView";
import GlobalStyle from "./SignUpStyle";
import FormUI from "./FormUI";


// IMPORTING Libraries
import "@expo/match-media";
import { useMediaQuery } from "react-responsive";


//Creating Component
const SignUp = () => {
  
  // This is used to Change the Style CSS Dynamicaly WhenEver Required
  const [responsiveStyle, setResponsiveStyle] = useState(DeskTopStyles);


  //Here we are Defining Some Screen size Ratio and Storing them into a variable
  const isSize_1200_above = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });
  const isSize_990_above = useMediaQuery({
    query: "(min-device-width:640px) and (max-device-width:1000px)",
  });
  const isSize_400_above = useMediaQuery({
    query: "(min-device-width:200px) and (max-device-width:639.9px)",
  });
  const isheight_450_below = useMediaQuery({
    query: "(min-device-width:650px) and (max-device-height:449.9px)",
  });

  // This fn have a property ,it's call everyTime when ever Screen Size changes
  // This is used to Change the Style of Page and make it responsive
  useLayoutEffect(() => {
    console.log("this is useEffect");

    if (isSize_400_above) {
      setResponsiveStyle(MobViewStyle);
    }
    if (isSize_990_above) {
      setResponsiveStyle(TabletView);
    }
    if (isSize_1200_above) {
      setResponsiveStyle(DeskTopStyles);
    }
    if (isheight_450_below) {
      setResponsiveStyle(MobRotateView);
    }
  });

  //Here the Actual Body part starts
  return (
    <View style={[responsiveStyle.page,GlobalStyle.page]}>
      <View style={[responsiveStyle.container,GlobalStyle.container]}>
        <View style={[responsiveStyle.leftSection,GlobalStyle.leftSection]}>
          <View style={[responsiveStyle.image,GlobalStyle.image]}>
            <Image
              style={{ width: "99%", height: "98%" }}
              source={require("../../../assets/cuh_logo.png")}
            />
          </View>

          <Text style={[responsiveStyle.CUH_txt,GlobalStyle.CUH_txt]}>
            Central University of Haryana
          </Text>

          <Text style={[responsiveStyle.GEC_txt,GlobalStyle.GEC_txt]}> GEC Portal </Text>
        </View>


        <View style={[responsiveStyle.middleSection,GlobalStyle.middleSection]}></View>

        <View style={[responsiveStyle.rightSection,GlobalStyle.rightSection]}>

          <FormUI responsiveStyle={responsiveStyle} GlobalStyle={GlobalStyle} />

        </View>
      </View>
    </View>
  );
};

export default SignUp;
