import React ,{useState}from 'react';
import {View,Text,TouchableOpacity} from "react-native";

// Importing Local Components and Styles
import Design from "./HeaderStyle";

//Importing Libraries
import { ErrorMessage, Field, Formik} from "formik";
import TextField from "@mui/material/TextField";
import * as yup from "yup";


const ChangePassword = () => {

  // A variable used to store display property to Show/Hide Change Password container
  const [chPassword, setChPassword] = useState("none");

  // A variable used to store display property to Show/Hide Password Acknowledgment container
  const [successMessage, setSuccessMessage]= useState("none");

  // A variable used to store User Entered Data
  const [userPassword, setUserPassword]=useState({
      password:"",
      confirmPassword:"",
  });

  // A function used to change the Display property of Change Password Container
  const DisplayChPassword = () => {
    if (chPassword == "none") {
      setChPassword("flex");
    } else {
      setChPassword("none");
    }
  };

  // A function used to change the Display property of Password Acknowledgment Container
  const ShowMessage=()=>{
    if (successMessage == "none") {
        setSuccessMessage("flex");
        setChPassword("none");
      } else {
        setSuccessMessage("none");
      }
  }

  // A function used to Check FormValidation
  const FormValidation=yup.object().shape({
    password: yup
    .string("Enter your password")
    .min(4, "minimum 4 characters")
    .required("Password is required"),

    confirmPassword: yup
    .string()
    .required("Confirm your password")
    .oneOf([yup.ref("password")], "Password does not match"),

   });

   // Returning the Actuall Body Part 
  return (
    <View style={[Design.passwordField]}>

        <View >
          <TouchableOpacity onPress={DisplayChPassword}>
            <Text style={[Design.MenufieldText]} > Change Password </Text>
          </TouchableOpacity>
        </View>


        <View style={[Design.passSection, {display:`${chPassword}`}]}>

            <Formik
            initialValues={userPassword}
            validationSchema={FormValidation}
            onSubmit={(values)=>{
                console.log(values);
                ShowMessage();
            }}
            >
               {({ handleChange, handleBlur, handleSubmit, values }) => (
                 <>
                   <Field
                     as={TextField}
                     variant="standard"
                     label="New Password"
                     placeholder="Enter New Password "
                     onChange={handleChange}
                    
                     required
                     name="password"
                     type="password"
                  
                   />
                    <View style={{ color: "red", padding: 3 }}>
                     <ErrorMessage name="password" />
                   </View>

                   <Field
                     as={TextField}
                     lable="Confirm Password "
                     variant="standard"
                     placeholder="Re-Type Password"
                     required
                     type="text"
                     name="confirmPassword"
                     onChange={handleChange}

                   />
                    <View style={{ color: "red", padding: 3 }}>
                     <ErrorMessage name="confirmPassword" />
                   </View>  
                     
                     <View style={[Design.BtnSection]}>
                   <TouchableOpacity onPress={handleSubmit}>
                     <Text style={[Design.saveBtn]}>Save</Text>
                   </TouchableOpacity>
                   </View>
                 </>
               )}
            </Formik>
        </View>
        
        <View style={[{display:`${successMessage}`},Design.MessageBox]}>
            <Text style={[Design.MessageText]}> Successfully Password Changed </Text>
        </View>
    </View>
  )
}

export default ChangePassword;