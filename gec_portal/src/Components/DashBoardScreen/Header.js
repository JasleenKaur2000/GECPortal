import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

// IMPORTING Local Components and Styles
import ChangePassword from "./ChangePassword";
import Design from "./HeaderStyle";

// IMPORTING Libraries
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

// Actuall Component is Starting
const Header = (props) => {
  // This is used to store Navigation fn
  const navigation = useNavigation();

  // A Variable used to Store Default Account Icon Image
  const DefaultAccPic =
    "https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png";

  // A Variable used to Store User Image Dynamically
  const [image, setImage] = useState(DefaultAccPic);

  // A Variable used to store Display property of Profile container
  const [profile, setProfile] = useState("none");

  // A function used to Get User Image from User and Change the Profile Dynamically
  const pickImage = async () => {

    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // If User has been seleted an Image then Set it to Profile
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  // A function to Remove current Image and set a Default ICON image 
  const RemoveImage = () => {
    setImage(DefaultAccPic);
  };

  // A function used to Change Display Properties of Profile Container
  const ChangeDisplay = () => {
    if (profile == "none") {
      setProfile("flex");
    } else {
      setProfile("none");
    }
  };


// // This gives a property to select CSS Style Dynamicaly
// const [responsiveStyle, setResponsiveStyle] = useState(DeskTopStyles);


// // Here we are Defining some Screen Size Ratios
// const isSize_1200_above = useMediaQuery({
//   query: "(min-device-width: 1200px)",
// });
// const isSize_990_above = useMediaQuery({
//   query: "(min-device-width:640px) and (max-device-width:1000px)",
// });
// const isSize_400_above = useMediaQuery({
//   query: "(min-device-width:200px) and (max-device-width:639.9px)",
// });
// const isheight_450_below = useMediaQuery({
//   query: "(min-device-width:650px) and (max-device-height:449.9px)",
// });


// // This fn is used to Change Style and make page responsive
//   useLayoutEffect(() => {
//     console.log("this is useEffect");

//     if (isSize_400_above) {
//       setResponsiveStyle(MobViewStyle);
//     }
//     if (isSize_990_above) {
//       setResponsiveStyle(TabletView );
//     }
//     if (isSize_1200_above) {
//       setResponsiveStyle(DeskTopStyles);
//     }
//     if (isheight_450_below) {
//       setResponsiveStyle(MobRotateView);
//     }
//   });




  // Returning the Actuall Body Part
  return (
    <View >
      <View style={Design.head}>
        <View style={Design.dashboardSection}>
          <Text style={Design.dashboardName}> {props.DashboardType}</Text>
        </View>

        <View style={Design.rightSection}>
          <TouchableOpacity onPress={ChangeDisplay}>
            <View style={Design.iconSection}>
              <Image
                source={{
                  uri: `${image}`,
                }}
                style={{ width: "90%", height: "90%", borderRadius: 32 }}
              />
            </View>
          </TouchableOpacity>
          <Text style={Design.userName}> {props.UserName} </Text>
        </View>
      </View>

      <View style={[{ display: `${profile}` }, Design.menuSection]}>
        <View style={[Design.close]}>
          <TouchableOpacity onPress={ChangeDisplay}>
            <Icon name="close" style={[Design.closeIcon]} />
          </TouchableOpacity>
        </View>

        <View style={[Design.profileSection]}>
          <View style={[Design.UpperPrfSec]}>
            <Image
              source={{
                uri: `${image}`,
              }}
              style={[Design.ProfSecImage]}
            />
            <Text style={[Design.ProfSecUserName]}> {props.UserName} </Text>
          </View>
          <View style={[Design.LowerPrfSec]}>
            <TouchableOpacity onPress={pickImage}>
              <Text style={[Design.btnPrfSec]}> Change Image</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={RemoveImage}>
              <Text style={[Design.btnPrfSec]}> Remove Image</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ChangePassword />

        <View style={[Design.Menufield]}>
          <TouchableOpacity onPress={() => navigation.navigate("/login")}>
            <Text style={[Design.MenufieldText]}> Log Out </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
