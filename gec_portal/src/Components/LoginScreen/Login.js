import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useLayoutEffect } from "react";

// IMPORTING Local Components And Styles
import DeskTopStyles from "./DesktopView";
import MobViewStyle from "./MobView";
import TabletView from "./TabletView";
import MobRotateView from "./MobRotateView";
import GlobalStyle from "./LoginStyle";

// IMPORTING Libraries
import { ErrorMessage, Field, Formik } from "formik";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import "firebase/compat/auth";
import { auth } from "../config/firebase";
import "@expo/match-media";
import { useMediaQuery } from "react-responsive";
import { useNavigation } from "@react-navigation/native";

const Login = () => {

 //This is used to store Navigation fn
  const navigation =useNavigation();

//This is used to store Entered Data in form
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

// This gives a property to select CSS Style Dynamicaly
  const [responsiveStyle, setResponsiveStyle] = useState(DeskTopStyles);

//Here we are Form Validation to validate user Entered Data
  const FormValidation = yup.object().shape({
    email: yup.string().email("Inavalid Email ").required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(4, "Password should be of minimum 4 characters length")
      .required("Password is required"),
  });

// Here we are Defining some Screen Size Ratios
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

// This fn is used to Change Style and make page responsive
  useLayoutEffect(() => {
    console.log("this is useEffect");

    if (isSize_400_above) {
      setResponsiveStyle(MobViewStyle);
    }
    if (isSize_990_above) {
      setResponsiveStyle(TabletView );
    }
    if (isSize_1200_above) {
      setResponsiveStyle(DeskTopStyles);
    }
    if (isheight_450_below) {
      setResponsiveStyle(MobRotateView);
    }
  });

// Here the Actuall Body part starts
  return (
    <View style={[responsiveStyle.page ,GlobalStyle.page]}>
      <View style={[responsiveStyle.container,GlobalStyle.container]}>
        <View style={[responsiveStyle.leftSection,GlobalStyle.leftSection]}>
          <View style={[responsiveStyle.image,GlobalStyle.image]} >
          <Image
            style={{width:"99%",height:"98%"}}
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
            initialValues={loginData}
            validationSchema={FormValidation}
            onSubmit={(values) => {
              const { email, password } = values;
              auth
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                  navigation.replace("/admin");
                })
                .catch((error) => alert(error.message));
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <>
                <View style={[responsiveStyle.form,GlobalStyle.form]}>
                   <View style={[responsiveStyle.lgn,GlobalStyle.lgn]} >
                  <Text style={[responsiveStyle.lgn_txt,GlobalStyle.lgn_txt]} > Login</Text>
                  </View>

                  <Field
                    label=" Email "
                    variant="standard"
                    placeholder="xyz@emailcom"
                    required
                    type="text"
                    as={TextField}
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <View style={{ color: "red", padding:3 }}>
                    <ErrorMessage name="email" />
                  </View>
                  <Field
                    label=" Password "
                    variant="standard"
                    placeholder=" ####### "
                    required
                    type="text"
                    value={values.password}
                    as={TextField}
                    name="password"
                    onBlur={handleBlur("password")}
                    onChange={handleChange}
                    sx={{marginTop:"10px"}}
                  />
                  <View style={{ color: "red", padding:3 }}>
                    <ErrorMessage name="password" />
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
                    Don't have an Account ? 
                    <TouchableOpacity onPress={()=>navigation.navigate("/signUp")} >
                      <Text>  Create New ..</Text>
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

export default Login;
