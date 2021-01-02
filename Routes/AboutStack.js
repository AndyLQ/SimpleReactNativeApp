import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import About from "../Screens/About";
import Header from "../Shared/Header";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="About GameZone" />
        ),
      };
    },
  },
};
const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "black",
    headerStyle: {
      backgroundColor: "#333",
      height: 80,
    },
  },
});

export default AboutStack;
