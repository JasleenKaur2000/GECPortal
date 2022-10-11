import React ,{useState}from "react";
import { View, Text,ScrollView,FlatList,TouchableOpacity } from "react-native";

// IMPORTING Local Components and Styles
import GEC_Info from "./GEC_Subjects";
import GlobalStyle from "./StudetDsStyle";


// IMPORTING Libraries
import { DataTable } from 'react-native-paper';


// Actuall Component Start's here
const BodyPart = () => {
  
  
// A Variable is Used to store Current Sem of Student
  const [currentSem,setCurrentSem]=useState("3rd");

// A Variable is Used to store Selected GEC of Student 
  const [selectedGEC,setSelectedGEC]=useState("Printing And Packaging");

  
// Returning the actuall Body Part
  return (
    <View>
      <View style={[GlobalStyle.SelectedSection]}>
        <Text style={[GlobalStyle.SelectedText]} > You have Selected : <Text style={{color:"#0145ad"}}>{selectedGEC} </Text></Text>
      </View>

      <View style={[GlobalStyle.SemSection]} >
        <Text style={[GlobalStyle.SemText]} > GEC offerd for {currentSem} sem </Text>
         
      </View>
    <View>
        <ScrollView
         horizontal={true}
        >
      <DataTable style={[GlobalStyle.table]}>

      <DataTable.Header style={[GlobalStyle.tableHeader]}>
        <DataTable.Title style={[GlobalStyle.tableHeaderTittle]}   ><Text style={[GlobalStyle.tableTittleText]}> Sr. No.          </Text> </DataTable.Title>
        <DataTable.Title style={[GlobalStyle.tableHeaderTittle]}   ><Text style={[GlobalStyle.tableTittleText]}> Subject Name     </Text></DataTable.Title>
        <DataTable.Title style={[GlobalStyle.tableHeaderTittle]}   ><Text style={[GlobalStyle.tableTittleText]}> Subject Code     </Text></DataTable.Title>
        <DataTable.Title style={[GlobalStyle.tableHeaderTittle]}   ><Text style={[GlobalStyle.tableTittleText]}> Graduation       </Text></DataTable.Title>
        <DataTable.Title style={[GlobalStyle.tableHeaderTittle]}   ><Text style={[GlobalStyle.tableTittleText]}> Credit           </Text></DataTable.Title>
        <DataTable.Title style={[GlobalStyle.tableHeaderTittle]}   ><Text style={[GlobalStyle.tableTittleText]}> Offered By Dept. </Text></DataTable.Title>
        <DataTable.Title style={[GlobalStyle.tableHeaderTittle]}   ><Text style={[GlobalStyle.tableTittleText]}> Teacher Name     </Text></DataTable.Title>
        <DataTable.Title style={[GlobalStyle.tableHeaderTittle]}   ><Text style={[GlobalStyle.tableTittleText]}> Syllabus         </Text></DataTable.Title>
        <DataTable.Title style={[GlobalStyle.tableHeaderTittle]}   ><Text style={[GlobalStyle.tableTittleText]}> Select Any One   </Text></DataTable.Title>
      </DataTable.Header>

      <FlatList
        data={GEC_Info}
        renderItem={(element)=>{
          return(
            <>
        <DataTable.Row style={[GlobalStyle.tableRow]} >
        <DataTable.Cell style={[GlobalStyle.tableHeaderTittle]} > <Text style={[GlobalStyle.tableRowText]} > {element.index+1}            </Text> </DataTable.Cell>
        <DataTable.Cell style={[GlobalStyle.tableHeaderTittle]} > <Text style={[GlobalStyle.tableRowText]} > {element.item.subjectName}   </Text> </DataTable.Cell>
        <DataTable.Cell style={[GlobalStyle.tableHeaderTittle]} > <Text style={[GlobalStyle.tableRowText]} > {element.item.subjectCode}   </Text> </DataTable.Cell>
        <DataTable.Cell style={[GlobalStyle.tableHeaderTittle]} > <Text style={[GlobalStyle.tableRowText]} > {element.item.graduation}    </Text> </DataTable.Cell>
        <DataTable.Cell style={[GlobalStyle.tableHeaderTittle]} > <Text style={[GlobalStyle.tableRowText]} > {element.item.credit}        </Text> </DataTable.Cell>
        <DataTable.Cell style={[GlobalStyle.tableHeaderTittle]} > <Text style={[GlobalStyle.tableRowText]} > {element.item.offeredByDept} </Text> </DataTable.Cell>
        <DataTable.Cell style={[GlobalStyle.tableHeaderTittle]} > <Text style={[GlobalStyle.tableRowText]} > {element.item.teacherName}   </Text> </DataTable.Cell>
        <DataTable.Cell style={[GlobalStyle.tableHeaderTittle]} > <Text style={[GlobalStyle.tableRowText]} > {element.item.syllabus}      </Text> </DataTable.Cell>
        <DataTable.Cell style={[GlobalStyle.tableHeaderTittle]} > <Text style={[GlobalStyle.tableRowText]} >  UnSlected                   </Text> </DataTable.Cell>
      </DataTable.Row>

      </>
          );
        }}
      />
      
      </DataTable>
      </ScrollView>
      </View>
    </View>
  );
};

export default BodyPart;
