import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Styles from "./LgnStyles";
import { ErrorMessage, Field, Form, Formik } from "formik";
import TextField from "@mui/material/TextField";
import * as yup from "yup";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const FormValidation = yup.object().shape({
    email: yup.string().email("Inavalid Email ").required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(4, "Password should be of minimum 4 characters length")
      .required("Password is required"),
  });

  return (
    <View style={Styles.page}>
      <View style={Styles.container}>
        <View style={Styles.leftSection}>
          <Image
            style={Styles.image}
            source={require("../../../assets/cuh_logo.png")}
          />
          <Text> Central University of Haryana </Text>
          <Text> GEC Portal </Text>
        </View>
        <View style={Styles.middleSection}></View>
        <View style={Styles.rightSection}>
          <Formik
            initialValues={loginData}
            validationSchema={FormValidation}
            // onSubmit={(values) => HandelSubmit(values)}
          >
            <View style={Styles.form}>
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
                  as={TextField}
                  name="password"
                />
                <View style={{ color: "red", padding: "3px" }}>
                  <ErrorMessage name="password" />
                </View>
              </Form>
            </View>
          </Formik>

          <TouchableOpacity>
            <Text style={Styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.loginBtn}>
            <Text style={Styles.loginText}>LOGIN</Text>
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
