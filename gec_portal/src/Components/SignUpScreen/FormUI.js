import React ,{useState} from 'react'
import { Text, View, TouchableOpacity } from "react-native";

import Departments from "./Departments.json";


// IMPORTING Libraries
import { ErrorMessage, Field, Formik } from "formik";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import "firebase/compat/auth";
import { auth } from "../config/firebase";
import "@expo/match-media";
import { useNavigation } from "@react-navigation/native";


const FormUI = (props) => {

    const responsiveStyle=props.responsiveStyle;
    const GlobalStyle= props.GlobalStyle;
   
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

  return (
    <View>
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
  )
}

export default FormUI;