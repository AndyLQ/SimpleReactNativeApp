import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import Navigator from "./Routes/Drawer";

import Home from "./Screens/Home";
import About from "./Screens/About";
import ReviewDetails from "./Screens/ReviewDetails";

const getFonts = () =>
  Font.loadAsync({
    "lato-black": require("./assets/Fonts/Lato-Black.ttf"),
    "lato-bold": require("./assets/Fonts/Lato-Bold.ttf"),
    "lato-regular": require("./assets/Fonts/Lato-Regular.ttf"),
    "lato-light": require("./assets/Fonts/Lato-Light.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log("error")}
      />
    );
  }
}
