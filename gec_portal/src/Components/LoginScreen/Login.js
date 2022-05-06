import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";

import React, { useState, useLayoutEffect } from "react";
import DeskTopStyles from "./LgnStyles";
import MobViewStyle from "./MobViewStyle";

import { ErrorMessage, Field, Form, Formik } from "formik";
import TextField from "@mui/material/TextField";
import * as yup from "yup";

import "@expo/match-media";
import { useMediaQuery } from "react-responsive";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [activeBtn, setActiveBtn] = useState(true);

  let name, value;
  const handleChange = (e) => {
    // console.log(loginData);
    name = e.target.name;
    value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
    if (loginData.email == "" && loginData.password == "") {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  };

  const submitHandel = () => {
    console.log(loginData);
  };

  const [responsiveStyle, setResponsiveStyle] = useState(DeskTopStyles);

  const FormValidation = yup.object().shape({
    email: yup.string().email("Inavalid Email ").required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(4, "Password should be of minimum 4 characters length")
      .required("Password is required"),
  });

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
          <Text> Central University of Haryana </Text>
          <Text> GEC Portal </Text>
        </View>
        <View style={responsiveStyle.middleSection}></View>
        <View style={responsiveStyle.rightSection}>
          <Formik initialValues={loginData} validationSchema={FormValidation}>
            <View style={responsiveStyle.form}>
              <Text> Login..</Text>

              <Form>
                <Field
                  label=" Email "
                  variant="standard"
                  placeholder="xyz@emailcom"
                  required
                  type="text"
                  as={TextField}
                  name="email"
                  value={loginData.email}
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
                  value={loginData.password}
                  as={TextField}
                  name="password"
                  onChange={handleChange}
                />
                <View style={{ color: "red", padding: "3px" }}>
                  <ErrorMessage name="password" />
                </View>
              </Form>
            </View>
          </Formik>

          <TouchableOpacity>
            <Text style={responsiveStyle.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={responsiveStyle.loginBtn}
            onPress={submitHandel}
            disabled={activeBtn}
          >
            <Text style={responsiveStyle.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <Text>
            Don't have an Account ?{" "}
            <TouchableOpacity>
              <Text>Create New ..</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
