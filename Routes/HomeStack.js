import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Dimensions } from "react-native";

import Home from "../Screens/Home";
import ReviewDetails from "../Screens/ReviewDetails";
import Header from "../Shared/Header";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="GameZone" />,
      };
    },
  },

  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Review details",
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "black",
    headerStyle: {
      height: 80,
      backgroundColor: "#333",
      // borderWidth: 2,
      // borderColor: "blue",
    },
  },
});

export default HomeStack;
