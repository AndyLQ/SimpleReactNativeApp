import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { globalStyles } from "../Styles/Global";

export default class About extends Component {
  render() {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}> About </Text>
      </View>
    );
  }
}
