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
        paddingTop:25,
      },
      container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
      },
      leftSection:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      },
      image: {
        height: "40vh",
        width: "25vw",
        
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
        marginHorizontal:50,
        borderRadius:32,
        textAlign:"center",
      },
      
      lgn_txt:{
        color:"#26CDA5",
        fontSize:30,
       
      },
      form:{
        display:"flex",
        padding:52,
      },
      inputView: {
        backgroundColor: "lightblue",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
    
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
        fontSize:20,
        marginVertical:40,
        fontFamily: 'Ek Mukta',
        fontWeight:"500",
        color:"#4C5179",
        
      },
});

export default Styles;