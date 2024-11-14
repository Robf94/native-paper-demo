import { AppRegistry } from "react-native";
import { name as appName } from "../app.json";
import HomeScreen from "./Components/HomeScreen";
import * as React from "react";

function App() {
  return <HomeScreen />;
}

AppRegistry.registerComponent(appName, () => Main);

export default App;
