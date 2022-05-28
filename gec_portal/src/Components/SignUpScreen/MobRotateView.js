import React from "react";
import { StyleSheet } from "react-native";

const MobRotateView = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  image: {
    height: "53vh",
    width: "28vw",
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
    marginHorizontal: 110,
    borderRadius: 16,
    marginBottom: "20vh",
  },
  lgn_txt: {
    fontSize: 32,
  },
  form: {
    padding: 25,
  },
  havAcnt: {
    fontSize: 20,
    marginTop: 40,
  },
});

export default MobRotateView;
