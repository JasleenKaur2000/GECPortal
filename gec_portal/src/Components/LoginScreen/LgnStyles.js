import React from "react";

import { StyleSheet } from "react-native";

const Styles= StyleSheet.create({
    page: {
        width:"100%",
        height:"auto",
        minHeight:"100%",
        backgroundColor: "#E6F4ED",
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
      },
      container:{
        display:"flex",
        flexDirection:"row",
      },
      leftSection:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      },
      image: {
        height: "35rem",
        width: "35rem",
      },
      middleSection:{
        borderColor: "#FEFEFE",
        borderWidth:3,
        height:"auto",
        marginHorizontal:"auto",
        borderRadius:10,
      },
      rightSection:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        marginHorizontal:"50px",
        borderRadius:"32px",
        textAlign:"center",
      },
      form:{
        display:"flex",
        padding:100,
      },
      inputView: {
        backgroundColor: "lightblue",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
    
        alignItems: "right",
      },
    
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
    
      forgot_button: {
        height: 30,
        marginBottom: 30,
      },
    
      loginBtn: {
        width: "30%",
        borderRadius:5  ,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#0DF184",
        color:"#171EC9",
      },
});

export default Styles;