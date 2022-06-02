import React from 'react';
import { StyleSheet } from "react-native";

const AdminDsStyle= StyleSheet.create({
    actionSection: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        backgroundColor: "whitesmoke",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 20,
        minHeight:"80vh",
        flexWrap:"wrap",
    
       
      },
      action:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        flexGrow:1,
        flexShrink:1,
        flexBasis:300,
        marginVertical:50,
      
      },
      iconBox: {
        backgroundColor: "#F0A412",
        width: 70,
        height: 70,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
      },
      icon: {
        fontSize: 40,
        color: "white",
        fontWeight: "bold",
        textShadowColor: "#0631fb",
        textShadowRadius: 4,
      },
      actionName:{
        color:"#5e4e4e",
        fontSize:20,
        fontWeight:"700",
        width:170,
        textAlign:"center",
        marginTop:9,
    
    
      },
      
});

export default AdminDsStyle;