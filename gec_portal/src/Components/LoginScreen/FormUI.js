import React ,{useState}from 'react';
import { Text, View, TouchableOpacity } from "react-native";

// IMPORTING Libraries
import { ErrorMessage, Field, Formik } from "formik";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import "firebase/compat/auth";
import { auth } from "../config/firebase";
import { useNavigation } from "@react-navigation/native";

const FormUI = (props) => {

    const responsiveStyle=props.responsiveStyle;
    const GlobalStyle= props.GlobalStyle;
   

  //This is used to store Navigation fn
  const navigation =useNavigation();

//This is used to store Entered Data in form
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });


//Here we are Form Validation to validate user Entered Data
const FormValidation = yup.object().shape({
    email: yup.string().email("Inavalid Email ").required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(4, "Password should be of minimum 4 characters length")
      .required("Password is required"),
  });


  return (
      <View>
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
  )
}

export default FormUI;