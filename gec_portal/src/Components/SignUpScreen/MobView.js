import React from "react";

import { StyleSheet } from "react-native";

const MobViewStyle = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  image: {
    height: "35vh",
    width: "60vw",
  },
  CUH_txt: {
    fontSize: 25,
    width: "80vw",
  },
  GEC_txt: {
    marginVertical: "5vh",
    fontSize: 25,
  },
  middleSection: {
    display: "none",
  },
  rightSection: {
    marginHorizontal: 30,
    borderRadius: 16,
    marginBottom: "20vh",
  },
  lgn_txt: {
    fontSize: 32,
  },
  form: {
    padding: 25,
    width: "85vw",
  },
  havAcnt: {
    fontSize: 20,
    marginTop: 40,
  },
});

export default MobViewStyle;
