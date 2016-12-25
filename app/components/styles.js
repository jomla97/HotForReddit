import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

const primaryColor = "#ff9000";
const primaryColorDark = "#e87f00";
const background = "#e8e8e8";
const primaryFontColor = "#545454";

module.exports = StyleSheet.create({
  toolbar: {
    backgroundColor: primaryColor,
    height: 56
  },
  drawer: {
    backgroundColor: background
  },
  contentContainer: {
    backgroundColor: "#e8e8e8",
    flex: 1,
    padding: 5,
    //alignItems: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    margin: 5,
    //padding: 5,
    flex: 1,
    elevation: 2
  },
  previewImage: {
    height: 120,
    width: null,
    resizeMode: "cover",
    flex: 1
  },
  postTitlePreview: {
    margin: 5,
    fontSize: 16
  },
  buttonContainer: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    flexDirection: "row-reverse"
  },
  icon: {
    color: primaryFontColor
  },
  voteButton: {
    paddingLeft: 5,
    paddingRight: 5
  },
  otherButton: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 5
  },
  voteButtonContainer: {
    flex: 1,
    flexDirection: "row-reverse",
  },
  otherButtonContainer: {
    flex: 4,
    flexDirection: "row"
  },
  voteCount: {
    paddingTop: 5
  }
});
