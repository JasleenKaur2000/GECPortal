import React from "react";
import {StyleSheet} from "react-native";

const StudentDsStyle=StyleSheet.create({
    SelectedSection:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:20,
        textAlign:"center",
    },
    SelectedText:{
        fontSize:30,
        color:"white",
        textShadowColor:"black",
        textShadowRadius:12,

    },
    SemSection:{
        display:"flex",
        paddingTop:15,
        paddingBottom:5,
        paddingLeft:10,
        
    },
    SemText:{
        fontSize:25,
        fontWeight:"bold",
        color:"orange"  
    },
    table:{
        minWidth:"100vw",
        width:"auto",
        height:"auto",

    },
    tableHeader:{
        minWidth:"100%",
        display:"flex",
        flex:1,
        flexWrap:"nowrap",
        justifyContent:"space-between",
        alignItems:"center",
        textAlign:"center",
    },
    tableRow:{
        minWidth:"100%",
        width:"fit-content",
        display:"flex",
        flex:1,
        flexWrap:"nowrap",
        justifyContent:"space-between",
        alignItems:"center",
        textAlign:"center",
        
    },
    tableHeaderTittle:{
        justifyContent:"space-around",
        alignItems:"center",
        flexGrow:1,
        flexShrink:1,
        textAlign:"center",
        width:"fit-content",
        minWidth:"260px",


    },
    tableTittleText:{
        fontSize:20,
        fontWeight:"bold",
        color:"green",
        minWidth:"260px",
        padding:3,
        
    },
    tableRowText:{
        fontSize:14,
        fontWeight:"400",
        color:"gray",
        minWidth:"260px",
        padding:3, 
    },
});
export default StudentDsStyle;