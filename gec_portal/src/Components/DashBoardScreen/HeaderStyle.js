import React from "react";
import {StyleSheet} from "react-native";

const HeaderStyle= StyleSheet.create({
    head: {
        width: "100vw",
        height: "10vh",
        backgroundColor: "green",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
      },
      dashboardSection: {
        position: "relative",
        left: "-10%",
      },
      dashboardName: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
      },
      rightSection: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        right: "-14%",
      },
      iconSection: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: "white",
        borderColor: "pink",
        borderWidth: 2,
        marginBottom: 6,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      userName: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
      },
    
      menuSection:{
        position: "relative",
       
        backgroundColor:"#000000a8",
        width:"100vw",
        justifyContent:"space-evenly",
        alignItems:"center",
        padding:5,
        paddingVertical:25,
        color:"white",
        flexDirection:"row",
        flex:1,
        flexWrap:"wrap",
        
      },
      close:{
        backgroundColor:"#00000078",
        color:"white",
        padding:8,
        position:"absolute",
        right:3,
        top:0
      },
      closeIcon:{
        color:"white",
        fontSize:28,
      },
      profileSection:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginVertical:7,
        maxWidth:400,
        backgroundColor:"#00000078",
        paddingVertical:18,
        flexGrow:1,
        flexShrink:1,
        flexBasis:400,
        marginHorizontal:20,
      },
      UpperPrfSec:{
         display:"flex",
         flexDirection:"row",
         justifyContent:"space-evenly",
         alignItems:"center",
         width:"90%",
      },
      ProfSecImage:{
        width:130,
        height:130,
        borderRadius:32,
      },
      ProfSecUserName:{
        fontSize:20,
        fontWeight:"bold",
        color:"white",
      },
      LowerPrfSec:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        width:"90%",
    
      },
      btnPrfSec:{
        color:"#61E3EB",
        fontSize:15,
      },
      passwordField:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:16,
        flexGrow:1,
        flexShrink:1,
        flexBasis:300,
        maxWidth:400,
        marginHorizontal:20,
        backgroundColor:"#00000078",
      },
      passSection:{
        padding:8,
        backgroundColor:"#818181",
        alignItems:"stretch",
       
        
      },
      Menufield:{
        
        maxWidth:400,
        display:"flex",
        alignItems:"center",
        backgroundColor:"#00000078",
        paddingVertical:10,
        color:"white",
        marginVertical:7,
        flexGrow:1,
        flexShrink:1,
        flexBasis:300,
        paddingVertical:16,
        marginHorizontal:20,
    
    
        
      },
      MenufieldText:{
        color:"#61E3EB",
        fontSize:20,
        fontWeight:"700",
      },
      BtnSection:{
          justifyContent:"center",
          alignItems:"center",
      },
      saveBtn:{
          color:"white",
          backgroundColor:"green",
          paddingHorizontal:10,
          paddingVertical:8,
          fontSize:19,
          width:"fit-content",
          borderRadius:5,
      },
      MessageBox:{
          justifyContent:"center",
          alignItems:"center",
          padding:7,
          textAlign:"center",
      },
      MessageText:{
          color:"green",
          fontSize:20,
          fontWeight:"bold",
          textShadowColor:"white",
          textShadowRadius:0,
          textShadowOffset:{width:-2,height:-1},
          
      },

      
});
export default HeaderStyle;