import { Text, View, Image, TouchableOpacity } from "react-native";

import React, { useState, useLayoutEffect } from "react";
import DeskTopStyles from "./LgnStyles";
import MobViewStyle from "./MobViewStyle";

import { ErrorMessage, Field, Formik } from "formik";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { auth } from "../config/firebase";

import "@expo/match-media";
import { useMediaQuery } from "react-responsive";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [responsiveStyle, setResponsiveStyle] = useState(DeskTopStyles);

  const FormValidation = yup.object().shape({
    email: yup.string().email("Inavalid Email ").required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(4, "Password should be of minimum 4 characters length")
      .required("Password is required"),
  });

  const navigation=useNavigation();

  const isSize_1200_above = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });
  const isSize_900_above = useMediaQuery({
    query: "(min-device-width:900px) and (max-device-width:1199px)",
  });
  const isSize_650_above = useMediaQuery({
    query: "(min-device-width:650px) and (max-device-height:899.9px)",
  });
  const isSize_400_above = useMediaQuery({
    query: "(min-device-width:400px) and (max-device-width:649.9px)",
  });

  useLayoutEffect(() => {
    console.log("this is useEffect");

    if (isSize_900_above) {
      setResponsiveStyle(MobViewStyle);
    }
    if (isSize_1200_above) {
      setResponsiveStyle(DeskTopStyles);
    }
  });

  return (
    <View style={responsiveStyle.page}>
      <View style={responsiveStyle.container}>
        <View style={responsiveStyle.leftSection}>
          <Image
            style={responsiveStyle.image}
            source={require("../../../assets/cuh_logo.png")}
          />
          <Text style={responsiveStyle.CUH_txt}>
          
            Central University of Haryana
          </Text>
          <Text style={responsiveStyle.GEC_txt}> GEC Portal </Text>
        </View>

          <Formik
            initialValues={loginData}
            validationSchema={FormValidation}
            onSubmit={(values) => {
              const{email,password}=values
              auth.signInWithEmailAndPassword(email, password)
                .then(() => {
                  navigation.replace("/admin")
                })
                .catch((error) => alert(error.message));
            }}
          >


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
                  <View style={{ color: "red", padding: "3px" }}>
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
                  />
                  <View style={{ color: "red", padding: "3px" }}>
                    <ErrorMessage name="password" />
                  </View>
                  <View style={responsiveStyle.frgtBox}>
                    <TouchableOpacity>
                      <Text style={responsiveStyle.forgot_button}>
                        Forgot Password?
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={responsiveStyle.btnBox}>
                    <TouchableOpacity
                      style={responsiveStyle.loginBtn}
                      onPress={handleSubmit}
                    >
                      <Text style={responsiveStyle.loginText}>LOGIN</Text>
                    </TouchableOpacity>
                  </View>


        </Formik>
      </View>
    </View>
  );
};

export default Login;
