import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// IMPORTING Local Components and Styles

// IMPORTING Libraries

// IMPORTING Diff Icon Libraries
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/FontAwesome";

const BodyPart = ({ responsiveStyle, GlobalStyle }) => {
  return (
    <View>
      <View style={[GlobalStyle.actionSection]}>
        <View style={[GlobalStyle.action]}>
          <TouchableOpacity>
            <View style={[GlobalStyle.iconBox]}>
              <Icon1 name="add" style={[GlobalStyle.icon]} />
            </View>
          </TouchableOpacity>
          <Text style={[GlobalStyle.actionName]}> Create a New User </Text>
        </View>

        <View style={[GlobalStyle.action]}>
          <TouchableOpacity>
            <View style={[GlobalStyle.iconBox]}>
              <Icon2 name="minus" style={[GlobalStyle.icon]} />
            </View>
          </TouchableOpacity>
          <Text style={[GlobalStyle.actionName]}>Remove an Existing User</Text>
        </View>

        <View style={[GlobalStyle.action]}>
          <TouchableOpacity>
            <View style={[GlobalStyle.iconBox]}>
              <Icon2 name="time-slot" style={[GlobalStyle.icon]} />
            </View>
          </TouchableOpacity>
          <Text style={[GlobalStyle.actionName]}>
            Active / Deactive GEC Portal
          </Text>
        </View>

        <View style={[GlobalStyle.action]}>
          <TouchableOpacity>
            <View style={[GlobalStyle.iconBox]}>
              <Icon3 name="group" style={[GlobalStyle.icon]} />
            </View>
          </TouchableOpacity>
          <Text style={[GlobalStyle.actionName]}> Show All Users </Text>
        </View>
      </View>
    </View>
  );
};

export default BodyPart;
