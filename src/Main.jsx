import * as React from "react";
import { PaperProvider } from "react-native-paper";
import App from "./App";
// import {lightTheme, darkTheme} from "./themes/theme";

export default function Main() {
  return (
    // <PaperProvider theme={darkTheme}>
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}
