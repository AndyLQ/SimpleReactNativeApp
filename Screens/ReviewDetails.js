import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";
import { globalStyles, images } from "../Styles/Global";
import Card from "../Shared/Card";

export default function ReviewDetails({ navigation }) {
  const { item } = navigation.state.params;

  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{item.title}</Text>
        <Text style={globalStyles.pText}>{item.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating:</Text>
          <Image source={images.ratings[item.rating]}></Image>
        </View>
      </Card>
      <Button title="Go Back" onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({});
