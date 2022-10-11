import React from 'react';
import {View,Text,StyleSheet} from "react-native";

const DashBoardMessage = (props) => {

// Returning the Actuall Body Part 
  return (
   <View>
       <View style={[Design.dsbrdMessage]} >
         <Text style={[Design.message]}> {props.DsBrdMessage} </Text>
         <Text style={[Design.CUH_text]} > Central University of Haryana </Text>
       </View>
   </View>
  )
}


export default DashBoardMessage;


// A variable used to store all Styling CSS of this page
const Design=StyleSheet.create({
    dsbrdMessage:{
        width:"100vw",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        padding:20,
        backgroundColor:"whitesmoke",
        textAlign:"center",
      },
      message:{
         fontSize:25,
         color:"green",
         fontWeight:"700",
         textShadowColor:"#180a0a",
         textShadowRadius:"1.5px",
         textShadowOffset:{width:"2px",height:"1px"},
         marginTop:20,
         marginBottom:40,
      },
      CUH_text:{
        fontSize:30,
        color:"#979595e8",
        fontWeight:"700",
        textShadowColor:"black",
        marginBottom:10,
        textShadowColor:"#040605a6",
        textShadowRadius:"1.5px",
        textShadowOffset:{width:"2px",height:"1px"},
      },
});