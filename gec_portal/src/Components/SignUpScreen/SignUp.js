import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import React, { useState, useLayoutEffect } from "react";

//IMPORTING Local Components & Styles
import Departments from "./Departments.json";
import DeskTopStyles from "./DesktopView";
import MobViewStyle from "./MobView";
import TabletView from "./TabletView";
import MobRotateView from "./MobRotateView";
import GlobalStyle from "./SignUpStyle";


// IMPORTING Libraries
import { ErrorMessage, Field, Formik } from "formik";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import "firebase/compat/auth";
import { auth } from "../config/firebase";
import "@expo/match-media";
import { useMediaQuery } from "react-responsive";
import { useNavigation } from "@react-navigation/native";

//Creating Component
const SignUp = () => {
  //This is used to store the Navigation fn into a variable
  const navigation = useNavigation();

  console.log(Departments);
  //This is used to Store all the Entered Data through Form
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    department: "",
    user: "",
    password: "",
  });

  // This is used to Change the Style CSS Dynamicaly WhenEver Required
  const [responsiveStyle, setResponsiveStyle] = useState(DeskTopStyles);

  //Here we are making a Validation to check/validate the user input
  const FormValidation = yup.object().shape({
    name: yup
      .string()
      .required("Name is required ")
      .min(3, "InCorrect")
      .max(15, "InCorrect"),

    department: yup.string()
      .required("Please Select any One "),

    user: yup.string()
      .required("Please Select any One "),

    email: yup.string()
      .email("Inavalid Email ")
      .required("Email is required"),

    password: yup
      .string("Enter your password")
      .min(4, "Password should be of minimum 4 characters length")
      .required("Password is required"),

    confirmPassword: yup
      .string()
      .required("Confirm your password")
      .oneOf([yup.ref("password")], "Password does not match"),

  });

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
          <Formik
            initialValues={signupData}
            validationSchema={FormValidation}
            onSubmit={(values) => {
              const { email, password, name, department, user } = values;
              auth
                .signUpUser(email, password, name, department, user)
                .then(() => {
                  navigation.replace("/admin");
                })
                .catch((error) => alert(error.message));
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <>
                <View style={[responsiveStyle.form,GlobalStyle.form]}>
                  <View style={[responsiveStyle.lgn,GlobalStyle.lgn]}>
                    <Text style={[responsiveStyle.lgn_txt,GlobalStyle.lgn_txt]}> Sign Up </Text>
                  </View>

                  <Field
                    label=" Name "
                    variant="standard"
                    placeholder="Jhon "
                    required
                    type="text"
                    as={TextField}
                    name="name"
                    onChange={handleChange}
                  />
                  <View style={{ color: "red", padding: 3 }}>
                    <ErrorMessage name="name" />
                  </View>

                  <Field
                    label=" Email "
                    variant="standard"
                    placeholder="xyz@emailcom"
                    required
                    type="email"
                    as={TextField}
                    name="email"
                    onChange={handleChange}
                  />
                  <View style={{ color: "red", padding: 3 }}>
                    <ErrorMessage name="email" />
                  </View>

                  <Field
                    label=" Department "
                    variant="standard"
                    placeholder="Select Deparment"
                    required
                    as={TextField}
                    name="department"
                    onChange={handleChange}
                  
                  />
                  <View style={{ color: "red", padding: 3 }}>
                    <ErrorMessage name="department" />
                  </View>

                  <Field
                    label=" User Type "
                    variant="standard"
                    placeholder=" Select your role "
                    required
                    type="text"
                    as={TextField}
                    name="user"
                    onChange={handleChange}
                  />
                  <View style={{ color: "red", padding: 3 }}>
                    <ErrorMessage name="user" />
                  </View>

                  <Field
                    label=" Password "
                    variant="standard"
                    placeholder=" ####### "
                    required
                    type="password"
                    as={TextField}
                    name="password"
                    onBlur={handleBlur("password")}
                    onChange={handleChange}
                    sx={{ marginTop: "10px" }}
                  />
                  <View style={{ color: "red", padding: 3 }}>
                    <ErrorMessage name="password" />
                  </View>

                  <Field
                    label=" Confirm Password "
                    variant="standard"
                    placeholder=" Re-Type Password "
                    required
                    type="password"
                    as={TextField}
                    name="confirmPassword"
                    onChange={handleChange}
                    sx={{ marginTop: "10px" }}
                  />
                  <View style={{ color: "red", padding: 3 }}>
                    <ErrorMessage name="confirmPassword" />
                  </View>

                  <View style={[responsiveStyle.frgtBox,GlobalStyle.frgtBox]}>
                    <TouchableOpacity>
                      <Text style={[responsiveStyle.forgot_button,GlobalStyle.forgot_button]}>
                        Forgot Password?
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={[responsiveStyle.btnBox,GlobalStyle.btnBox]}>
                    <TouchableOpacity
                      style={[responsiveStyle.loginBtn,GlobalStyle.loginBtn]}
                      onPress={handleSubmit}
                    >
                      <Text style={[responsiveStyle.loginText,GlobalStyle.loginText]}>SUBMIT</Text>
                    </TouchableOpacity>
                  </View>

                  <Text style={[responsiveStyle.havAcnt,GlobalStyle.havAcnt]}>
                    Have an Account ?
                    <TouchableOpacity
                      onPress={() => navigation.navigate("/login")}
                    >
                      <Text> Login </Text>
                    </TouchableOpacity>
                  </Text>
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
