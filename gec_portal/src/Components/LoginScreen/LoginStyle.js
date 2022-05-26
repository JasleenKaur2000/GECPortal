import React from "react";
import { StyleSheet } from "react-native";


const LoginStyle= StyleSheet.create({
    page: {
        width:"100%",
        height:"auto",
        minHeight:"100%",
        backgroundColor: "#E6F4ED",
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop:25,
      },
      container:{
        display:"flex",
        justifyContent:"space-between",
      },
      leftSection:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      },
     
      CUH_txt:{
        textAlign:"center",
        color:"#786767",
        fontSize:25,
        fontWeight:"bold",
        width:"30vw",
        paddingHorizontal:"2.5vw",
      },
      GEC_txt:{
        marginVertical:"6vh",
        fontSize:22,
        fontFamily: 'Kameron',
        fontWeight:"500",
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
        
       
        textAlign:"center",
      },
      
      lgn_txt:{
        color:"#26CDA5",
        
       
      },
      form:{
        display:"flex",
        
      },
      inputView: {
        backgroundColor: "lightblue",
       
       
       
    
        alignItems:"flex-end",
      },
    
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
      frgtBox:{
        display:"flex",
        alignItems:"flex-start",
        paddingVertical :2,
      },
      forgot_button: {
        height: 30,
        marginBottom: 30,
        color:"red",
      },
      btnBox:{
        display:"flex",
        alignItems:"center",
      },
      
      loginBtn: {
        width: "60%",
        borderRadius:5  ,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
      
        backgroundColor: "#0DF184",
        color:"#171EC9",
      },
      havAcnt:{
        
        marginVertical:40,
        fontFamily: 'Ek Mukta',
        fontWeight:"500",
        color:"#4C5179",
        
      },
});

export default LoginStyle;